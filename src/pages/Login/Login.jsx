import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const { setUser, loginUser } = useContext(AuthContext); // Usamos loginUser del contexto

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/users/login", userData);

      console.log(res);

      const user = {
        name: res.data.usuario.name,
        id: res.data.usuario._id,
        email: res.data.usuario.email,
      };

      setUser(user);
      loginUser(res.data.jwToken); // Actualizamos el token en el contexto

      if (user.email === "admin@admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.response?.data?.message || "Error al iniciar sesión.";
      setError(errorMessage);

      if (error.response?.status === 401) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      }
    }
  };

  return (
    <div>
      <h2 className="text-danger fs-2 fw-bold my-5 text-center">Iniciar sesión</h2>
      <form className="bg-dark mb-3 rounded shadow w-25 text-white mx-auto p-5">
        {showAlert && (
          <div className="alert alert-danger" role="alert">
            ¡Usuario y contraseña no coinciden!
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </div>
        <button
          type="submit"
          onClick={handleLogin}
          className="btn btn-danger d-block mx-auto w-50 mt-4 shadow"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export { Login };
