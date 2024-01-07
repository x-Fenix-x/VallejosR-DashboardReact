import { Link, useLocation } from 'react-router-dom';

export const SideBar = () => {
    const { pathname } = useLocation;

    return (
        <ul
            className='navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion'
            id='accordionSidebar'
        >
            <Link
                className='sidebar-brand d-flex align-items-center justify-content-center'
                to='/'
            >
                <div className='sidebar-brand-icon'>
                    <img className="w-100" src="/images/logo-DH.png" alt="Digital House"/>
                </div>
            </Link>

            <hr className='sidebar-divider my-0' />

            <li className='nav-item active'>
                <a className='nav-link' href='/'>
                    <i className='fas fa-fw fa-tachometer-alt'></i>
                    <span>Dashboard - DH movies</span>
                </a>
            </li>

            <hr className='sidebar-divider' />

            <div className='sidebar-heading'>Actions</div>

            <li className={`nav-item ${pathname === '/' && 'active'}`}>
                <Link className='nav-link collapsed' to='/'>
                    <i className='fas fa-fw fa-home'></i>
                    <span>INICIO</span>
                </Link>
            </li>

            <li className={`nav-item ${pathname === '/movies/' && 'active'}`}>
                <Link className='nav-link' to='/movies/'>
                    <i className='fas fa-fw fa-film'></i>
                    <span>PELÍCULAS</span>
                </Link>
            </li>

            <li className={`nav-item ${pathname === '/actors' && 'active'}`}>
                <Link className='nav-link' to='/'>
                    <i className='fas fa-fw fa-table'></i>
                    <span>ACTORES</span>
                </Link>
            </li>

            <hr className='sidebar-divider d-none d-md-block' />
        </ul>
    );
};
