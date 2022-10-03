import React, {useState} from 'react';

const Contador = () => {
    const [cont, setCont] = useState(0);
    function modCont (op){
        if (op == "+"){
            setCont(cont + 1)
        } else{
            if (cont > 0){
                setCont(cont - 1)
            }
        }
    } 
    return (
        <>
        <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#" onClick={() => modCont('-')}>-</a></li>
            <li className="page-item"><a className="page-link" href="#">{cont}</a></li>
            <li className="page-item"><a className="page-link" href="#" onClick={() => modCont('+')}>+</a></li>
        </ul>
        </nav>
        </>
    );
}

export default Contador;
