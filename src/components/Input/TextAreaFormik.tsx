import * as React from 'react';
import get from 'lodash/get';
import { connect } from 'formik';
import { Input } from 'antd';

import Label from '../Label/Label';
import { Error, TextAreaContent } from '../styles/InputFormik';

const { TextArea } = Input;

interface ITextareaFormik {
  name: string;
  formik?: any;
  label: string;
  placeholder?: string;
  labelTop?: boolean;
}

const InputFormik = ({
  name,
  formik,
  label: labelmsg,
  placeholder,
  ...props
}: ITextareaFormik) => {
  const handleChange = (event: any) => {
    const { value } = event.target;
    formik.setFieldValue(name, value);
  };

  const { values, errors, touched, handleBlur } = formik;
  const value = get(values, name, '');
  const wasTouched = get(touched, name);
  const fieldError = wasTouched && get(errors, name, null);

  return (
    <TextAreaContent>
      <Label formik={formik} name={name} labelMsg={labelmsg}>
        <TextArea
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          name={name}
          placeholder={placeholder}
          {...props}
        />
        {fieldError && <Error>{fieldError}</Error>}
      </Label>
    </TextAreaContent>
  );
};

export default connect(InputFormik);
