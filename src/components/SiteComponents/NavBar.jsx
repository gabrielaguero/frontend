import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext); 

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `nav-link text-danger fw-bold ${isActive ? "active" : ""}`
                            }
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/games"
                            className={({ isActive }) =>
                                `nav-link text-danger fw-bold ${isActive ? "active" : ""}`
                            }
                        >
                            JUEGOS
                        </NavLink>
                    </li>
                    {!user ? (
                        <>
                            <li className="nav-item">
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) =>
                                        `nav-link text-danger fw-bold ${isActive ? "active" : ""}`
                                    }
                                >
                                    REGISTRARSE
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        `nav-link text-danger fw-bold ${isActive ? "active" : ""}`
                                    }
                                >
                                    INICIAR SESIÓN
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <NavLink
                                    to="/profile"
                                    className={({ isActive }) =>
                                        `nav-link text-danger fw-bold ${isActive ? "active" : ""}`
                                    }
                                >
                                    PERFIL
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link btn text-danger fw-bold"
                                    onClick={logoutUser}
                                >
                                    SALIR
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export { Navbar };
