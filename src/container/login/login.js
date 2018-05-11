import React from 'react'
import Logo from "../../components/logo/logo"
import styles from './login.css'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../store/reducer/user'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'

class Login extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            user:'',
            pwd:''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }


    register = ()=>{
       this.props.history.push('/register')
    }

    handleChange(type,v){
        this.setState({
            [type]:v
        })
    }

    handleLogin(){
        this.props.login(this.state)
    }

    render() {
        const {msg,redirectTo} = this.props.user
        return (
            <div>
                {redirectTo?<Redirect to={redirectTo}/>:null}
                <Logo/>
                <h2>Login Page</h2>
                {msg?<p style={{color:'red',textAlign:'center'}}>{msg}</p>:null}
                <WingBlank>
                    <WhiteSpace/>
                    <List>
                        <InputItem onChange={(v)=>this.handleChange('user',v)}>username</InputItem>
                        <InputItem type={'password'} onChange={(v)=>this.handleChange('pwd',v)}>password</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type={'primary'} onClick={this.handleLogin}>Login</Button>
                    <WhiteSpace/>
                    <Button type={'primary'} onClick={this.register}>Register</Button>
                </WingBlank>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
}
const mapStateFromProps = (dispatch)=>{
    return {
        login:(data)=>dispatch(login(data))
    }
}

export default connect(mapStateToProps,mapStateFromProps)(Login)