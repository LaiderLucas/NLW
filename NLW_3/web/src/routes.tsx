import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing';

import Login from './pages/login/Login';

import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import ResetPassword from './pages/forgotPassword/ResetPassword';

import OrphanagesRegistered from './pages/dashboard/OrphanagesRegistered';


import OrphanagesMap from './pages/orphanages/OrphanagesMap';
import CreateOrphanage from './pages/orphanages/CreateOrphanage';
import Orphanage from './pages/orphanages/Orphanage';

import CreateOrphanageSucess from './pages/returnForUser/CreateOrphanageSucess';
import NotCreateOrphanage from './pages/returnForUser/NotCreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />

                <Route path="/login" component={Login} />

                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/reset-password" component={ResetPassword} />

                <Route path="/dashboard" component={OrphanagesRegistered} />


                <Route path="/app" component={OrphanagesMap} />

                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />

                <Route path="/success" component={CreateOrphanageSucess} />
                <Route path="/error" component={NotCreateOrphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;