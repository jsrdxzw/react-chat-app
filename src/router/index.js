import {Route} from 'react-router-dom'
import React from 'react'
import Login from "../container/login/login"
import Register from "../container/register/register"
import AuthRouter from "../components/auth-router/auth-router"
import Boss from "../container/boss/boss"

const RootRouter = ()=>{
    return (
        <div>
            <AuthRouter/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/register'} component={Register}/>
            <Route path={'/boss'} component={Boss}/>
        </div>
    )
}

export default RootRouter