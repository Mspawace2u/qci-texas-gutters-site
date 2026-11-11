async page => {
  const results = {testedAt: new Date().toISOString(), scope:'Local Chromium; sticky vertical service sequence', widths:[], assertions:[], blocked:[]};
  const check = (name, value) => { results.assertions.push({name,pass:!!value}); };
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => {
    window.qaCLS = 0;
    new PerformanceObserver(list => list.getEntries().forEach(e => {if(!e.hadRecentInput) window.qaCLS += e.value;})).observe({type:'layout-shift',buffered:true});
  });
  for (const width of [320,375,390,430,1280]) {
    await page.setViewportSize({width,height:width===1280?900:800});
    await page.goto('http://127.0.0.1:4173');
    await page.evaluate(()=>document.fonts.ready);
    const geometry = await page.evaluate(() => {
      const rect = el => {const r=el.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height};};
      const pills = [...document.querySelectorAll('.pill')].map(el=>{
        const range = document.createRange();range.selectNodeContents(el);
        const cs=getComputedStyle(el);
        return {...rect(el),text:el.textContent.trim(),textWidth:range.getBoundingClientRect().width,availableWidth:el.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight),lines:range.getClientRects().length};
      });
      return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,startY:scrollY,pills,heroPills:[...document.querySelectorAll('.pill-row .pill')].map(rect),benefitsPadding:[getComputedStyle(document.querySelector('.why')).paddingTop,getComputedStyle(document.querySelector('.why')).paddingBottom],fonts:[...document.fonts].map(f=>({family:f.family,status:f.status})),cls:window.qaCLS,images:[...document.images].map(i=>({path:i.getAttribute('src'),loaded:i.complete&&i.naturalWidth>0}))};
    });
    check(width+' no page overflow',geometry.width===geometry.scrollWidth);
    check(width+' no startup scrolling',geometry.startY===0);
    check(width+' single-line pills',geometry.pills.every(p=>p.lines===1&&p.textWidth<=p.availableWidth+1));
    check(width+' equal hero CTA geometry',Math.abs(geometry.heroPills[0].width-geometry.heroPills[1].width)<1&&Math.abs(geometry.heroPills[0].height-geometry.heroPills[1].height)<1);
    check(width+' actual fonts loaded',geometry.fonts.every(f=>f.status==='loaded'));
    if(width<821)check(width+' approved benefits spacing',geometry.benefitsPadding.join('/')==='29px/32px');
    await page.screenshot({path:`output/playwright/hero-${width}.png`});
    const cards=page.locator('.service-card');
    const top = await cards.nth(0).evaluate(el=>el.getBoundingClientRect().top+scrollY);
    await page.evaluate(y=>scrollTo({top:y,behavior:'instant'}),top-24);
    const before=await cards.evaluateAll(els=>els.map(el=>el.getBoundingClientRect().top));
    await page.screenshot({path:`output/playwright/stack-${width}-01.png`});
    await page.mouse.wheel(0,300);
    await page.waitForTimeout(250);
    const after=await cards.evaluateAll(els=>els.map(el=>el.getBoundingClientRect().top));
    check(width+' first card remains sticky while second rises',Math.abs(after[0]-before[0])<2&&after[1]<before[1]-200);
    await page.screenshot({path:`output/playwright/stack-${width}-02.png`});
    const boundary = await page.locator('#services').evaluate(el=>el.getBoundingClientRect().bottom+scrollY);
    await page.evaluate(y=>scrollTo({top:y,behavior:'instant'}),boundary+50);
    const last = await cards.last().boundingBox();
    check(width+' clean sticky section exit',last.y+last.height<0);
    results.widths.push({...geometry,scrollSamples:{before,after}});
  }
  await page.setViewportSize({width:390,height:800});
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto('http://127.0.0.1:4173');
  check('reduced motion ordinary flow',await page.locator('.service-card').evaluateAll(els=>els.every(el=>getComputedStyle(el).position==='relative')));
  await page.locator('#services').scrollIntoViewIfNeeded();
  await page.screenshot({path:'output/playwright/reduced-motion-390.png'});
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.setViewportSize({width:740,height:390});
  check('short landscape ordinary flow',await page.locator('.service-card').evaluateAll(els=>els.every(el=>getComputedStyle(el).position==='relative')));
  await page.setViewportSize({width:390,height:800});
  await page.goto('http://127.0.0.1:4173');
  await page.keyboard.press('Tab');
  check('skip link keyboard focus',await page.locator('.skip-link').evaluate(el=>el===document.activeElement));
  await page.keyboard.press('Enter');
  check('skip link reaches main',await page.locator('main').evaluate(el=>el===document.activeElement));
  await page.locator('#menuButton').click();
  check('menu reaches services heading',await page.locator('#services-title').evaluate(el=>el===document.activeElement));
  const faq=page.locator('.faq details').nth(1);
  await faq.locator('summary').focus();await page.keyboard.press('Enter');
  check('FAQ keyboard opens',await faq.getAttribute('open')!==null);
  check('calls disabled',await page.locator('button.pill-main').evaluateAll(els=>els.every(el=>el.disabled)));
  check('no phone links',await page.locator('a[href^="tel:"]').count()===0);
  check('noindex nofollow',await page.locator('meta[name="robots"]').getAttribute('content')==='noindex,nofollow');
  check('all local anchors resolve',await page.locator('a[href^="#"]').evaluateAll(els=>els.every(a=>document.querySelector(a.getAttribute('href')))));
  check('no JavaScript errors',errors.length===0);
  results.runtimeErrors=errors;
  results.failed=results.assertions.filter(a=>!a.pass);
  return results;
}
