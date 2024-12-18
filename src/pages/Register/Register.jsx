import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/users/register", userData);
      setSuccess(true);
      setError("");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || "Ocurrió un error en el registro.");
      setSuccess(false);
    }
  };

  return (
    <div>
      <h2 className="text-danger fs-2 fw-bold my-5 text-center">Registrarse</h2>
      <form className="bg-dark mb-3 rounded shadow w-25 text-white mx-auto p-5">
        {success && (
          <div className="alert alert-success text-center" role="alert">
            ¡Registro exitoso! Redirigiendo a la página de inicio de sesión...
          </div>
        )}
        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </div>
        <button
          type="submit"
          onClick={handleRegister}
          className="btn btn-danger d-block mx-auto w-50 mt-4 shadow"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export { Register };
