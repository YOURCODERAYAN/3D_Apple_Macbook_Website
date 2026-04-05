import navLinks from '../constants/index';

function Navbar(){


        return(

                <header>
                        <nav>
                            <div className='header-left'>
                                <img src="/logo.svg" alt="apple-logo" />
                            </div>
                        
                        <div className='header-middle'>
                        <ul>
                            {
                                navLinks.map(({label})=> (

                                    <li key={label}>
                                        <a >{label}</a>
                                    </li>
                                ))
                            }

                        </ul>
                        </div>

                <div className='header-right'>

                    <button>
                            <img src="/search.svg" alt="search" />
                    </button>


                    <button>
                            <img src="/cart.svg" alt="Cart" />
                    </button>

                </div>



                </nav>


                </header>
        )
}

export default Navbar;