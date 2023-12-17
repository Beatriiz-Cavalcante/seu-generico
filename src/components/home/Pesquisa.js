import './Pesquisa.css';

import magnify from '../../assets/search-magnify.svg'


function Pesquisa() {
    return (
        <div className="pesquisa">
            <div className="container-pesquisa">
                <div className="input-wrapper">
                    <input id='medicamento' className='barra-pesquisa' type='text' placeholder='Pesquisar medicamento' />
                    <span className='input-img'><img src={magnify} alt='Pesquisar' /></span>
                </div>
            </div>
        </div>
    )
}

export default Pesquisa;