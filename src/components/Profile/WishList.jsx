import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  useEffect(() => {
    try {
      const storedWishList = JSON.parse(localStorage.getItem("wishList")) || [];
      setWishList(storedWishList);
    } catch (err) {
      console.error("Error al cargar la lista de deseos desde localStorage:", err);
      setWishList([]);
    }
  }, []);

  const handleRemoveFromWishList = (gameId) => {
    const gameToRemove = wishList.find((game) => game._id === gameId);
    if (!gameToRemove) return;

    const updatedWishList = wishList.filter((game) => game._id !== gameId);
    localStorage.setItem("wishList", JSON.stringify(updatedWishList));
    setWishList(updatedWishList);

    // Mostrar alerta
    setAlertMessage(`${gameToRemove.name} ha sido eliminado!`);
    setAlertType("success");
    setShowAlert(true);

    // Ocultar alerta automáticamente después de 3 segundos
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4 fs-3 fw-bold text-danger">Mi lista de Deseos</h3>

      {/* Mostrar alertas */}
      {showAlert && (
        <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
          {alertMessage}
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      )}

      {/* Mostrar lista de deseos */}
      {wishList.length === 0 ? (
        <div className="text-center text-danger">No hay juegos en tu lista de deseos.</div>
      ) : (
        <ul className="list-unstyled">
          <AnimatePresence>
            {wishList.map((game) => (
              <motion.li
                key={game._id}
                className="d-flex justify-content-between align-items-center bg-dark text-white p-3 mb-2 rounded"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={game.cover || "https://via.placeholder.com/50x70"}
                    alt={game.name || "Juego sin nombre"}
                    style={{
                      width: "50px",
                      height: "70px",
                      objectFit: "cover",
                      marginRight: "10px",
                    }}
                  />
                  <span className="fw-bold">{game.name || "Sin nombre"}</span>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemoveFromWishList(game._id)}
                  style={{ borderRadius: "50%", width: "30px", height: "30px" }}
                >
                  X
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
};

export default WishList;
