const mahfujarSiteConstantInput = {
  name: 'input[placeholder="What\'s your good name?"]',
  email: 'input[placeholder="What\'s your email address?"]',
  message: 'textarea[placeholder="What you want to say?"]',
};

export const localfeaturedBtn = '#TopNavLogin_HL_top_Register';

export const localfeaturedRegister = {
  firstName: '#PageContent_RegistrationForm_FirstName',
  lastName: '#PageContent_RegistrationForm_LastName',
  email: '#PageContent_RegistrationForm_Email',
  password: '#PageContent_RegistrationForm_Password',
  confirmPassword: '#PageContent_RegistrationForm_ReEnterPassword',
};

const localFeaturedHearAbout = [
  'Bing',
  "Dont' Know/Can't Remember",
  'E-mail',
  'Friend',
  'Google',
  'Other',
  'Yahoo!',
];

const randomNumber = Math.floor(Math.random() * localFeaturedHearAbout.length);

export const randomHearAbout = localFeaturedHearAbout[randomNumber];

export const automationConstant = {
  mahfujarSiteConstantInput,
};
