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
    return (newProps.fio!==this.props.fio)||(newProps.balance!==this.state.balance);
    
    // let oldActive=this.state.balance>=0;
    // let newActive=newProps.balance>=0;
    // return (newProps.fio!==this.props.fio)||(oldActive!==newActive); 
    // оптимально, но некрасиво, т.к. this.state.balance часто содержит некорректный баланс
    // лучше тогда в стейте хранить не balance а activeFlag
    
  };

  render() {

    console.log("MobileClient id="+this.props.id+" render");
    
    return (
      <div className='MobileClient'>
        {
          (this.state.balance>=0)
          ?<span className='MobileClientBalance MobileClientBalanceActive'>аккаунт активен</span>
          :<span className='MobileClientBalance MobileClientBalanceBlocked'>аккаунт блокирован</span>
        }
        <span className='MobileClientFIO'>{this.props.fio}</span>
      </div>
    );

  }

}

export default MobileClient;
