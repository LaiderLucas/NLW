import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import '../../styles/pages/dashboard.css';
import '../../styles/components/animations.css';
import SidebarDashboard from "../../components/SidebarDashboard";


function ForgotPassword() {
  function handleSubmit() {
      console.log('ok')
  }
  const { goBack } = useHistory();
    return (
        <div id="page-login">
            <SidebarDashboard />
            <main className="dashboard">
                <button className="back-button animate-up" type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#15C3D6" />
                </button>
                <form onSubmit={handleSubmit} className="dashboard-form">
                    <fieldset className="animate-up">
                        <legend>Esqueci Minha Senha</legend>
                        
                        <h2>Sua redefinição de senha será enviada para o e-mail cadastrado.</h2>

                        <div className="input-block animate-up">
                            <label htmlFor="email">E-mail: </label>
                            <input name="email" type="email" required/>
                        </div>

                        <button className="dashboard-button animate-up" type="submit">Entrar</button>
                    </fieldset>
                    
                </form>
            </main>
            
        </div>
    )
    
}

export default ForgotPassword;