import Styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';


const Home = ({data}) => {
    if (data !== undefined) {
        var isData = true
    } else {
        var isData = false
    }

    if (isData) {
        var info = Array.from(data)
    }
    
    const router = useRouter();

    //Buscador
    let [searchValue, setSearchValue] = useState('');
    
    const onSearchChange = (e)=>{
        setSearchValue(e.target.value)
    }

    let searchedCountry = [];
    
    if(!searchValue.length >= 1){
        searchedCountry = info;
    }else{
        searchedCountry = info.filter(x => {
            const countryText = x.name.common.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return countryText.includes(searchText);
        }
      )
    }

    return (
        <div className={Styles.section_home}>
            <input 
                type='text' 
                placeholder='Search for a country...' 
                value={searchValue}
                onChange={onSearchChange}
            />
            <section className={Styles.section_countries}>
                {
                    isData 
                    ? searchedCountry.map((x) => {
                        const linkURLid = x.cca2;
                        return (
                            <button onClick={() => router.push({
                                pathname: '/country/[code]',
                                query: { code: linkURLid },
                            })} className={Styles.card}>
                                <div>    
                                    <img src={x.flags.png} alt={`flag country ${x.name.common}`} />
                                    <div className={Styles.card_text}>
                                        <h3>{x.name.common}</h3>
                                        <ul>
                                            <li>
                                                <b>Population:</b> {x.population}
                                            </li>
                                            <li>
                                                <b>Region:</b> {x.subregion}
                                            </li>
                                            <li>
                                                <b>Capital:</b> {x.capital}
                                            </li>
                                            <li>
                                                <b>Capital:</b> {x.cca2}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </button>
                        )
                    })
                    : ''
                }
            </section>
        </div>
    )
}

export default Home
