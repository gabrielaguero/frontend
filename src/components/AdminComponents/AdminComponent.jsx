import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminModal from './AdminModal';
import DeleteModal from './DeleteModal';
import AddGameModal from './AddGameModal';

const AdminComponent = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const fetchGames = async () => {
    try {
      const response = await axios.get('http://localhost:3002/games');
      setGames(response.data);
    } catch (err) {
      setError('Error al cargar los videojuegos.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (game) => {
    setSelectedGame(game);
    setShowEditModal(true);
  };

  const handleDeleteClick = (game) => {
    setSelectedGame(game);
    setShowDeleteModal(true);
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  if (loading) return <div className="text-center mt-4">Cargando videojuegos...</div>;
  if (error) return <div className="text-danger text-center mt-4">{error}</div>;

  return (
    <section className='mb-3'>
      <h2 className="text-center mb-4 fs-2 fw-bold text-danger">Administración de videojuegos</h2>
      <button className="fw-bold btn btn-success w-75 mb-3 d-block mx-auto" onClick={handleAddClick}>
        Agregar nuevo juego
      </button>
      <table className="table table-striped my-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Género</th>
            <th scope="col">Descripción</th>
            <th scope="col">Desarrollador</th>
            <th scope="col">Lanzamiento</th>
            <th scope="col">Plataforma</th>
            <th scope="col">Portada</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game._id}>
              <td>{game._id}</td>
              <td>{game.name}</td>
              <td>{game.genre}</td>
              <td>{game.description}</td>
              <td>{game.developer}</td>
              <td>{game.release_date}</td>
              <td>{game.platform}</td>
              <td>
                <img src={game.cover} alt={`${game.name} cover`} style={{ width: '50px', height: 'auto' }} />
              </td>
              <td>
                <button className="btn btn-primary btn-sm me-2 mb-2" onClick={() => handleEditClick(game)}>
                  Editar
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(game)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showEditModal && (
        <AdminModal
          game={selectedGame}
          onClose={() => setShowEditModal(false)}
          onSave={fetchGames}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          game={selectedGame}
          onClose={() => setShowDeleteModal(false)}
          onDelete={fetchGames}
        />
      )}
      {showAddModal && (
        <AddGameModal onClose={() => setShowAddModal(false)} onAdd={fetchGames} />
      )}
    </section>
  );
};

export default AdminComponent;
