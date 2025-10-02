import { useState } from "react";

export default function Register() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registro: ${user} - ${email}`);
  };

  return (
    <div className="w3-container w3-card w3-padding w3-margin" style={{ maxWidth: "400px" }}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Usuario</label>
          <input
            type="text"
            className="w3-input w3-border"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </p>
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
        <button type="submit" className="w3-button w3-green w3-block">
          Registrarse
        </button>
      </form>
    </div>
  );
}
