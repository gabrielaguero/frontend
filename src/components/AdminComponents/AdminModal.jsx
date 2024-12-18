import React, { useState } from 'react';
import axios from 'axios';

const AdminModal = ({ game, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: game.name,
    genre: game.genre,
    description: game.description,
    developer: game.developer,
    release_date: game.release_date,
    platform: game.platform,
    cover: game.cover,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3002/games/${game._id}`, formData);
      onSave();
      onClose();
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  const fieldLabels = {
    name: 'Nombre del videojuego',
    genre: 'Género',
    description: 'Descripción',
    developer: 'Desarrollador',
    release_date: 'Fecha de lanzamiento',
    platform: 'Plataforma',
    cover: 'URL de la portada',
  };

  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content bg-black text-white">
          <div className="modal-header">
            <h3 className="modal-title">Editar juego</h3>
            <button type="button" className="btn-close bg-danger" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {Object.keys(formData).map((key) => (
              <div className="mb-3" key={key}>
                <label className="form-label">{fieldLabels[key]}</label>
                {key === 'description' ? (
                  <textarea
                    name={key}
                    value={formData[key]}
                    className="form-control"
                    rows="4"
                    onChange={handleInputChange}
                  ></textarea>
                ) : (
                  <input
                    type={key === 'release_date' ? 'date' : 'text'}
                    name={key}
                    value={formData[key]}
                    className="form-control"
                    onChange={handleInputChange}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary d-block mx-auto" onClick={handleSave}>
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminModal;
