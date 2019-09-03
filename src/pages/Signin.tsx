import React from 'react';
import { Button, Card } from 'antd';
import { Formik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

import InputFormik from '../components/Input/InputFormik';
import SigninMutation from './mutations/SigninMutation';

import { setToken } from '../security/authentication';
import { openNotificationWithIcon } from '../components/Notification';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CardStyled = styled(Card)`
  display: flex;
  width: 300px;
  justify-content: center;
  flex-direction: column;
`;

const ButtonStyled = styled(Button)`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 6px;
`;

const validationSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .email('Invalid email!')
      .required('Email required!'),
    password: yup.string().required('Password is required!')
  });

const Signin = ({ history }: any) => (
  <Formik
    initialValues={{
      email: '',
      password: ''
    }}
    validationSchema={validationSchema()}
    onSubmit={(values, { setSubmitting }) => {
      const onCompleted = (res: any) => {
        setSubmitting(false);
        const response = res && res.UserLoginWithEmail;

        if (response && response.error) {
          console.log('Erro', 'Erro ao tentar fazer login');
          openNotificationWithIcon('error', 'Erro na operação', response.error);
        } else if (response && response.token) {
          setToken(response.token);
          history.push('/');
        }
      };

      const onError = () => {
        setSubmitting(false);
        console.log('Erro', 'Erro ao tentar fazer login');
        openNotificationWithIcon(
          'error',
          'Erro na operação',
          'Erro ao tentar fazer login'
        );
      };

      SigninMutation.commit(values, onCompleted, onError);
      setSubmitting(false);
    }}
    render={({ handleSubmit }) => (
      <Container>
        <CardStyled>
          <InputFormik label="Email" name="email" placeholder="Email" />
          <InputFormik
            type="password"
            label="Senha"
            name="password"
            placeholder="Senha"
          />
          <ButtonStyled type="primary" onClick={() => handleSubmit()}>
            Entrar
          </ButtonStyled>
        </CardStyled>
      </Container>
    )}
  />
);

export default Signin;
