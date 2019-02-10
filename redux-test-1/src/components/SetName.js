import React from 'react';
import { connect } from 'react-redux';

import { setName, getName } from '../actions';

class SetName extends React.Component {

  constructor() {
    super();
    this.state = {value : ""};
  }

  componentDidUpdate() {
    // console.log(this.props);
  }

  userClicked = async() => {
    // console.log(this.state.value);
    this.props.getName(this.state.value);
    this.props.setName({
      user:  this.state.value
    });
    await this.setState({
      value: ""
    })
  }

  onInputChange = async(event) => {
    await this.setState({
      value: event.target.value
    })
  }

  render = () => {
    return (
      <div>
        Setname
        <input type="text" value={this.state.value} onChange={this.onInputChange}/>
        <button onClick={this.userClicked} > Set User </button>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(
  mapStateToProps,
  {setName, getName}
)(SetName);
