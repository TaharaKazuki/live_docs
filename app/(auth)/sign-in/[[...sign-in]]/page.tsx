import { SignIn } from '@clerk/nextjs';

const page = () => {
  return (
    <main className="auth-page">
      <SignIn />
    </main>
  );
};

export default page;
