import { TextInput } from 'evergreen-ui';

export default function UserCreation() {
  return (
    <form className="grid sm:grid-cols-2 grid-cols-1 py-4">
      <div className="grid grid-cols-1">
        <label htmlFor="first_name">First Name</label>
        <TextInput name="text-input-name" placeholder="First Name..." />
      </div>
      <div className="grid grid-cols-1">
        <label htmlFor="last_name">Last Name</label>
        <TextInput name="text-input-name" placeholder="Last Name..." />
      </div>
      <div className="grid grid-cols-1">
        <label htmlFor="email">Email</label>
        <TextInput
          name="text-input-name"
          type="email"
          placeholder="Email...."
        />
      </div>
      <div className="grid grid-cols-1">
        <label htmlFor="username">UserName</label>
        <TextInput name="text-input-name" placeholder="Username..." />
      </div>
      <div className="grid grid-cols-1">
        <label htmlFor="username">Password</label>
        <TextInput name="text-input-name" placeholder="Username..." />
      </div>
      <div className="grid grid-cols-1">
        <label htmlFor="username">Repeat Password</label>
        <TextInput name="text-input-name" placeholder="Username..." />
      </div>
    </form>
  );
}
