import Header from '../../components/header/index';
import Head from 'next/head';


const Layout = ({children}) => {
  return (
    <>
        <Head>
            <title>Country App</title>
        </Head>
        <Header /> 
        {children}
    </>
  )
}

export default Layout
