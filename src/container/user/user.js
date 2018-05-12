import React from 'react'
import {connect} from 'react-redux'
import {Result, List, WhiteSpace, Button, Modal} from 'antd-mobile'
import broswerCookie from 'browser-cookies'
import {logout} from '../../store/reducer/user'
import {Redirect} from 'react-router-dom'

class User extends React.PureComponent {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }


    logout() {
        const alert = Modal.alert
        alert('logout?', 'are you sure to logout?', [{
            text: 'Cancel', onPress: () => {
            }
        }, {
            text: 'Ok', onPress: () => {
                broswerCookie.erase('userid')
                this.props.logout()
            }
        }])
    }

    render() {
        const {avatar, user, type, company, title, desc, money,redirectTo} = this.props.user
        return (
            <div>
                {redirectTo&&redirectTo!==`/${type}`?<Redirect to={redirectTo}/>:null}
                {avatar ?
                    <Result img={<img src={require(`../../imgs/${avatar}.jpeg`)} width={60} height={60} alt=""/>}
                            title={user} message={type === 'boss' ? company : null}/>
                    : null}
                <List renderHeader={() => 'profile'}>
                    <List.Item>
                        {title}
                        <List.Item.Brief>
                            {desc}
                        </List.Item.Brief>
                        {money ? <List.Item.Brief>
                            {money}
                        </List.Item.Brief> : null}
                    </List.Item>
                </List>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button onClick={this.logout}>Logout</Button>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        user: state.user
    }
)

const mapStateFromProps = dispatch => (
    {
        logout:()=>dispatch(logout())
    }
)

export default connect(mapStateToProps,mapStateFromProps)(User)