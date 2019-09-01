import React, { useState } from 'react';

import get from 'lodash/get';

import { Input, Progress } from 'antd';
import { connect } from 'formik';

import Label from '../Label/Label';
import { Error } from '../styles/InputFormik';

interface IInputFormik {
  name: string;
  formik?: any;
  type?: string;
  checkPassword?: boolean;
  strongerlevel?: (level: number) => void;
  label: string;
  labelTop?: boolean;
  placeholder?: string;
}

const InputFormik = ({
  name,
  formik,
  type,
  checkPassword,
  strongerlevel,
  label: labelmsg,
  placeholder,
  ...props
}: IInputFormik) => {
  const [passwordStronger, setPasswordStronger] = useState(0);

  const handleValidatePassword = (password: string) => {
    const matchedCase = ['[$@$!%*#?&]', '[A-Z]', '[0-9]', '[a-z]'];

    let i;
    let counterMatchedCase = 0;

    if (password.length === 0) {
      setPasswordStronger(0);
      return;
    }

    for (i = 0; i < matchedCase.length; i += 1) {
      if (new RegExp(matchedCase[i]).test(password)) {
        counterMatchedCase += 1;
      }
    }

    switch (counterMatchedCase) {
      case 3:
        setPasswordStronger(50);
        strongerlevel && strongerlevel(50);
        break;
      case 4:
        setPasswordStronger(99.9);
        strongerlevel && strongerlevel(99.9);
        break;
      default:
        setPasswordStronger(30);
        strongerlevel && strongerlevel(30);
        break;
    }
  };

  const handleChange = (event: any) => {
    const { value } = event.target;

    if (type === 'password' && checkPassword) handleValidatePassword(value);

    formik.setFieldValue(name, type === 'number' ? Number(value) : value);
  };

  const { values, errors, touched, handleBlur } = formik;
  const value = get(values, name, '');
  const wasTouched = get(touched, name);
  const fieldError = wasTouched && get(errors, name, null);

  return (
    <Label formik={formik} name={name} labelMsg={labelmsg}>
      <Input
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        type={type || 'text'}
        placeholder={placeholder}
        {...props}
      />
      {type === 'password' && checkPassword && (
        <Progress
          strokeColor={{
            from: '#EF2832',
            to: '#4377E8'
          }}
          percent={passwordStronger}
          showInfo={false}
        />
      )}
      {fieldError && <Error>{fieldError}</Error>}
    </Label>
  );
};

export default connect(InputFormik);
