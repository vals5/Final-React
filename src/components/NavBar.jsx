import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <Link className='logo' to="/"><h1>VINYL STORE</h1></Link>
        <ul className='menu' >
            <li><Link className='menu-link' to="/">INICIO</Link></li>
            <li><Link className='menu-link' to="/productos">PRODUCTOS</Link></li>
            <li><Link className='menu-link' to="/productos/bandas">BANDAS</Link></li>
            <li><Link className='menu-link' to="/productos/solistas">SOLISTAS</Link></li>
            <li><Link className='menu-link' to="/nosotros">NOSOTROS</Link></li>
            <li><Link className='menu-link' to="/contacto">CONTACTO</Link></li>
            <li><Link className='menu-link' to="/carrito">CARRITO</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
