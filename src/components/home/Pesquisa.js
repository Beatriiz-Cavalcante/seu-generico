import React from 'react';
import './Pesquisa.css';
import magnify from '../../assets/search-magnify.svg';

function Pesquisa() {
    return (
        <div className="pesquisa">
            <div className="container-pesquisa">
                <div className="input-wrapper">
                    <input id='medicamento' className='barra-pesquisa' type='text' placeholder='Pesquisar medicamento' />
                    <input type='submit' className='input-img' value=' '/>
                </div>
            </div>
        </div>
    );
}

export default Pesquisa;
