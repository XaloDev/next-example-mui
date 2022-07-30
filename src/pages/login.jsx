import { AuthScreenComponent } from "../components/AuthScreen";
import nookies from 'nookies'
import Head from "next/head";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>NE - Login</title>
      </Head>
      <AuthScreenComponent isLoginScreen/>
    </>
  );
}


export const getServerSideProps = async (ctx) => {
  const { ['next-example.token']: token} = nookies.get(ctx)

  if (token) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
