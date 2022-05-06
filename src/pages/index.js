import Head from 'next/head';
import Header from '../components/header/index';
import Home from '../components/home/index';


export default function Index({data}) {
  return (
    <>
      <Head>
        <title>Countries App</title>
      </Head>
      <Header /> 
      <Home
        data={data}
      />
    </>
  )
}

export async function getStaticProps(){
  try{
    const res = await fetch('https://restcountries.com/v3.1/all/');
    const data = await res.json();
    return {
      props: {
        data
      }
    }
  } catch(error) {
      console.log(error);
  }
}
