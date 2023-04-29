import { useState } from "react";

export default function Item({ item, onQtdChange }) {

    const formatarDouble = (valor) => {
        valor = valor.toFixed(2)
        valor = String(valor).replace('.', ',')
        return(valor)
    }

    const [qtd, setQtd] = useState(item.qtd);
    const [valor, setValor] = useState(item.preco - (item.preco * item.desconto));
    const [subtotal, setSubTotal] = useState(valor * qtd);

    const handleQtdChange = (newQtd) => {
        if(newQtd >= 1){
            setQtd(newQtd);
            setSubTotal(valor * newQtd);
            onQtdChange(item.id, newQtd);
        }
    };

    const caminhoImagem = require(`../../../Img/${item.categoria}/${item.imagem}`)

    return (
        <div className="item">
            <div className="img-item" style={{backgroundImage: `url(${caminhoImagem})`}}  alt={`Imagem de ${item.titulo}`} />
            <div className="body-item">
                <h3>{ item.titulo }</h3>
                <p><span>Categoria:</span> { item.categoria } </p>
                <p>
                    <span>Valor unitário: </span>
                    R$ { formatarDouble(valor) }
                </p>
            </div>

            <div className="body-item">
                <p className="qtd">
                    <button className="button" onClick={() => handleQtdChange(qtd - 1)}> - </button>
                    Qtd.: { qtd }
                    <button className="button" onClick={() => handleQtdChange(qtd + 1)}> + </button>
                </p>
                <p><span>Subtotal:</span> R${ formatarDouble(subtotal) } </p>
            </div>
            
        </div>
    );
}
