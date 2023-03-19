import cardImgFirst from "../images/card1.png";
import cardImgSecond from "../images/card2.png";
import cardImgThird from "../images/card3.png";


const Cards = ()=>{
    return(
        <>
        
          <section>
            <div className="container">
                <div className="cards__title">
                    <div className="cards__title--left">
                        <h1>Kegiatan Pojok Baca Probolinggo</h1>
                        <p>Intip kegiatan yang telah kami selenggarakan </p>
                    </div>
                    <div className="cards__title--right">
                        <p>Selengkapnya</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={cardImgFirst} alt="card-img" />
                    </div>
                    <div className="card">
                        <img src={cardImgSecond} alt="card-img" />
                    </div>
                    <div className="card">
                        <img src={cardImgThird} alt="card-img" />
                    </div>
                </div>
            </div>
          </section>

        </>
    )
}

export default Cards