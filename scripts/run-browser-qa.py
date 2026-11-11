import json, subprocess, os
from pathlib import Path
cli = os.environ.get('PLAYWRIGHT_CLI', '/Users/pattywoods/.npm/_npx/31e32ef8478fbf80/node_modules/@playwright/cli/playwright-cli.js')
result = subprocess.run(['node', cli, '-s=texas', 'run-code', Path('scripts/browser-qa.js').read_text()], capture_output=True, text=True)
Path('output/playwright/qa-run.log').write_text(result.stdout + result.stderr)
if result.returncode: raise SystemExit(result.stdout[-3000:] + result.stderr[-1000:])
raw = result.stdout.split('### Result\n',1)[1].split('\n### Ran',1)[0]
data = json.loads(raw)
Path('output/playwright/qa-results.json').write_text(json.dumps(data,indent=2))
print(json.dumps({'checks':len(data['assertions']), 'failed':data['failed'], 'blocked':data['blocked']},indent=2))
