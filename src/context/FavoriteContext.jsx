import React, { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();
export const useFavorite = () => useContext(FavoriteContext);

const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const value = { favorite, setFavorite };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
