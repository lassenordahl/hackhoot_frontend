import React, { useState } from "react";
import './Lobby.scss';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Lobby(props) {

  const [showForm, setShowForm] = useState(true);
  const [name, setName] = useState("");

  const lobbyId = props.match.params.lobbyId;

  function handleSubmit(e) {
    e.preventDefault();
    let name = e.target.elements.name.value;
    
    setName(name);    
    setShowForm(false);

    changePage(5000);
  }

  function changePage(timeInMS) {
    setTimeout(function() {
      props.history.push('/gameplay/' + lobbyId);
    }, timeInMS);
  }

  return (
    <div className="Lobby">
      <div className="info">
        <h1>Lobby ID: </h1>
        <p>{ lobbyId }</p>
      </div>
      <div className="lobby-content">
        { showForm ?
          <div>
            <Form className="join-game-form flex-center" onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Control placeholder="Enter your name"></Form.Control>
                <Form.Text>
                  PG-13 Hard Limit
                </Form.Text>
              </Form.Group>
              <Button variant="light" type="submit">Join Game</Button>
            </Form>
          </div>
        : 
          <div className="registered">
            <h1>
              You are now registered as:
            </h1>
            <h3>
              { name } 
            </h3>
          </div>
        }
        
      </div>
    </div>
  );
}

export default Lobby;
