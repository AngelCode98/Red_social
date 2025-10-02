import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de login (puedes cambiarlo por API real)
    if (email && password) {
      localStorage.setItem("token", "fakeToken123"); // Guardamos token en localStorage
      navigate("/social"); // Redirige a la red social
    } else {
      alert("Por favor ingrese email y contraseña.");
    }
  };

  return (
    <div className="w3-container w3-card w3-padding w3-margin" style={{ maxWidth: "400px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Email</label>
          <input
            type="email"
            className="w3-input w3-border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Contraseña</label>
          <input
            type="password"
            className="w3-input w3-border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button type="submit" className="w3-button w3-blue w3-block">
          Ingresar
        </button>
      </form>
    </div>
  );
}
