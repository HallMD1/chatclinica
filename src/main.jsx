import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { verificarUsuario } from "./login";

const App = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [mensaje, setMensaje] = useState("");

  const ingresar = async () => {
    const resultado = await verificarUsuario(usuario, clave);
    if (resultado.ok) {
      setMensaje("Ingreso exitoso: " + resultado.nombre);
    } else {
      setMensaje(resultado.mensaje);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "15%" }}>
      <h1>Ingreso a Clínica Hall</h1>
      <input placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <input type="password" placeholder="Clave" value={clave} onChange={e => setClave(e.target.value)} />
      <button onClick={ingresar}>Entrar</button>
      <p>{mensaje}</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);