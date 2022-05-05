import Link from "next/link"

{/* <Link href="/"><a className="navbar-brand">Home</a></Link>
                        <Link href="/login">
                        <a className="nav-link">Accede a tu cuenta</a>
                        </Link>
                        <Link href="/register/estudiante">
                        <a className="nav-link">Registrate como estudiante</a>
                        </Link>
                        <Link href="/register/profesor">
                        <a className="nav-link">Registrate como profesor</a>
                        </Link> */}
function Header() {
    return  <header className="header">
        <div className="header--title">
            <Link href="/"><h1>Exams App</h1></Link>
        </div>
    
        <nav className="menu">
            <ul>
                <Link href=""><li><a href="">Blog</a></li></Link>
                <Link href=""><li><a href="">Contacto</a></li></Link>
                <Link href="/login"><li><a href="" className="menu--iniciar">Iniciar Sesión</a></li></Link>
                <li><a className="menu--iniciar" target="_blank" href="https://www.youtube.com/watch?v=xvFZjo5PgG0">c:</a></li>
            </ul>
        </nav>
    </header>
}

export default Header;