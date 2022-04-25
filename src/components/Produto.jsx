import React from 'react'
import { useParams } from 'react-router-dom'
import Carregando from './Carregando'
import Head from './Head'
import Image from "./Image";

const Produto = () => {
    const [produto, setProduto] = React.useState(null)
    const {id} = useParams()

    React.useEffect(() => {
        if (!produto) {
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
                .then(res => res.json())
                .then(json => setProduto(json));
        }
    }, [])

  return produto ? (
    <section className='container'>
      <Head title={produto.nome} />
      <div className="images">
        {produto.fotos.map(({ src, titulo }) => (
          <Image key={titulo} src={src} alt={titulo} />
        ))}
      </div>
      <div className="text">
        <h2>{produto.nome}</h2>
        <p>
          <mark>R$ {produto.preco}</mark>
        </p>
        <p>{produto.descricao}</p>
      </div>
    </section>
  ) : (
    <Carregando />
  ); 
}

export default Produto