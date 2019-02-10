import React from 'react';
import { connect } from 'react-redux';
import { getName } from '../actions';

class GetName extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render = () => {
    return (
      <div>
        Get Name
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  console.log(state);
  return { users : state.name}
};

export default connect(
  mapStateToProps,
  {getName}
)(GetName);
