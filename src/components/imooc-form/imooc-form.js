import React from 'react'
export default function (Comp) {
    return class extends React.PureComponent{
        constructor(props) {
            super(props)
            this.state = {}
            this.handleChange = this.handleChange.bind(this)
        }

        handleChange(type,v){
            this.setState({
                [type]:v
            })
        }

        render(){
            return <Comp {...this.props} handleChange={this.handleChange} state={this.state}/>
        }
    }
}