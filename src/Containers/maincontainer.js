import React from 'react'
import Nav from '../Components/nav'
import Drawings from './drawings'

export default class MainContainer extends React.Component {
    render() {
        return (
        <div className="Main">
            <Nav />
            <Drawings />
        </div>
        )
    }
}
