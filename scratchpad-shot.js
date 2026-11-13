const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  const aulas = await page.$('#aulas');
  if (aulas) {
    await aulas.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await aulas.screenshot({ path: 'aulas-section-v2.png' });
  }

  await page.goto('http://localhost:3000/planos-e-horarios', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'planos-e-horarios.png', fullPage: true });

  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  console.log('done', errors);
  await browser.close();
})();
