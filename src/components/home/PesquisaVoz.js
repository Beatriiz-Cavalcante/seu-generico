import './PesquisaVoz.css';

import Microfone from '../../assets/microfone.svg';

function PesquisaVoz() {
    return (
        <div className='pesquisa-voz'>
            <div className='.pesquisa-voz-container'>
                <button className='pesquisa-voz-btn'><span>Pesquisa por voz</span><img src={Microfone} /></button>
            </div>
        </div>
    )
}

export default PesquisaVoz;