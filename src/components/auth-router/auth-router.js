import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

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
                    console.log(res.data)
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

export default withRouter(AuthRouter)