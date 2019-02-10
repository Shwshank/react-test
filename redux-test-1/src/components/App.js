import React from 'react';

import SetName from './SetName';
import GetName from './GetName';

class App extends React.Component {

  render = () => {
    return(
      <div>
        <SetName/>
        <GetName/>
      </div>
    );
  }
}

export default App;
