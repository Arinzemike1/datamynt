import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import navStyles from './Nav.module.scss';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggleIsOpen }) => {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', changeBackground);
        }
    }, [])

    return (
        <nav className={nav ? `${navStyles.navContainer} ${navStyles.onScroll}` : navStyles.navContainer}>
            <div className='ms-lg-5 ms-0'>
                <Link
                    className={navStyles.logo}
                    to="#"
                    duration={500}
                    exact="true"
                    offset={-75}
                >
                    <img src="/logo.svg" alt="" /> <span className={navStyles.datamyntLogo}>DATAMYNT</span>
                </Link>
            </div>

            <div className={navStyles.mobileIcon} onClick={toggleIsOpen}>
                <FaBars />
            </div>
            <ul className={navStyles.linkWrapper}>
                <li>
                    <Link
                        className={navStyles.linkWrapper}
                        activeClass={navStyles.active}
                        to="#"
                        duration={500}
                        exact="true"
                        offset={-75}
                    >
                        Team
                    </Link>
                </li>

                <li>
                    <Link
                        className={navStyles.linkWrapper}
                        activeClass={navStyles.active}
                        to="#"
                        duration={500}
                        exact="true"
                        offset={-75}
                    >
                        Contact
                    </Link>
                </li>

                <li>
                    <Link
                        className={navStyles.linkWrapper}
                        activeClass={navStyles.active}
                        to="#"
                        duration={500}
                        exact="true"
                        offset={-75}
                    >
                        Careers
                    </Link>
                </li>

                <li>
                    <Link
                        className={navStyles.linkWrapper}
                        activeClass={navStyles.active}
                        to="#"
                        duration={500}
                        exact="true"
                        offset={-75}
                    >
                        Press
                    </Link>
                </li>
                <li>
                    <button className={navStyles.loginBtn}>Login</button>
                </li>
                <li>
                    <button className={navStyles.ctaBtn}>Book Demo Today</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar