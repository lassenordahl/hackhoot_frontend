import React from "react";
import './Home.scss';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Home(props) {

  function handleSubmit(e) {
    e.preventDefault();
    let gameKey = e.target.elements.gameKey.value;

    // handle logic for checking if the game id is valid here
    props.history.push('/lobby/' + gameKey);
  }

  return (
    <div className='Home'>
      <div>
        <h1>HackHoot</h1>
        <h3>A HackUCI Workshop Production</h3>
        <Form className="join-game-form" onSubmit={handleSubmit}>
          <Form.Group controlId="gameKey">
            <Form.Control placeholder="Enter Game Key" type="number"></Form.Control>
            <Form.Text>
              Make sure to enter the right game key!
            </Form.Text>
          </Form.Group>
          <Button variant="light" type="submit">Join Game</Button>
        </Form>
      </div>
    </div>
  );
}

export default Home;
