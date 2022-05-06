import Header from '../components/header/index';
import Home from '../components/home/index';
import Layout from '../components/layout';


export default function Index({data}) {
  return (
    <Layout>
      <Home
        data={data}
      />
    </Layout>
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
