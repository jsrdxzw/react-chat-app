import React from 'react'
import {Card, WingBlank} from 'antd-mobile'
import propTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class UserCard extends React.PureComponent {

    handleClick(id){
        this.props.history.push(`/chat/${id}`)
    }

    render() {
        return (
            <WingBlank>
                {this.props.userList.map(v => (
                    v.avatar ?
                        <Card key={v._id} onClick={()=>this.handleClick(v._id)}>
                            <Card.Header title={v.user}
                                         thumb={<img src={require(`../../imgs/${v.avatar}.jpeg`)} width={60}
                                                     height={60} alt=""/>}
                                         extra={<span>{v.title}</span>}>
                            </Card.Header>
                            <Card.Body>
                                {v.desc}
                                {v.type==='boss'?<div>salary:{v.salary}</div>:null}
                                {v.type==='boss'?<div>company:{v.company}</div>:null}
                            </Card.Body>
                        </Card> : null
                ))}
            </WingBlank>
        )
    }
}

export default withRouter(UserCard)

UserCard.propTypes = {
    userList:propTypes.array.isRequired
}