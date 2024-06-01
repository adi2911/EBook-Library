import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar nabvar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'>Reading Enthusiast</span>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target = '#navbarNavDropdown'
        aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle Navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/home'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/search'>Search Books</NavLink>
            </li>
          </ul>
          <ul className='navbar-nav ms-auti'>
            <li className='nav-item m-1'>
              <NavLink className='btn btn-outline-light' type='button' to='#'>Sign In</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
