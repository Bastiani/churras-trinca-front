import React from 'react';
import { Button, Card } from 'antd';
import { Formik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

import InputFormik from '../components/Input/InputFormik';
import SignupMutation from './mutations/SignupMutation';

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
    name: yup.string().required('Nome é obrigatório!'),
    email: yup
      .string()
      .email('Email inválido!')
      .required('Email é obrigatório!'),
    password: yup
      .string()
      .required('Senha é obrigatório!')
      .test('passwordStronger', 'Senha não é forte', function valid() {
        const { passwordStronger } = this.parent;
        return passwordStronger >= 31;
      }),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref('password')], 'Senha não confere')
      .required('Senha não confere')
  });

const Signin = ({ history }: any) => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      password: '',
      passwordRepeat: '',
      passwordStronger: 0
    }}
    validationSchema={validationSchema()}
    onSubmit={(values, { setSubmitting }) => {
      const onCompleted = (res: any) => {
        setSubmitting(false);
        const response = res && res.UserRegisterWithEmail;

        if (response && response.error) {
          console.log('Erro', 'Erro ao tentar cadastrar');
          openNotificationWithIcon('error', 'Erro na operação', response.error);
        } else if (response.token) {
          setToken(response.token);
          history.push('/');
        }
      };

      const onError = () => {
        setSubmitting(false);
        console.log('Erro', 'Erro ao tentar cadastrar');
        openNotificationWithIcon(
          'error',
          'Erro na operação',
          'Erro ao tentar cadastrar'
        );
      };
      const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        passwordRepeat,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        passwordStronger,
        ...newValues
      } = values;
      SignupMutation.commit({ ...newValues }, onCompleted, onError);
      setSubmitting(false);
    }}
    render={({ handleSubmit, setFieldValue }) => (
      <Container>
        <CardStyled>
          <input type="hidden" name="passwordStronger" />

          <InputFormik label="Name" name="name" placeholder="Name" />
          <InputFormik label="Email" name="email" placeholder="Email" />
          <InputFormik
            label="Senha"
            name="password"
            placeholder="Senha"
            type="password"
            checkPassword
            strongerlevel={stronger =>
              setFieldValue('passwordStronger', stronger)
            }
          />

          <InputFormik
            label="Repetir Senha"
            name="passwordRepeat"
            placeholder="Repetir senha"
            type="password"
          />
          <ButtonStyled type="primary" onClick={() => handleSubmit()}>
            Criar conta
          </ButtonStyled>
        </CardStyled>
      </Container>
    )}
  />
);

export default Signin;
