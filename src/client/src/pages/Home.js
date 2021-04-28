import { Navbar, Nav, Container, Jumbotron, Image, Row, Col } from 'react-bootstrap'
import React from 'react';
import TranslateCard from '../components/translateCard';
import image from '../images/masakhane-border.png';

function Home() {
  return (
    <div>
      <Container className="my-4">
        
        <br />
        <br />
        <TranslateCard />
        <br />
        <p style={{fontSize: 12, color: 'gray'}}>This is a community research project and as such<b style={{fontSize: 12, color: 'black'}}> this service is not a production system. Therefore, it should not be used for official translations</b>. Don't see your language and interested in training one up yourself? Go <span style={{color: 'blue'}}><a href="/about">here</a></span> to learn how to contribute a model!</p>
      </Container>
    </div>
  );
}

export default Home;
