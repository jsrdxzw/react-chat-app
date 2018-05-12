import React from 'react'
import {NavBar,List,InputItem,TextareaItem,WhiteSpace,Button} from 'antd-mobile'
import AvatarSelector from "../../components/avatar-selector/avatar-selector"
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../store/reducer/user'

class BossInfo extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            company:'',
            salary:'',
            desc:'',
            avatar:''
        }
        this.selectAvatar = this.selectAvatar.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    handleChange(k,v){
        this.setState({
            [k]:v
        })
    }

    selectAvatar(avatar){
        this.setState({
            avatar
        })
    }

    handleSave(){
        this.props.update(this.state)
    }

    render() {
        const {redirectTo} = this.props.user
        return (
            <div>
                {redirectTo?<Redirect to={redirectTo}/>:null}
                <NavBar mode={'dark'}>Boss Information</NavBar>
                <AvatarSelector selectAvatar={this.selectAvatar}/>
                <WhiteSpace/>
                <List>
                    <InputItem onChange={(val)=>this.handleChange('title',val)}>Search For</InputItem>
                    <InputItem onChange={(val)=>this.handleChange('company',val)}>Company</InputItem>
                    <InputItem onChange={(val)=>this.handleChange('salary',val)}>Salary</InputItem>
                    <TextareaItem rows={3} title={'Desc'} autoHeight onChange={(val)=>this.handleChange('desc',val)}/>
                </List>
                <Button type={'primary'} onClick={this.handleSave}>Save</Button>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {
        user:state.user
    }
}
const mapStateFromProps = dispatch=>{
    return {
        update:(data)=>dispatch(update(data))
    }
}

export default connect(mapStateToProps,mapStateFromProps)(BossInfo)