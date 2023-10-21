const typeInInputField = async (page, constant, automation) => {
  for (const key in constant) {
    await page.type(constant[key], automation[key], { delay: 100 });
  }
};

export const AutoMationUtitls = {
  typeInInputField,
};
