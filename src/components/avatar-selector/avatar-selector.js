import React from 'react'
import {Grid,List} from 'antd-mobile'
import PropTypes from 'prop-types';

export default class AvatarSelector extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            text:'',
            icon:''
        }
    }

    render() {
        const avatarList = 'boy,girl'.split(',').map(v=>({icon:require(`../../imgs/${v}.jpeg`),text:v}))
        const gridHeader = this.state.text?(<div>
            <span>avatar:</span>
            <img src={this.state.icon} alt="" width={60} height={60}/>
        </div>):<div>select an avatar</div>
        return (
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid data={avatarList} onClick={elm=>{
                        this.setState(elm)
                        this.props.selectAvatar(elm.text)
                    }}/>
                </List>
            </div>
        )
    }
}

AvatarSelector.propTypes = {
    selectAvatar:PropTypes.func.isRequired
}