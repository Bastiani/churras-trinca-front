import { FormFieldLabel } from '@smooth-ui/core-sc';
import { connect } from 'formik';
import get from 'lodash/get';
import React from 'react';
import DatePicker from 'react-datepicker';

import { Error, InputContainer } from './styles/InputFormik';

interface IDatePickerFormik {
  name: string;
  formik?: any;
  type?: string;
  label: string;
  placeholder?: string;
}

const DatePickerFormik = ({
  name,
  formik,
  label: labelmsg,
  ...props
}: IDatePickerFormik) => {
  const handleChange = (date: any) => {
    formik.setFieldValue(name, date);
  };

  const { values, errors, touched, handleBlur } = formik;
  const value = get(values, name, '');
  const wasTouched = get(touched, name);
  const fieldError = wasTouched && get(errors, name, null);

  return (
    <InputContainer>
      <FormFieldLabel name={name}>{labelmsg}</FormFieldLabel>
      <DatePicker
        selected={value}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        dateFormat="dd/MM/yyyy"
        {...props}
      />
      {fieldError && <Error>{fieldError}</Error>}
    </InputContainer>
  );
};

export default connect(DatePickerFormik);
