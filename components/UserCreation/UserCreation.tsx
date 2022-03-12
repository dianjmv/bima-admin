import { useCreateUserMutation } from '../../services/users';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toaster } from 'evergreen-ui';
import * as Yup from 'yup';
import { Formik } from 'formik';
import UserCreationForm from '../UserCreationForm';
import { useGetRolesQuery } from '../../services/roles';
import {RolesTypes} from "../../types/RolesTypes";

interface pageProps {
  initialValues?: {
    username?: string;
    password?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    avatar?: string;
    birthDate?: string;
    role?: Array<RolesTypes>;
  };
}

export default function UserCreation(props: pageProps) {
  const [createUser, { data, isError, isLoading }] = useCreateUserMutation();
  const roleService = useGetRolesQuery();
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
    birthDate: Yup.date().required('Please enter your birthDate'),
    role : Yup.string().required('Please enter your role')
  });
  const initialValues = {
    username: props?.initialValues?.username || '',
    password: props?.initialValues?.password || '',
    email: props?.initialValues?.email || '',
    firstName: props?.initialValues?.firstName || '',
    lastName: props?.initialValues?.lastName || '',
    passwordConfirmation: props?.initialValues?.password || '',
    phone: props?.initialValues?.phone || '',
    avatar: props?.initialValues?.avatar || '',
    birthDate: props?.initialValues?.birthDate || '',
    role: props?.initialValues?.role || roleService.data?.roles || []
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
                  return <UserCreationForm formik={props} />;
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
