import Head from 'next/head';
import DashboardLayout from '../../../layouts/DashboardLayout';
import UserCreation from '../../../components/UserCreation';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useCreateUserMutation } from '../../../services/bima';
import { useEffect } from 'react';
import { toaster } from 'evergreen-ui';
import { useRouter } from 'next/router';

export default function CreateUserPage() {
  const [createUser, { data, isError, isLoading }] = useCreateUserMutation();
  const router = useRouter();
  useEffect(() => {
    if (data) {
      toaster.notify(data.message);
      router.push('/users');
    }
  }, [data, isError, isLoading]);

  const validationForm = Yup.object({
    username: Yup.string().required('Please enter your username'),
    password: Yup.string().required('Please enter your password'),
    email: Yup.string()
      .email('Must be a valid email')
      .required('Please enter your email'),
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please enter your password confirmation'),
    phone: Yup.string().required('Please enter your phone number'),
    avatar: Yup.string(),
    birthDate: Yup.date().required('Please enter your birthDate')
  });
  const initialValues = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    passwordConfirmation: '',
    phone: '',
    avatar: '',
    birthDate: ''
  };

  async function create(values: any, { resetForm }: any) {
    try {
      await createUser({
        username: values.username,
        password: values.password,
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        avatar: values.avatar,
        birthDate: values.birthDate
      });
    } catch (e) {
      resetForm();
      console.log(e);
    }
  }
  return (
    <DashboardLayout>
      <Head>
        <title>Users</title>
      </Head>
      <div className="mt-8">
        <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
          Create new user
        </h2>
        <div className="sm:block">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col mt-2">
              <div className="align-middle min-w-full overflow-x-auto overflow-hidden sm:rounded-lg">
                <Formik
                  initialValues={initialValues}
                  onSubmit={create}
                  validationSchema={validationForm}
                >
                  {(props) => {
                    return <UserCreation formik={props} />;
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
