import React, { useState } from 'react';
import CardGames from '../../components/GamesComponents/CardGames';
import SearchBar from '../../components/SearchBar/SearchBar';

const Games = () => {
  const [filteredGames, setFilteredGames] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (games) => {
    setFilteredGames(games);
    setIsSearching(true);
  };

  const resetSearch = () => {
    setFilteredGames([]);
    setIsSearching(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} onReset={resetSearch} />
      <CardGames games={filteredGames} isSearching={isSearching} />
    </div>
  );
};

export { Games };
