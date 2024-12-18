import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch, onReset }) => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`http://localhost:3002/games/nombre?name=${search}`);
      onSearch(res.data); // Envía los resultados al componente padre
    } catch (error) {
      setError('No se encontraron juegos con ese nombre.');
      onSearch([]); // Envia una lista vacía si no hay resultados
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      fetchSearch();
    } else {
      onReset(); 
    }
  };

  const handleBack  = (e) => {
    e.preventDefault();
    setSearch(''); 
    setError(''); 
    onReset(); 
  }

  return (
    <div className='my-5'>
      <form onSubmit={handleSearch} className='d-flex justify-content-center'>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar juego"
          className='rounded border-danger bg-dark me-3 w-50 text-white'
        />
        <button type="submit" className="btn btn-danger d-block">Buscar</button>
      </form>

      {loading && <p>Cargando...</p>}
      {error && <div className='d-flex justify-content-center aling-items-center m-5'><span className='text-white bg-danger p-2 rounded '>{error}</span><button type='submit' className='btn btn-danger text-white ms-2 rounded' onClick={handleBack}>X</button></div>}
    </div>
  );
};

export default SearchBar;
