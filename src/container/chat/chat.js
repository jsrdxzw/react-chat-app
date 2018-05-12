import React from 'react'

export default class Chat extends React.PureComponent {

    render() {
        return (
            <div>
                <h2>{this.props.match.params.user}</h2>
            </div>
        )
    }
}