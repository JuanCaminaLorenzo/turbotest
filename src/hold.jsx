import React from 'react'  ;
import styles from "./styles.module.css";
import imagen1 from './assets/img/red_car02.jpeg';
import imagen2 from './assets/img/white_car2.jpeg';



export default function Hold(){
    return (
        <div>
            <section id='hold'className={styles.hold1}>
                <h2>Hold on to your butts</h2>
                <p>Well, the way they make show is, <b>the make one show</b>.that shows called a pilot.Then they show that show to the people who make shows and on the strength of that one show they decide if they 're going to make more shows.Some pilots get picked and become television programs.Some don´t become nothing.She starred in one of the ones that become nothing</p>
                <div className={styles.conocenos}><button className={styles.contactanos}>Conocenos</button></div> 
                <div className={styles.imageHold}><img width={500} src={imagen1} /> </div>
            </section>
            <section className={styles.hold2}>
                <h2>Hold on to your butts</h2>
                <p>Well, the way they make show is, <b>the make one show</b>.that shows called a pilot.Then they show that show to the people who make shows and on the strength of that one show they decide if they 're going to make more shows.Some pilots get picked and become television programs.Some don´t become nothing.She starred in one of the ones that become nothing</p>
                <div className={styles.conocenos}><button className={styles.contactanos}>Conocenos</button></div> 
                <div className={styles.imageHold2}><img width={500} src={imagen2} /> </div>
                
            </section>
        </div>
        
        
    );    
  }