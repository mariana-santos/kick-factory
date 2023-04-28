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

    return (
        <div className="item">
            <h3>{ item.titulo }</h3>
            <p>
                <span>Valor unitário: </span>
                R$ { formatarDouble(valor) }
            </p>
            <p className="qtd">
                <button className="button" onClick={() => handleQtdChange(qtd - 1)}> - </button>
                Qtd.: { qtd }
                <button className="button" onClick={() => handleQtdChange(qtd + 1)}> + </button>
            </p>
            <p><span>Subtotal:</span> R${ formatarDouble(subtotal) } </p>
        </div>
    );
}
