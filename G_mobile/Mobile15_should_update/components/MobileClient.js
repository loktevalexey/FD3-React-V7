import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    fio: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  };

  state = {
    balance: this.props.balance,
  };

  componentDidUpdate = (oldProps, oldState) => {
    console.log("MobileClient id="+this.props.id+" componentDidUpdate");
    if ( this.props.balance!==this.state.balance )
      this.setState({balance:this.props.balance});
  };

  shouldComponentUpdate = (newProps,newState) => {
    console.log("MobileClient id="+this.props.id+" shouldComponentUpdate");
    return (newProps.fio!==this.props.fio)||(newProps.balance!==this.state.balance);
  };

  render() {

    console.log("MobileClient id="+this.props.id+" render "+this.state.balance);
    
    return (
      <div className='MobileClient'>
        <span className='MobileClientBalance'>{this.state.balance}</span>
        <span className='MobileClientFIO'>{this.props.fio}</span>
      </div>
    );

  }

}

export default MobileClient;
