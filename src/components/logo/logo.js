import React from 'react'
import styles from './logo.css'
import logoUrl from './job.png'

export default class Logo extends React.PureComponent {

    render() {
        return (
            <div className={styles.container}>
                <img src={logoUrl} alt=""/>
            </div>
        )
    }
}