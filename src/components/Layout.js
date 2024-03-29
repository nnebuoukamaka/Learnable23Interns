import React from 'react';
import { useLocation, Link } from 'react-router-dom';
// import Search from './search';

function Layout() {

    const location = useLocation();
    const path = location.pathname;
  return (
    <div>
        <header className='vw-100 pt-0 mt-0'>
        <nav className='navbar navbar-expand-lg row px-3'>
            <div>
                <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupport" aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
                  <span className='navbar-toggler-icon'>
                    </span>  
                </button>
                <div className='collapse navbar-collapse' id='navbarSupport'>
                <div className='navbar-nav'>
                <Link className='nav-link text-primary'  to='/'>Home</Link>
                </div>
                <div className='col-11 '>
                {path !== "/" && (
                <ul className='navbar-nav d-flex justify-content-end align-items-center'>
                 <li className='nav-item '>
             <Link className='nav-link text-primary'
                to='/frontend'
                >
            Frontend
            </Link>
            </li>
            <li className='nav-item '>
                <Link className='nav-link text-primary' to='/backend'>
                    Back-End
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link text-primary' to='/pdesign'>
                    Product Design
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link text-primary' to='/web3'>
                    Web3
                </Link>
            </li>

        </ul>
        )
        }
        </div>
         </div>
        </div>
        </nav>
        </header>
    </div>
  )
}

export default Layout