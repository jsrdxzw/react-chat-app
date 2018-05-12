import React from 'react'
import Logo from "../../components/logo/logo"
import {List,Button,InputItem,Radio,WingBlank} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../../store/reducer/user'

const RadioItem = Radio.RadioItem

class Register extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius'
        }
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }

    handleRegister(){
        this.props.register(this.state)
    }

    render() {
        const {msg,redirectTo} = this.props.user
        return (
            <div>
                {redirectTo?<Redirect to={redirectTo}/>:null}
                <Logo/>
                <h2 style={{textAlign:'center',color:'#aaa'}}>Register Page</h2>
                <WingBlank>
                    {msg?<p style={{color:'red',textAlign:'center'}}>{msg}</p>:null}
                <List>
                    <InputItem onChange={(v)=>this.handleChange('user',v)}>username</InputItem>
                    <InputItem onChange={(v)=>this.handleChange('pwd',v)} type={'password'}>password</InputItem>
                    <InputItem onChange={(v)=>this.handleChange('repeatpwd',v)} type={'password'}>confirm</InputItem>
                    <RadioItem checked={this.state.type==='genius'} onChange={()=>this.handleChange('type','genius')}>
                        genius
                    </RadioItem>
                    <RadioItem checked={this.state.type === 'boss'} onChange={()=>this.handleChange('type','boss')}>
                        boss
                    </RadioItem>
                </List>
                    <Button onClick={this.handleRegister}>Register</Button>
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
        register:(data)=>dispatch(register(data))
    }
}

export default connect(mapStateToProps,mapStateFromProps)(Register)