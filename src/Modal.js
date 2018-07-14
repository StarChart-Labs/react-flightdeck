import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './styles/Modal.css';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.internalClose = this.internalClose.bind(this);
    }

    internalClose(e) {
      // Only close on our real close targets
      if (e.target.classList.contains('modal') || e.target.classList.contains('close-modal-button')) {
        this.props.onClose();
      }
    }

    render() {
      return (
        <div className={'modal' + (this.props.open ? ' open' : '')} onClick={this.internalClose}>
            <div className='modal-window'>
              <div className='modal-title-bar'>
                <span>{this.props.title}</span>
                <FontAwesomeIcon className='close-modal-button' icon={faTimesCircle} onClick={this.internalClose}/>
              </div>
              <div className='modal-content'>
                {this.props.content}
              </div>
              <div className='modal-buttons'>
                {this.props.buttons}
              </div>
            </div>
        </div>
      )
    }
}
