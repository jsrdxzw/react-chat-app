import {Route, Switch} from 'react-router-dom'
import React from 'react'
import Login from "../container/login/login"
import Register from "../container/register/register"
import AuthRouter from "../components/auth-router/auth-router"
import BossInfo from "../container/boss-info/boss-info"
import GeniusInfo from "../container/genius-info/genius-info"
import DashBoard from "../container/dashboard/dashboard"
import Chat from "../container/chat/chat"


const RootRouter = () => {
    return (
        <div>
            <AuthRouter/>
            <Switch>
                <Route path={'/bossinfo'} component={BossInfo}/>
                <Route path={'/geniusinfo'} component={GeniusInfo}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/chat/:user'} component={Chat}/>
                <Route component={DashBoard}/>
            </Switch>
        </div>
    )
}

export default RootRouter