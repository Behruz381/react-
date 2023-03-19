import logo from "../images/LOGO.svg"


const Header = ()=>{
    return(
        <>
          <header>
            <div className="container">
                <nav className="nav">
                    <div className="nav__logo">
                        <img src={logo} alt="LOGO" />
                    </div>
                    <div className="nav__right">
                        <ul className="nav__ul">
                            <li><a href="#">Beranda</a></li>
                            <li><a href="#">Koleksi</a></li>
                            <li><a href="#">Syarat dan Ketentuan</a></li>
                            <li><a href="#">Kontak</a></li>
                        </ul>
                        <div className="nav__btn">
                            <button>Masuk</button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header