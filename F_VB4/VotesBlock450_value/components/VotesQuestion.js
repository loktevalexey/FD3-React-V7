import React from 'react';
import PropTypes from 'prop-types';

import './VotesQuestion.css';

class VotesQuestion extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
    auxClassName: PropTypes.string.isRequired,
  };
  
  state = {
    auxClassName: this.props.auxClassName, // сработает при монтировании компонента
  }
  
  componentDidUpdate        = (oldProps, oldState) => { console.log('componentDidUpdate');        };
  componentDidMount         = ()                   => { console.log('componentDidMount');         };
  componentWillUnmount      = ()                   => { console.log('componentWillUnmount');      };
  
  componentDidUpdate = (oldProps, oldState) => { 
    console.log('componentDidUpdate');     
    if ( oldProps.auxClassName!==this.props.auxClassName )   
      this.setState({auxClassName:this.props.auxClassName}); // сработает при обновлении компонента
  };

  render() {
    return <input type="text" className={'VotesQuestion '+this.state.auxClassName} defaultValue={this.props.question} />;
  }

}

export default VotesQuestion;
