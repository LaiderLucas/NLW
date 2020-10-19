import React from 'react';
import { Link } from 'react-router-dom';


import '../styles/pages/result-create-orphange.css'

export default function NotCreateOrphanage() {
    return (
        <div id="page-error">
          <div className="result-content">
              <div className="content">
                <strong>Eitaaa!</strong>
                  <p>
                      Alguma coisa deu errado ao tentar fazer o cadatro do orfanato.
                      Tente mais tarde
                  </p>
                  <Link to='/app' className="button">
                    Voltar para o mapa
                  </Link>
              </div>
          </div>
        </div>
    )
}