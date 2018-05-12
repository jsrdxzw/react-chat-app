import React from 'react'
import {Card, WingBlank} from 'antd-mobile'
import propTypes from 'prop-types'

export default class UserCard extends React.PureComponent {

    render() {
        return (
            <WingBlank>
                {this.props.userList.map(v => (
                    v.avatar ?
                        <Card key={v._id}>
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

UserCard.propTypes = {
    userList:propTypes.array.isRequired
}