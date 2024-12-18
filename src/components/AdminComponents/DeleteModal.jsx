import React from "react";
import axios from "axios";
import Cookies from "js-cookie";

const DeleteModal = ({ game, onClose, onDelete }) => {
  const handleDelete = async () => {
    try {
      const token = Cookies.get("jwToken");
      if (!token) {
        alert("Error: Token no encontrado. Por favor, inicia sesión nuevamente.");
        return;
      }

      if (!game || !game._id) {
        console.error("Error: ID del juego no válido.");
        return;
      }

      console.log("Eliminando juego con ID:", game._id); 
      await axios.delete(`http://localhost:3002/games/${game._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      onDelete();
      onClose(); 
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error al eliminar el videojuego.";
      alert(errorMessage); 
      console.error("Error al eliminar el videojuego:", errorMessage);
    }
  };

  return (
    <div className="modal show" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content bg-black text-white">
          <div className="modal-header">
            <h3 className="modal-title text-danger">Confirmar Eliminación</h3>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {game && game.name ? (
              <p>
                ¿Estás seguro de que deseas eliminar el videojuego "
                <strong>{game.name}</strong>"?
              </p>
            ) : (
              <p>Error: Información del juego no válida.</p>
            )}
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-danger d-block mx-auto"
              onClick={handleDelete}
              disabled={!game || !game._id} 
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
