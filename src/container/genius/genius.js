import React from 'react'
import {connect} from 'react-redux'
import {get_user_list} from '../../store/reducer/chater'
import UserCard from "../../components/user-card/user-card"

class Genius extends React.PureComponent {

    componentDidMount() {
        this.props.get_user_list('boss')
    }

    render() {
        return (
            <UserCard userList={this.props.userList}/>
        )
    }
}

const mapStateToProps = state => ({
    userList: state.chatters.userList
})

const mapStateFromProps = dispatch => ({
    get_user_list: (type) => dispatch(get_user_list(type))
})

export default connect(mapStateToProps, mapStateFromProps)(Genius)

