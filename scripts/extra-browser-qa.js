async page => {
 const r = {};
 await page.setViewportSize({width:390,height:800});
 await page.goto('http://127.0.0.1:4173'); await page.evaluate(()=>document.fonts.ready);
 const cdp=await page.context().newCDPSession(page);
 await cdp.send('DOM.enable'); await cdp.send('CSS.enable');
 const doc=await cdp.send('DOM.getDocument');
 const h=await cdp.send('DOM.querySelector',{nodeId:doc.root.nodeId,selector:'h1'});
 const c=await cdp.send('DOM.querySelector',{nodeId:doc.root.nodeId,selector:'.pill-row button'});
 r.renderedHeadlineFont=await cdp.send('CSS.getPlatformFontsForNode',{nodeId:h.nodeId});
 r.renderedButtonFont=await cdp.send('CSS.getPlatformFontsForNode',{nodeId:c.nodeId});
 await page.route('**/assets/fonts/**',route=>route.abort());
 await page.reload(); await page.evaluate(()=>document.fonts.ready);
 r.fontFailureFallback=await page.evaluate(()=>({noOverflow:document.documentElement.scrollWidth===innerWidth,visible:document.querySelector('h1').getBoundingClientRect().height>0,status:[...document.fonts].map(f=>f.status)}));
 await page.unroute('**/assets/fonts/**');
 const browser=page.context().browser();
 const ctx=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:800}});
 const fallback=await ctx.newPage(); await fallback.goto('http://127.0.0.1:4173');
 r.noJS={cards:await fallback.locator('.service-card').count(),overflow:await fallback.evaluate(()=>document.documentElement.scrollWidth>innerWidth)};
 await fallback.locator('.faq summary').nth(1).click();
 r.noJS.faqWorks=await fallback.locator('.faq details').nth(1).getAttribute('open')!==null;
 await ctx.close();
 await page.goto('http://127.0.0.1:4173');
 return r;
}
