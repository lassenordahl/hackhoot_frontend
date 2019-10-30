import React, { useState }  from "react";
import { Link } from "react-router-dom";
import './StartGame.scss';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Admin() {

  const [gameId, setGameId] = useState("4GYN");

  function handleSubmit(e) {
    alert(e.target.value)
  }

  return (
    <div className="Admin">
      <div className="admin-card">
        <div>
          <div className="game-title">
            <h1>HackHoot</h1>
            <p> Administrative Portal </p>
          </div>
          <div className="game-form">
            <p className="game-id">{gameId}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
