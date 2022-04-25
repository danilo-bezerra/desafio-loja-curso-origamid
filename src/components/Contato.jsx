import React from 'react'
import styles from './Contato.module.css'
import foto from '../assets/contato.jpg'
import Head from './Head'
import Image from "./Image";

const Contato = () => {
  return (
    <section className="container">
      <Head title="Contato" />
      <div className="images">
        <Image src={foto} alt="contato" />
      </div>
      <div className={styles.dados}>
        <h2>Contato</h2>
        <ul >
          <li>loja@loja.com</li>
          <li>(99) 9999-9999</li>
          <li>Avenida da vida</li>
        </ul>
      </div>
    </section>
  );
}

export default Contato