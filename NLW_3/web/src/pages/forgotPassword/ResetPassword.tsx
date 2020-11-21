import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import '../../styles/pages/dashboard.css';
import '../../styles/components/animations.css';
import SidebarDashboard from "../../components/SidebarLogin";


function ResetPassword() {
  function handleSubmit() {
      console.log('ok')
  }

  function handleVisiblePassword() {
      const input = document.getElementById("password")?.getAttribute('type');

      if(input === "password") {
        const input = document.getElementById("password")
        input?.setAttribute("type","text")
        document.getElementById("seepassword")?.setAttribute("class","notVisible")
      }else {
        const input = document.getElementById("password")
        input?.setAttribute("type","password")
        document.getElementById("seepassword")?.setAttribute("class","")
      }

  }

  function handleVisiblePassword2() {
    const input = document.getElementById("password2")?.getAttribute('type');

    if(input === "password") {
      const input = document.getElementById("password2")
      input?.setAttribute("type","text")
      document.getElementById("seepassword2")?.setAttribute("class","notVisible")
    }else {
      const input = document.getElementById("password2")
      input?.setAttribute("type","password")
      document.getElementById("seepassword2")?.setAttribute("class","")
    }

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
                        <legend>Redefinição de senha</legend>
                        
                        <h2>Escolha uma nova senha para você acessar o dashboard do Happy</h2>

                        <div className="input-block animate-up">
                            <label htmlFor="email">Nova senha: </label>
                            <div className="input">
                                <input id="password" name="password" type="password" required />
                                <span id="seepassword" onClick={handleVisiblePassword}></span>
                            </div>
                        </div>

                        <div className="input-block animate-up">
                            <label htmlFor="password">Repetir senha: </label>
                            <div className="input">
                                <input id="password2" name="password" type="password" required />
                                <span id="seepassword2" onClick={handleVisiblePassword2}></span>
                            </div>
                        </div>

                        <button className="dashboard-button animate-up" type="submit">Entrar</button>
                    </fieldset>
                    
                </form>
            </main>
            
        </div>
    )
    
}

export default ResetPassword;