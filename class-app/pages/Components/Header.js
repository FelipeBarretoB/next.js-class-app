import Link from "next/link"

function Header() {
    return  <header className="header">
        <div className="header--title">
            <Link href="/"><h1>Exams App</h1></Link>
        </div>
    
        <nav className="menu">
            <ul>
                <Link href="/login"><li><a href="" className="menu--iniciar">Iniciar Sesión</a></li></Link>
                <li><a className="menu--iniciar" target="_blank" href="https://www.youtube.com/watch?v=xvFZjo5PgG0">c:</a></li>
            </ul>
        </nav>
    </header>
}

export default Header;