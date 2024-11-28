import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import logoHeader from "../../../public/assets/logo.svg";
import logoFooter from "../../../public/assets/logoBW.svg";


const Layout = () => {
    return <>
        <header>
            <div className="container">
                <div className="header-container">
                    <section className="logo"> 
                        <Link to="/kasa">
                            <img src={logoHeader} alt="logo kasa" />
                        </Link>                        
                    </section>
                    <nav className="nav">
                        <ul>
                            <li>
                                <NavLink to="/kasa">
                                    Accueil
                                </NavLink>
                            </li>                        
                            <li><NavLink to="/about">
                                    A propos
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>                
            </div>
        </header>

        <main>
            <div className="container">
                <Outlet />
            </div>
        </main>        

        <footer>
            <div className="container">
                <section>
                    <img src={logoFooter} alt="logo noir et blanc kasa" />
                </section>
                <section>
                    <p>© 2020 Kasa. All rights reserved</p>
                </section>
            </div>            
        </footer>
    </>
}

export default Layout;