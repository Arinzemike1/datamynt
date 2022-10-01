import { Link } from 'react-scroll';
import style from './Sidebar.module.scss';
import { FaTimes } from 'react-icons/fa';

const SideBar = ({ isOpen, toggleIsOpen }) => {
    return (
        <div className={isOpen ? style.isOpen : style.isClose} onClick={toggleIsOpen}>
            <div className={style.closeIcon}>
                <FaTimes onClick={toggleIsOpen} />
            </div>
            <div className={style.sidebarWrapper}>
                <ul>
                    <li>
                        <Link
                            className={style.linkWrapper} 
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            exact={true}
                            offset={-80}
                            onClick={toggleIsOpen}
                            >
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={style.linkWrapper} 
                            to="#"
                            smooth={true}
                            duration={500}
                            exact={true}
                            offset={-80}
                            onClick={toggleIsOpen}
                            >
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={style.linkWrapper} 
                            to="#"
                            smooth={true}
                            duration={500}
                            exact={true}
                            offset={-80}
                            onClick={toggleIsOpen}
                            >
                            Careers
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={style.loginBtn} 
                            to="#"
                            smooth={true}
                            duration={500}
                            exact={true}
                            offset={-80}
                            onClick={toggleIsOpen}
                            >
                            Login
                        </Link>
                    </li>

                    <li>
                        <Link
                            className={style.ctaBtn} 
                            to="#"
                            smooth={true}
                            duration={500}
                            exact={true}
                            offset={-80}
                            onClick={toggleIsOpen}
                            >
                            Book Demo Today
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;
