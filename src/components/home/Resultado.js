import React from 'react';
import './Resultado.css'; // Certifique-se de importar seu arquivo CSS corretamente

function resultado() {
  return (
    <div>
      
      <div className="pesquisa">
        <div className="container-pesquisa">
          <div className="input-wrapper">
            <input id='medicamento' className='barra-pesquisa' type='text' placeholder='Pesquisar medicamento' />
            <input type='submit' className='input-img' value=' ' />
          </div>
        </div>
      </div>
      <div className="feed">
        {/* 
        <div className="filtro-cr">
          <div className="filtro">Filtro</div>
          <div className="filtro">Relevancia</div>
          <div className="filtro">Dosagem</div>
          <div className="filtro">Preço</div>
          <div className="filtro">Tipo</div>
          <div className="filtro">Marca</div>
        </div>
        */}
        <div className="itens">
          <div className="item">
            <div className="left">
              <img src="https://www.thelolobaby.com/cdn/shop/files/Lolo_Baby_Simple-Product-Logo-Muted-Sienna_1024x1024.png?v=1667876254" alt="embalagem do remédio" className="foto" />
            </div>
            <div className="right">
              <h3>Nome</h3>
              <ul>
                <li>Tipo:</li>
                <li>Gramatura:</li>
                <li>Fabricante</li>
              </ul>
            </div>
          </div>

          <div className="item">
            <div className="left">
              <img src="https://www.thelolobaby.com/cdn/shop/files/Lolo_Baby_Simple-Product-Logo-Muted-Sienna_1024x1024.png?v=1667876254" alt="embalagem do remédio" className="foto" />
            </div>
            <div className="right">
              <h3>Nome</h3>
              <ul>
                <li>Tipo:</li>
                <li>Gramatura:</li>
                <li>Fabricante</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default resultado;
