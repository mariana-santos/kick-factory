import Card from '../Card';

import { IoFootballSharp } from 'react-icons/io5'

import itens from '../../Pages/Carrinho/itens.json'

export default function Futebol({ categoria, icon }){
  const itensCategoria = itens.filter((item) => {
    return item.categoria == categoria
  })

    return(
      <div id={categoria}>
        <h2>
          { icon }
            Itens de {categoria}
          { icon }
        </h2>
  
        <section className='row'>

          { itensCategoria.map((item) => {
            return(
              <Card 
                imagem={item.imagem}
                titulo={item.titulo}
                preco={item.preco}
                desconto={item.desconto}
                categoria={item.categoria}
              />)
          }) }
        </section>
      </div>
    )
  }