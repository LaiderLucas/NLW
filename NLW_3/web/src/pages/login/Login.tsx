import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import '../../styles/pages/dashboard.css';
import '../../styles/components/animations.css';
import SidebarDashboard from "../../components/SidebarDashboard";


function Login() {
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
                        <legend>Fazer Login</legend>

                        <div className="input-block animate-up">
                            <label htmlFor="login">Login</label>
                            <input name="login" type="text" required/>
                        </div>

                        <div className="input-block animate-up">
                            <label htmlFor="password">Senha:</label>
                            <input name="password" type="password" required/>
                        </div>
                        <div className="link-block animate-up">
                            <div className="remember">
                                <input id="remember" value="0" type="checkbox"/>
                                <label htmlFor="remember" >Lembrar-me</label>
                            </div>
                           
                            <Link to="/forgot-password">
                                <label id="forgot-password">Esqueci minha senha</label>
                            </Link>
                        </div>
                        
                        <button className="dashboard-button animate-up" type="submit">Entrar</button>
                    </fieldset>
                    
                </form>
            </main>
            
        </div>
    )
    
}

export default Login;