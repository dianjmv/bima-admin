import LoginLayout from '../../layouts/LoginLayout';
import { useEffect, useState } from 'react';
import { useLoginUserMutation } from '../../services/bima';
import { useDispatch } from 'react-redux';
import { setAuthAccess } from '../../store/slices/auth';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import Head from 'next/head';
import { setLocalAuthToken } from '../../utils/Utils';
import * as Yup from 'yup';
import { Formik } from 'formik';
import LoginForm from '../LoginForm';

const Login = () => {
  const [login, { data, isError, isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const validationForm = Yup.object({
    username: Yup.string().required('Please enter your username'),
    password: Yup.string().required('Please enter your password')
  });
  const initialValues = {
    username: '',
    password: ''
  };

  async function loginUser(values: any, { resetForm }: any) {
    try {
      await login({
        username: values.username,
        password: values.password
      });
    } catch (e) {
      resetForm();
      console.log(e);
    }
  }
  useEffect(() => {
    if (!isError && data?.access_token) {
      setLocalAuthToken(data);
      dispatch(setAuthAccess(data));
      router.push('/');
    }
  }, [data, isError, isLoading]);

  return (
    <LoginLayout>
      <Head>
        <title>Login</title>
      </Head>
      <div className="mt-6">
        <Formik
          initialValues={initialValues}
          onSubmit={loginUser}
          validationSchema={validationForm}
        >
          {(props) => {
            return <LoginForm formik={props} />;
          }}
        </Formik>
      </div>
    </LoginLayout>
  );
};
export default Login;
