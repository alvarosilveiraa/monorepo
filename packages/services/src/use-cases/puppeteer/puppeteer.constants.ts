const {PUPPETEER_HEADLESS = 'true'} = process.env;

export const PUPPETEER_ARGS = [
  '--no-sandbox',
  '--disable-blink-features=AutomationControlled',
  '--disable-setuid-sandbox',
  '--disable-dev-shm-usage',
  '--disable-web-security',
];

export const PUPPETEER_OPTIONS = {
  args: PUPPETEER_ARGS,
  headless: (PUPPETEER_HEADLESS === 'true'),
  ignoreHTTPSErrors: true,
};
