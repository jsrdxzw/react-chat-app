import React from 'react'
import {Route,Switch} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import styles from './index.css'
import Boss from "../boss/boss"
import {connect} from 'react-redux'
import Genius from "../genius/genius"
import NavLinkBar from "../../components/navlink/navlink"

function MSG() {
    return <h1>msg</h1>
}

function User() {
    return <h1>me</h1>
}

class DashBoard extends React.PureComponent {

    render() {
        const navList = [
            {
                path:'/boss',
                text:'genius',
                icon:'boss',
                title:'genius',
                component:Boss,
                hide:this.props.type==='genius'
            },
            {
                path:'/genius',
                text:'boss',
                icon:'job',
                title:'boss',
                component:Genius,
                hide:this.props.type==='boss'
            },
            {
                path:'/msg',
                text:'message',
                icon:'msg',
                title:'message',
                component:MSG
            },
            {
                path:'/me',
                text:'me',
                icon:'user',
                title:'me',
                component:User
            }
        ]
        const {pathname} = this.props.location
        return (
            <div>
                <NavBar mode={'dark'}>{navList.find(item=>item.path===pathname).title}</NavBar>
                <div className={styles.content}>
                    <Switch>
                        {navList.map(item=>(
                            <Route key={item.path} path={item.path} component={item.component}/>
                        ))}
                    </Switch>
                </div>
                <NavLinkBar data={navList}/>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        type:state.user.type
    }
}

export default connect(mapStateToProps)(DashBoard)