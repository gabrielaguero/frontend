import React from "react";

const GameModal = ({ game, onClose }) => {
  return (
    <div 
      className="modal show d-block" 
      tabIndex="-1" 
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content bg-black text-white">
          <div className="modal-header d-flex justify-content-between align-items-center">
            <h3 className="modal-title fw-bold text-danger">{game.name}</h3>
            <button type="button" className="btn-close bg-danger" onClick={onClose}></button>
          </div>
          <div className="modal-body text-center">
            <img 
              src={game.cover} 
              alt={game.name} 
              className="img-fluid rounded mb-3" 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p><strong className="fw-bold text-danger">Género:</strong> {game.genre}</p>
            <p><strong className="fw-bold text-danger">Plataforma:</strong> {game.platform}</p>
            <p><strong className="fw-bold text-danger">Descripción:</strong> {game.description}</p>
          </div>
          <div className="modal-footer d-flex justify-content-around w-100">
            <p><strong className="fw-bold text-danger">Desarrollador:</strong> {game.developer}</p>
            <p><strong className="fw-bold text-danger">Lanzamiento:</strong> {game.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
