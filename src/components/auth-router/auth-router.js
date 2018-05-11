import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {load_data} from '../../store/reducer/user'
import {connect} from 'react-redux'

class AuthRouter extends React.PureComponent {
    componentDidMount() {
        const publicList = ['/login', '/register']
        const pathname = this.props.location.pathname
        if (publicList.indexOf(pathname) > -1) {
            return null
        }
        axios.get('/user/info').then(res => {
            if (res.status === 200) {
                if (res.data.code === 0) {
                    this.props.load_data(res.data.data)
                } else {
                    this.props.history.push('/login')
                }
            }
        })
    }

    render() {
        return (
            null
        )
    }
}

const mapStateFromProps = (dispatch)=>{
    return {
        load_data:(userinfo)=>dispatch(load_data(userinfo))
    }
}

export default connect(null,mapStateFromProps)(withRouter(AuthRouter))