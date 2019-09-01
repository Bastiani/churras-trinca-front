import * as React from 'react';
import { connect } from 'formik';
import get from 'lodash/get';
import styled from 'styled-components';
import { DatePicker } from 'antd';
import moment from 'moment';
import Label from '../Label/Label';

const { RangePicker } = DatePicker;

const Error = styled.div`
  color: #f44453;
`;

const DatePickerStyled = styled(DatePicker)`
  width: 100%;
`;

const RangePickerStyled = styled(RangePicker)`
  width: 100%;
`;

interface IProps {
  name: string;
  formik?: any;
  label: string;
  placeholder?: string;
  rangePicker?: boolean;
}

const DatePickerFormik = ({
  name,
  label: labelmsg,
  formik,
  placeholder,
  rangePicker = false,
  ...props
}: IProps) => {
  const convertDate = (value: string) => moment.utc(value);

  const handleChange = (date: any) => {
    formik.setFieldValue(name, date);
  };

  const { values, errors, touched } = formik;
  const value = get(values, name, '');
  const wasTouched = get(touched, name);
  const fieldError = wasTouched && get(errors, name, null);

  return (
    <div>
      <Label formik={formik} name={name} labelMsg={labelmsg}>
        {rangePicker ? (
          <RangePickerStyled
            value={value}
            format="DD/MM/YYYY"
            onChange={handleChange}
            name={name}
            {...props}
          />
        ) : (
          <DatePickerStyled
            value={value && convertDate(value)}
            format="DD/MM/YYYY"
            onChange={handleChange}
            name={name}
            placeholder={placeholder}
            {...props}
          />
        )}
        {fieldError && <Error>{fieldError}</Error>}
      </Label>
    </div>
  );
};

export default connect(DatePickerFormik);
