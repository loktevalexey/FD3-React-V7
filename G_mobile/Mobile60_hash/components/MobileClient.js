﻿import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    FIO:PropTypes.shape({
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
    }),
    balance: PropTypes.number.isRequired,
  };

  state = {
    FIO: this.props.FIO,
    balance: this.props.balance,
  };

  componentDidUpdate = (oldProps, oldState) => {
    console.log("MobileClient id="+this.props.id+" componentDidUpdate");
    if ( this.props.balance!==this.state.balance )
      this.setState({balance:this.props.balance});
  };

  render() {

    console.log("MobileClient id="+this.props.id+" render");
    
    return (
      <div className='MobileClient'>
        <span className='MobileClientBalance'>{this.state.balance}</span>
        <span className='MobileClientFIO'>{this.state.FIO.fam+" "+this.state.FIO.im+" "+this.state.FIO.otch}</span>
      </div>
    );

  }

}

export default MobileClient;
