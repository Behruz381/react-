import whatsapp from "../images/whatsapp.svg";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="contact__title">
            <h1>
              Ingin <span>Membantu</span> Meningkatkan Literasi Anak-Anak
              Sekitar Kita?
            </h1>
            <p>Percayakan melalui kegiatan kita</p>
          </div>
          <div className="contact__btn">
            <button>Donasi dengan Kami</button>
            <p>Atau</p>
            <div className="contact__btn--call">
              <a href="#">Hubungi Kami</a>
              <img src={whatsapp} alt="whatsapp" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
