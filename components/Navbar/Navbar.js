import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
// import Link from 'next/link';
import navStyles from './Nav.module.scss';
import { FaBars, FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import Logo from '../../public/static/logo';

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
            <div>
                <Link
                    className={navStyles.logo}
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    exact={true}
                    offset={-75}
                >
                    <img src="/logo.svg" alt="" /> <span>DATAMYNT</span>
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
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        exact={true}
                        offset={-75}
                    >
                        Team
                    </Link>
                </li>

                <li>
                    <Link
                        className={navStyles.linkWrapper}
                        activeClass={navStyles.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        exact={true}
                        offset={-75}
                    >
                        Contact
                    </Link>
                </li>

                <li>
                    <Link
                        className={navStyles.linkWrapper}
                        activeClass={navStyles.active}
                        to="services"
                        spy={true}
                        smooth={true}
                        duration={500}
                        exact={true}
                        offset={-75}
                    >
                        Careers
                    </Link>
                </li>

                <li>
                    <Link
                        className={navStyles.linkWrapper}
                        activeClass={navStyles.active}
                        to="thoughts"
                        spy={true}
                        smooth={true}
                        duration={500}
                        exact={true}
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