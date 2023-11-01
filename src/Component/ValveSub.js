import React from "react";
import { useNavigate } from "react-router-dom";

function ValveSub() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h2>VALVE CATEGORIES</h2>
      </div>
      <div>
        <button onClick={() => navigate("/")}>Valve Butterfly</button>
        <button onClick={() => navigate("/")}>Ball Valve</button>
        <button onClick={() => navigate("/")}>Valve Bleed</button>
        <button onClick={() => navigate("/")}>Valve Duo Check</button>
        <button onClick={() => navigate("/")}>Actuator Valve</button>
        <button onClick={() => navigate("/")}>Steam Trap</button>
        <button onClick={() => navigate("/")}>Valve Check</button>
        <button onClick={() => navigate("/")}>Valve Control</button>
      </div>
    </div>
  );
}

export default ValveSub;
