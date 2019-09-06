import React from 'react';
import isRequiredField from './isRequiredField';

import { ContentStyled, LabelStyled } from '../styles/Label';

interface IProps {
  children: React.ReactNode;
  labelMsg: string;
  labelTop?: boolean;
  name: string;
  formik: any;
}

const Label = ({ children, labelMsg, labelTop = true, name, formik }: IProps) =>
  labelTop ? (
    <ContentStyled isRequired={formik && isRequiredField(formik, name)}>
      <label htmlFor={name}>
        {labelMsg}
        {children}
      </label>
    </ContentStyled>
  ) : (
    <ContentStyled isRequired={formik && isRequiredField(formik, name)}>
      <LabelStyled label={labelMsg}>{children}</LabelStyled>
    </ContentStyled>
  );

export default Label;
