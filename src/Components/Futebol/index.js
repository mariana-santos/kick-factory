import Card from '../Card';

import { IoFootballSharp } from 'react-icons/io5'

export default function Futebol(){
    return(
      <>
        <h2>
          <IoFootballSharp />
            Itens de Futebol
          <IoFootballSharp />
        </h2>
  
        <section className='row'>
          <Card 
            imagem=""
            titulo="Bola de Futebol de Campo"
            preco={99}
            desconto={0.15}
          />
  
          <Card 
            imagem=""
            titulo="Bola de Futebol de Campo"
            preco={99}
            desconto={0.15}
          />
  
          <Card 
            imagem=""
            titulo="Bola de Futebol de Campo"
            preco={99}
            desconto={0.15}
          />
  
          <Card 
            imagem=""
            titulo="Bola de Futebol de Campo"
            preco={99}
            desconto={0.15}
          />
        </section>
      </>
    )
  }