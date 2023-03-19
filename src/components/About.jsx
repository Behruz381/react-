import avatarFirst from "../images/avatar1.svg";
import avatarSecond from "../images/avatar2.svg";
import avatarThird from "../images/avatar3.svg";
import avatarFourth from "../images/avatar4.svg";
import statistics from "../images/statistics.svg"

const About = () => {
    return (
        <>
            <section className="about">
                <div className="container">
                    <div className="about__title">
                        <h1>
                            Kenapa Kita <span>Harus</span> Membaca Buku?
                        </h1>
                    </div>
                    <div className="about__cards">
                        <div className="about__card">
                            <div className="about__card--paragraph">
                                <p>
                                    “Aku rela dipenjara asalkan <strong>bersama buku</strong>,
                                    karena dengan buku <strong>aku bebas</strong> ”
                                </p>
                            </div>
                            <div className="about__card--img">
                                <img src={avatarFirst} alt="avatar" />
                                <div className="about__card--img-info">
                                    <p>Mohammad Hatta</p>
                                    <small>Wakil Presiden Indonesia Pertama</small>
                                </div>
                            </div>
                        </div>
                        <div className="about__card">
                            <div className="about__card--paragraph">
                                <p>
                                    “Cuma perlu <strong>satu buku</strong> untuk jatuh cinta pada
                                    membaca, Cari Buku itu! <strong> Mari jatuh cinta!</strong>{" "}
                                </p>
                            </div>
                            <div className="about__card--img">
                                <img src={avatarSecond} alt="avatar" />
                                <div className="about__card--img-info">
                                    <p>Najwa Shihab</p>
                                    <small>Duta Membaca</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__statistics">
                        <div className="about__statistics--item">
                            <img src={statistics} alt="" />
                            <div className="about__statistics--item-info">
                                <h1>500+</h1>
                                <p>Judul Buku</p>
                            </div>
                        </div>
                        <div className="about__statistics--item">
                            <img src={statistics} alt="" />
                            <div className="about__statistics--item-info">
                                <h1>$0</h1>
                                <p>Gratis Peminjaman</p>
                            </div>
                        </div>
                        <div className="about__statistics--item">
                            <img src={statistics} alt="" />
                            <div className="about__statistics--item-info">
                                <h1>5</h1>
                                <p>Kegiatan Rutin</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__items--title">
                        <div className="about__items--title-left">
                            <h1>Apa Kata Mereka?</h1>
                            <p>Mereka yang telah menjadi pengunjung tetap kami</p>
                        </div>
                        <div className="about__items--title-right">
                            <p>Selengkapnya</p>
                        </div>
                    </div>
                    <div className="about__items">
                        <div className="about__items--item">
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <div className="about__items--item-img">
                                <img src={avatarThird} alt="avatar" />
                                <div className="about__card--img-info">
                                    <p>Guy Hawkins</p>
                                    <small>32 Tahun, Karyawan</small>
                                </div>
                            </div>
                        </div>
              
                        <div className="about__items--item">
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <div className="about__items--item-img">
                                <img src={avatarFourth} alt="avatar" />
                                <div className="about__card--img-info">
                                    <p>Brooklyn Simmons</p>
                                    <small>20 Tahun, Mahasiswa</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
