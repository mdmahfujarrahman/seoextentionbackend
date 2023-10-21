import BrowserStart from '../../shared/BrowserStart.js';
import {
  localfeaturedBtn,
  localfeaturedRegister,
  randomHearAbout,
} from './automation.constant.js';
import { AutoMationUtitls } from './automation.utils.js';

const startAutomation = async automation => {
  const { page } = await BrowserStart();
  await page.goto(automation.websiteUrl);
  await page.waitForSelector('#TopNavLogin_HL_top_Register', {
    visible: true,
    timeout: 100000,
  });
  await page.click(localfeaturedBtn);
  await page.waitForSelector(
    '#PageContent_RegistrationForm_Panel_CustomerInfo',
  );
  await AutoMationUtitls.typeInInputField(
    page,
    localfeaturedRegister,
    automation,
  );
  console.log(randomHearAbout);
  const selectElement = await page.$('#PageContent_RegistrationForm_SourceId');
  await selectElement.select(randomHearAbout);
  await page.$eval('#PageContent_RegistrationForm_Terms', checkbox => {
    checkbox.checked = true;
  });
};

export const AutoMationService = {
  startAutomation,
};
