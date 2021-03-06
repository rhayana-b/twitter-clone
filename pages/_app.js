import Head from 'next/head'
import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp() {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <Layout />
      <GlobalStyles />
    </>
  )
}

export default MyApp
