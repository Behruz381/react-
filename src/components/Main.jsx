import mainImg from "../images/mainImg.png"

const Main = () => {
    return (
        <>
            <main>
                <div className="container">
                    <div className="main__content">
                        <p>
                            <span>Pojok Baca </span>Probolinggo
                        </p>
                        <h1>
                            Pinjam Buku Secara <span>Gratis</span> untuk Masyarakat
                        </h1>
                        <div className="main__content--btn">
                            <button id="first-btn">Cari Judul Buku</button>
                            <button id="second-btn">Donasi dengan Kami</button>
                        </div>

                    </div>
                    <div className="main__img">
                        <img src={mainImg} alt="main-img" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
