import { Link } from 'react-router-dom'
import './style.css'

export default function Card(props){
    const { titulo, preco, desconto, imagem } = props

    const formatarDouble = (valor) => {
        valor = valor.toFixed(2)
        valor = String(valor).replace('.', ',')
        return(valor)
    }

    return(
        <Link to='/carrinho'>
            <article className="card">
                <img src={require('../../Img/bola.jpg')} alt={`Imagem de ${titulo}`} />
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