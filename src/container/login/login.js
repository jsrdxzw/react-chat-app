import React from 'react'
import Logo from "../../components/logo/logo"
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../store/reducer/user'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import ImoocForm from '../../components/imooc-form/imooc-form'

class Login extends React.PureComponent {

    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
    }

    register = ()=>{
       this.props.history.push('/register')
    }

    handleLogin(){
        this.props.login(this.props.state)
    }

    render() {
        const {msg,redirectTo} = this.props.user
        return (
            <div>
                {redirectTo&&redirectTo!=='/login'?<Redirect to={redirectTo}/>:null}
                <Logo/>
                <h2 style={{textAlign:'center',color:'#aaa'}}>Login Page</h2>
                {msg?<p style={{color:'red',textAlign:'center'}}>{msg}</p>:null}
                <WingBlank>
                    <WhiteSpace/>
                    <List>
                        <InputItem onChange={(v)=>this.props.handleChange('user',v)}>username</InputItem>
                        <InputItem type={'password'} onChange={(v)=>this.props.handleChange('pwd',v)}>password</InputItem>
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

export default connect(mapStateToProps,mapStateFromProps)(ImoocForm(Login))