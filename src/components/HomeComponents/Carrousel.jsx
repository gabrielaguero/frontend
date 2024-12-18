import React from 'react';
import banner1 from '../../assets/img/carrousel/banner-3.webp';
import banner2 from '../../assets/img/carrousel/banner-1.webp';
import banner3 from '../../assets/img/carrousel/banner-2.webp';

const Carrousel = () => {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide my-5 shadow">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block img-fluid mx-auto rounded" alt="Banner principal informativo"/>
                    <div className="carousel-caption d-none d-md-block">
                        <span className='fs-2 fw-bold sombra'>Crea tu propia lista de juegos</span>
                        <p>Crea tu cuenta y guarda tus videojuegos favoritos en una lista personalizada</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block img-fluid mx-auto rounded" alt="Banner juegos free to play"/>
                    <div className="carousel-caption d-none d-md-block">
                        <span className='fs-2 fw-bold sombra'>Los mejores juegos Free to play</span>
                        <p>Encontraras los mejores juegos Free to play</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="d-block img-fluid mx-auto rounded" alt="Banner juegos xbox game pass"/>
                    <div className="carousel-caption d-none d-md-block">
                        <span className='fs-2 fw-bold sombra'>Distintas plataformas</span>
                        <p>Podrás ver un amplia variedad de juegos de todas las plataformas</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Carrousel;
