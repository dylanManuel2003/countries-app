import Styles from '../../styles/Header.module.css';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <header className={Styles.navbar}>
        <h1 className={Styles.navbar_title}>Where in the world?</h1>
        <button onClick={() => router.push('/')} className={Styles.navbar_btn}>Back</button>
    </header>
  )
}

export default Header
