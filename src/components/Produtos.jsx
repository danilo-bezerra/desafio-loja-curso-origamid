import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Carregando from "./Carregando";
import Head from "./Head";
import Image from "./Image";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  useEffect(() => {
    if (!produtos) {
      async function getData() {
        const response = await fetch(
          "https://ranekapi.origamid.dev/json/api/produto"
        );
        const json = await response.json();
        setProdutos(json);
      }

      getData();
    }
  }, []);

  if (produtos) {
    return (
      <section className={styles.Produtos}>
        <Head title="Produtos" />
        {produtos.map(({ id, nome, fotos }) => {
          return (
            <Link key={id} to={`/produto/${id}`} className={styles.produto}>
              <Image src={fotos[0].src} alt={nome} />
              <h2 className={styles.h2}>{nome}</h2>
            </Link>
          );
        })}
      </section>
    );
  } else {
    return <Carregando />;
  }
};

export default Produtos;
