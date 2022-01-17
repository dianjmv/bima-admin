import { Button } from 'evergreen-ui';

export default function UserCreationForm({ formik }: any) {
  return (
    <form
      className="grid sm:grid-cols-2 grid-cols-1 py-4 gap-y-10 gap-x-16"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid grid-cols-1">
        <div className="block space-y-1">
          <input
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id={'firstName'}
            name="firstName"
            placeholder="First Name..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="invalid-feedback text-xs text-red-500 absolute">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="block space-y-1">
          <input
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            name="lastName"
            id="lastName"
            placeholder="Last Name..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="invalid-feedback text-xs text-red-500 absolute">
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="block space-y-1">
          <input
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id={'email'}
            name="email"
            type="email"
            placeholder="Email...."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="invalid-feedback text-xs text-red-500 absolute">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="block space-y-1">
          <input
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id={'username'}
            name="username"
            placeholder="Username..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="invalid-feedback text-xs text-red-500 absolute">
              {formik.errors.username}
            </div>
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="block space-y-1">
          <div className="block space-y-1">
            <input
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="password"
              name="password"
              placeholder="Password..."
              id={'password'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback text-xs text-red-500 absolute">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="block space-y-1">
          <input
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="password"
            id={'passwordConfirmation'}
            name="passwordConfirmation"
            placeholder="Repeat Password..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirmation}
          />
          {formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation ? (
            <div className="invalid-feedback text-xs text-red-500 absolute">
              {formik.errors.passwordConfirmation}
            </div>
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="block space-y-1">
          <input
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="text"
            id={'phone'}
            name="phone"
            placeholder="Phone Number..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="invalid-feedback text-xs text-red-500 absolute">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="block space-y-1">
          <input
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="text"
            id={'avatar'}
            name="avatar"
            placeholder="Avatar Url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.avatar}
          />
          {formik.touched.avatar && formik.errors.avatar ? (
            <div className="invalid-feedback text-xs text-red-500 absolute">
              {formik.errors.avatar}
            </div>
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="block space-y-1">
          <input
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="date"
            id={'birthDate'}
            name="birthDate"
            placeholder="Repeat Password..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthDate}
          />
          {formik.touched.birthDate && formik.errors.birthDate ? (
            <div className="invalid-feedback text-xs text-red-500 absolute">
              {formik.errors.birthDate}
            </div>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-2">
        <Button marginRight={16} appearance="primary" type="submit">
          Create
        </Button>
        <Button marginRight={16} appearance="primary" disabled>
          Clear
        </Button>
      </div>
    </form>
  );
}
