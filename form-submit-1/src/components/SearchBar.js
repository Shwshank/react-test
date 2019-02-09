import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value:""};
  }

  onSearchSubmit1 = () => {
    console.log(this.state.value);
    this.props.onSubmit(this.state.value);
  }

  inputGetChanged = async(event) => {
    await this.setState({
      value: event.target.value
    });
    this.props.onSubmit(this.state.value);
  }

  render = () => {
    return (
      <div>
        <input  type="text" value={this.state.value} onChange={this.inputGetChanged} />
        <br/>
        <button onClick={this.onSearchSubmit1}   > Click here </button>
      </div>
    );
  }
}

export default SearchBar;
