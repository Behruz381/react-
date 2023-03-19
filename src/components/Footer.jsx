import logo from "../images/LOGO.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer__items">
            <div className="footer__title">
              <div className="footer__title--logo">
                <img src={logo} alt="logo" />
                <h1>Pojok Baca Probolinggo</h1>
              </div>
              <div className="footer__title--socials">
                <i class="bx bxl-instagram"></i>
                <i class="bx bxl-facebook-circle"></i>
                <i class="bx bxl-youtube"></i>
              </div>
            </div>
            <div className="footer__items--left">
              <div className="footer__items--left-item">
                <p>Kontak</p>
                <a href="#">Email</a>
                <a href="#">Alamat</a>
                <a href="#">No. Rekening</a>
              </div>
              <div className="footer__items--left-item">
                <p>Tentang Kami</p>
                <a href="#">Umum</a>
              </div>
              <div className="footer__items--left-item">
                <p>Galery</p>
                <a href="#">Kegiatan 2018</a>
                <a href="#">Kegiatan 2019</a>
                <a href="#">Kegiatan 2020</a>
                <a href="#">Kegiatan 2021</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <h2>Pojok Baca Probolinggo {new Date().getFullYear()}</h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
