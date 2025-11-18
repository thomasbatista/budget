import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import Container from './Container'
import logo from '../../img/budget_logo.png'

function NavBar() {
    return (
    <nav className={styles.navbar}>
        <Container>
          <Link to="/"><img src={logo} alt='Budget' /></Link>
          <ul className={styles.list}>
            <li className={styles.item}><Link to="/">Home</Link></li>
            <li className={styles.item}><Link to="/projects">Projetos</Link></li>
            <li className={styles.item}><Link to="/contact">Contato</Link></li>
            <li className={styles.item}><Link to="/company">Empresa</Link></li>
          </ul>
        </Container>
    </nav>
    )
}

export default NavBar