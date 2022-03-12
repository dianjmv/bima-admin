import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'email', placeholder: '' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        console.log(credentials);
        console.log(req);
        const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' };
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
        }
      }
    })
  ]
});
