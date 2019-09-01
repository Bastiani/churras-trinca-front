const isRequiredField = ({ validationSchema }: any, name: string) => {
  try {
    const isRequired = validationSchema.fields[name]
      ? !!validationSchema.fields[name].tests.find(
          (test: any) => test.OPTIONS.name === 'required'
        ).OPTIONS.name
      : false;
    return isRequired;
  } catch (event) {
    return false;
  }
};

export default isRequiredField;
