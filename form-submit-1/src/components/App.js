import React from 'react';
import SearchBar from './SearchBar';
import Result from './Result';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value:""};
  }

  onSearchSubmit = async  (value="nothing") => {
      await this.setState({value});
  }

  render = () => {
    return (
      <div>
        <h4> Yoo! </h4>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Result res={this.state.value} />
        {/* <button onClick={this.onSearchSubmit}   > Click here </button> */}
      </div>
    );
  }

}

export default App;
