import puppeteer from 'puppeteer';

const BrowserStart = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    defaultViewport: null,
  });
  const [page] = await browser.pages();
  return {
    browser,
    page,
  };
};

export default BrowserStart;
