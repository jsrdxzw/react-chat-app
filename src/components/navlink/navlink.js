import React from 'react'
import propTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import styles from './index.css'
import {withRouter} from 'react-router-dom'

class NavLinkBar extends React.PureComponent {


    handlePress(pathname){
        this.props.history.push(pathname)
    }

    render() {
        const navList = this.props.data.filter(item => !item.hide)
        return (
            <div className={styles["tab-bar"]}>
                <TabBar>
                    {navList.map(v => (
                        <TabBar.Item
                            key={v.path}
                            title={v.text}
                            icon={{uri: require(`./img/${v.icon}.png`)}}
                            onPress={()=>this.handlePress(v.path)}
                        >
                        </TabBar.Item>
                    ))}
                </TabBar>
            </div>
        )
    }
}

export default withRouter(NavLinkBar)

NavLinkBar.propTypes = {
    data: propTypes.array.isRequired
}