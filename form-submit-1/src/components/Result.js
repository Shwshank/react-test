import React from 'react';

class  Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:""};
  }

  componentDidUpdate = () =>{
    console.log(this.props.res);
  };

  render = () => {
    return (
      <div>
        {this.props.res}
      </div>
    )
  }

}

export default Result;
