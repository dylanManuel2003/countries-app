import Layout from '../../components/layout';
import Styles from '../../styles/Country.module.css';

export default function Country({data}) {
    return (
        <Layout>
            <section className={Styles.country}>
            {
                data.map((x) => {
                    return (
                        <div className={Styles.section_country} key={x.cca2}> 
                            <img src={x.flags.png} alt={`flag country ${x.name.common}`} />
                            <div className={Styles.section_country_text}>
                                <h3>{x.name.common}</h3>
                                <ul>
                                    <li>
                                        <b>Native name:</b> {x.name.official}
                                    </li>
                                    <li>
                                        <b>Population:</b> {x.population}
                                    </li>
                                    <li>
                                        <b>Region:</b> {x.region}
                                    </li>
                                    <li>
                                        <b>Subregion:</b> {x.subregion}
                                    </li>
                                    <li>
                                        <b>Capital:</b> {x.capital}
                                    </li>
                                    {/* <li>
                                        <b>Languages:</b> {x.languages}
                                    </li> */}
                                </ul>
                                {/* <div>
                                    <h5>Borders: </h5>
                                    {
                                        x.borders === [] 
                                        ? (
                                            x.borders.map((x) => <span className={Styles.borderCountries} key={x}>{x}</span>) 
                                          ) 
                                        : ''
                                    }
                                </div> */}
                            </div>
                        </div>
                    )
                })
            }
            </section>
        </Layout>
    )
}

export async function getStaticPaths(){
    try{
      const res = await fetch('https://restcountries.com/v3.1/all/')
      const data = await res.json()
      const paths = data.map((code) => ({params: {code: `${code.cca2}`}}))
      return {
          paths,
          fallback: false
      }
    } catch(error) {
      console.log(error);
    }
}

export async function getStaticProps({params}){
    try{
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.code}/`)
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    } catch(error) {
        console.log(error);
    }
}

