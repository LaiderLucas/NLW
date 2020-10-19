import React from 'react';
import { Link } from 'react-router-dom';


import '../styles/pages/result-create-orphange.css'

export default function CreateOrphanageSucess() {
    return (
        <div id="page-success">
          <div className="result-content">
              <div className="content">
                <strong>Ebaaa!</strong>
                  <p>
                      O cadastro deu certo e foi enviado
                      ao administrador para ser aprovado.
                      Agora é só esperar :)
                  </p>
                  <Link to='/app' className="button">
                    Voltar para o mapa
                  </Link>
              </div>
          </div>
        </div>
    )
}