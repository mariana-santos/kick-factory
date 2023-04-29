import { Link } from 'react-router-dom'
import './style.css'

export default function Card(props){
    const { titulo, preco, desconto, imagem, categoria } = props

    const formatarDouble = (valor) => {
        valor = valor.toFixed(2)
        valor = String(valor).replace('.', ',')
        return(valor)
    }

    const caminhoImagem = require(`../../Img/${categoria}/${imagem}`)

    return(
        <Link to='/carrinho'>
            <article className="card">
                <div className='img-card' style={{backgroundImage: `url(${caminhoImagem})`}}  alt={`Imagem de ${titulo}`} />
                <div className='body-card'>
                    <h3>{titulo}</h3>
                    <p>
                        <span className="preco-antigo">R$ { formatarDouble(preco) }</span>
                        R$ { formatarDouble(preco - (preco * desconto)) }
                    </p>
                    <a href="" className="button">Comprar</a>
                </div>
            </article>
        </Link>
    )
}