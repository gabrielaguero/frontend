import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(Cookies.get("jwToken") || null); // Mantener el token en el estado

  useEffect(() => {
    if (auth) {
      const decoded = jwtDecode(auth);
      setUser({
        name: decoded.usuario.name,
        email: decoded.usuario.email,
        id: decoded.usuario._id,
      });
    } else {
      setUser(null);
    }
  }, [auth]); // Usar `auth` como dependencia para actualizar el estado cuando cambie

  const logoutUser = () => {
    setUser(null);
    Cookies.remove("jwToken");
    setAuth(null); // Eliminar el token del estado también
  };

  const loginUser = (token) => {
    Cookies.set("jwToken", token, { expires: 3 });
    setAuth(token); // Guardar el token en el estado
  };

  return (
    <AuthContext.Provider value={{ user, setUser, auth, logoutUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
