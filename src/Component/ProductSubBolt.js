import React from "react";
import { useNavigate } from "react-router-dom";

function ProductSubBolt() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h2>BOLT & NUT CATEGORIES</h2>
      </div>
      <div>
        <button onClick={() => navigate("/")}>Screw</button>
        <button onClick={() => navigate("/")}>Angkur Bolt</button>
        <button onClick={() => navigate("/")}>Baut</button>
        <button onClick={() => navigate("/")}>Anchor Bolt</button>
        <button onClick={() => navigate("/")}>Stud Bolt</button>
        <button onClick={() => navigate("/")}>U - Bolt</button>
        <button onClick={() => navigate("/")}>Dynabolt</button>
        <button onClick={() => navigate("/")}>Nut</button>
        <button onClick={() => navigate("/")}>Hex Bolt</button>
      </div>
    </div>
  );
}

export default ProductSubBolt;
