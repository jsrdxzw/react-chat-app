import React from 'react'
import Logo from "../../components/logo/logo"
import {List,Button,InputItem,Radio,WingBlank} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../../store/reducer/user'
import ImoocForm from '../../components/imooc-form/imooc-form'

const RadioItem = Radio.RadioItem

class Register extends React.PureComponent {
    constructor(props) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
    }


    componentDidMount() {
        this.props.handleChange('type','genius')
    }

    handleRegister(){
        this.props.register(this.props.state)
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
                    <InputItem onChange={(v)=>this.props.handleChange('user',v)}>username</InputItem>
                    <InputItem onChange={(v)=>this.props.handleChange('pwd',v)} type={'password'}>password</InputItem>
                    <InputItem onChange={(v)=>this.props.handleChange('repeatpwd',v)} type={'password'}>confirm</InputItem>
                    <RadioItem checked={this.props.state.type==='genius'} onChange={()=>this.props.handleChange('type','genius')}>
                        genius
                    </RadioItem>
                    <RadioItem checked={this.props.state.type === 'boss'} onChange={()=>this.props.handleChange('type','boss')}>
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

export default connect(mapStateToProps,mapStateFromProps)(ImoocForm(Register))