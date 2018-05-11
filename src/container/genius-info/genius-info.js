import React from 'react'
import {NavBar,List,InputItem,TextareaItem,WhiteSpace,Button} from 'antd-mobile'
import AvatarSelector from "../../components/avatar-selector/avatar-selector"
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../store/reducer/user'

class GeniusInfo extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            avatar:'',
            desc:''
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
                <NavBar mode={'dark'}>Genius Information</NavBar>
                <AvatarSelector selectAvatart={this.selectAvatar}/>
                <WhiteSpace/>
                <List>
                    <InputItem onChange={(val)=>this.handleChange('title',val)}>Find Job</InputItem>
                    <TextareaItem rows={3} title={'introduction'} autoHeight onChange={(val)=>this.handleChange('desc',val)}/>
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

export default connect(mapStateToProps,mapStateFromProps)(GeniusInfo)