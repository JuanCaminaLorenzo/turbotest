import React, { useState } from 'react';
import styles from "./styles.module.css";
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import imagen from './assets/img/blue_car.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen1 from './assets/img/red_car02.jpeg';
import imagen2 from './assets/img/white_car2.jpeg';
import imagen3 from './assets/img/black_car.jpeg';
import imagen4 from './assets/img/Rain_car.jpeg';
import imagen5 from './assets/img/white_car.jpeg';
import imagen6 from './assets/img/red_car.jpeg';
import imagen7 from './assets/img/bluesky.jpeg';
import imagen8 from './assets/img/stop_car.jpeg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Card from "react-bootstrap/Card";

import './App.css';



const App = () => (
    <div>
      <section className={styles.imagenDeFondo}>
        <div  className={styles.contenedor1}>
          <Nav >
            <Nav.Item>
              <div className={styles.info}>+34 722 73 96 22</div>
            </Nav.Item>
            <Nav.Item>
            <div className={styles.info2}>Contacto</div>
            </Nav.Item>
          </Nav>
        </div> 
      
        <section className={styles.contenedor2}>
            <div className={styles.titulo}>
                Are you ready for the truth?
            </div>
         
        </section>
      

      </section>

      <Container className={styles.contenedor}>
          <Row  className={styles.Row}>
            <Col>
              <Image  fluid='true'src={imagen3} />
              <div className={styles.titleP}>title project</div>
            </Col>
            <Col className={styles.columnaCentral}>
              <Image  fluid='true'  src={imagen4} />
              <div className={styles.titleP}>title project</div>
            </Col>
            <Col>
              <Image     fluid = 'true'src={imagen5} />
              <div className={styles.titleP}>title project</div>
            </Col>
          </Row>
          <Row className={styles.fila}>
            <Col>
              <Image  fluid='true' src={imagen6} />
              <div className={styles.titleP}>title project</div>
            </Col>
            <Col>
              <Image  fluid='true'  src={imagen7} />
              <div className={styles.titleP}>title project</div>
            </Col>
            <Col>
              <Image  fluid='true' src={imagen8} />
              <div className={styles.titleP}>title project</div>
            </Col>
          </Row>
        </Container>
       
     
         
      <Container className="p-3">
         
        <Container fluid="md">
          
                
            </Container> 
            <Row className={styles.hold1}>
              <Col className={styles.columna}>
                <h2>Hold on to your butts</h2>
                <p>Well, the way they make show is, <b>the make one show</b>.that shows called a pilot.Then they show that show to the people who make shows and on the strength of that one show they decide if they 're going to make more shows.Some pilots get picked and become television programs.Some don´t become nothing.She starred in one of the ones that become nothing</p>
              </Col>
              <Col className={styles.columna}>
                <div className={styles.imageHold}><Image width={500} fluid = 'true' src={imagen1} /> </div>
              </Col>
            </Row>
            <Row className={styles.hold2}>
              <Col className={styles.columna}>
                <div className={styles.imageHold2}><Image width={500} fluid ='true'src={imagen2} /> </div>
              </Col>
              <Col className={styles.columna}>
                <h2>Hold on to your butts</h2>
                <p>Well, the way they make show is, <b>the make one show</b>.that shows called a pilot.Then they show that show to the people who make shows and on the strength of that one show they decide if they 're going to make more shows.Some pilots get picked and become television programs.Some don´t become nothing.She starred in one of the ones that become nothing</p>
              </Col>
            </Row>
         </Container>
      </div>
   
);

export default App;
 