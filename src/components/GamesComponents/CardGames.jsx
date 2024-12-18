import React, { useState, useEffect } from "react";
import axios from "axios";
import GameModal from "./GameModal";
import { motion } from "framer-motion";

const CardGames = ({ games, isSearching }) => {
  const [allGames, setAllGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const sortGamesByName = (games) => {
    return games.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  };

  const fetchGames = async () => {
    try {
      const response = await axios.get("http://localhost:3002/games");
      const sortedGames = sortGamesByName(response.data);
      setAllGames(sortedGames);
    } catch (err) {
      setError("Error al cargar los videojuegos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isSearching) {
      fetchGames();
    }
  }, [isSearching]);

  const handleShowModal = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedGame(null);
    setIsModalOpen(false);
  };

  const addToWishList = (game) => {
    let wishList = JSON.parse(localStorage.getItem("wishList")) || [];
    if (!wishList.some((item) => item._id === game._id)) {
      wishList.push(game);
      localStorage.setItem("wishList", JSON.stringify(wishList));

      setAlertMessage(`${game.name} ha sido añadido a tu lista de deseos!`);
      setAlertType("success");
      setShowAlert(true);
    } else {
      setAlertMessage(`${game.name} ya está en tu lista de deseos.`);
      setAlertType("danger");
      setShowAlert(true);
    }
    setTimeout(() => setShowAlert(false), 3000);
  };

  if (loading) return <div className="text-center mt-4">Cargando videojuegos...</div>;
  if (error) return <div className="text-danger text-center mt-4">{error}</div>;

  const gameSearch = isSearching ? sortGamesByName([...games]) : allGames;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fs-2 fw-bold text-danger">Lista de Videojuegos</h2>

      
      {showAlert && (
        <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
          {alertMessage}
          <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowAlert(false)}></button>
        </div>
      )}

      <div className="row g-4 rounded p-4 mt-5 shadow">
        {gameSearch.map((game) => (
          <div className="col-md-4 text-white" key={game._id}>
            <motion.div
              className="card h-100 bg-dark text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={game.cover}
                className="img-fluid rounded shadow"
                alt={game.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <span className="card-text fw-bold text-danger">{game.genre}</span>
                <h3 className="card-title">{game.name}</h3>
                <p className="card-text text-truncate">{game.description}</p>
                <div className="d-flex flex-row justify-content-between mt-5">
                  <button
                    className="btn btn-outline-danger w-50 me-2"
                    onClick={() => handleShowModal(game)}
                  >
                    Ver más
                  </button>
                  <button
                    className="btn btn-danger w-50"
                    onClick={() => addToWishList(game)}
                  >
                    +
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedGame && (
        <GameModal game={selectedGame} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CardGames;
