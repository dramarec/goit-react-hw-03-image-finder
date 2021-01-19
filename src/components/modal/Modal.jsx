import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
    render() {
        const { img, alt, onHandleClick } = this.props;
        return (
            <>
                <div className="Overlay" onClick={onHandleClick}>
                    <div className="Modal">
                        <img src={img} alt={alt} />
                    </div>
                </div>
            </>
        );
    }
}
