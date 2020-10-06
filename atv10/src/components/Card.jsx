import React, { Component } from 'react';
import './Card.css'

export default class Card extends Component {

    getColor(){
        if (this.props.blue===true) return 'bg-primary'
        if (this.props.green===true) return 'bg-success'
        if (this.props.red===true) return 'bg-danger'
        if (this.props.yellow===true) return 'bg-warning'
        if (this.props.turquoise===true) return 'bg-info'
        if (this.props.light===true) return 'bg-light'
        if (this.props.dark===true) return 'bg-dark'
        return 'bg-secondary'
    }
    getTextcolor(){
        if (this.props.tblue) return 'text-primary'
        if (this.props.tgreen) return 'text-success'
        if (this.props.tred) return 'text-danger'
        if (this.props.tyellow) return 'text-warning'
        if (this.props.tturquoise) return 'text-info'
        if (this.props.tlight) return 'text-light'
        if (this.props.tdark) return 'text-dark'
        if (this.props.tgrey) return 'text-grey'
        return 'text-light'
    }

    render() {
        return (
            <div className={`card ${this.getTextcolor()} ${this.getColor()}`} >
                <div className='card-header'>
                    {this.props.title}
                </div>
                <div className='card-body'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}