import React from 'react';
import './Pesquisa.css';
import magnify from '../../assets/search-magnify.svg';

function Pesquisa() {
    return (
        <div className="pesquisa">
            <div className="container-pesquisa">
                <div className="input-wrapper">
                    <input id='medicamento' className='barra-pesquisa' type='text' placeholder='Pesquisar medicamento' />
                    <submit className='input-img'><img src={magnify} alt='Pesquisar' /></submit>
                </div>
            </div>
        </div>
    );
}

export default Pesquisa;
