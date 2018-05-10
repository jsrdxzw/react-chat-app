import React from 'react'
import Logo from "../../components/logo/logo"
import styles from './login.css'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'

export default class Login extends React.PureComponent {


    register = ()=>{
       this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                <Logo/>
                <h2>Login Page</h2>
                <WingBlank>
                    <WhiteSpace/>
                    <List>
                        <InputItem>username</InputItem>
                        <InputItem type={'password'}>password</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type={'primary'}>Login</Button>
                    <WhiteSpace/>
                    <Button type={'primary'} onClick={this.register}>Register</Button>
                </WingBlank>
            </div>
        )
    }
}