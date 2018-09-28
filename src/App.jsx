import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      devFirstName: 'Vincent',
      devLastName: 'Castelli',
    };
  }

  render() {
    const { devFirstName, devLastName } = this.state;
    return (
      <div>
        <div className="title-head">
          <h1>{`This web template was created by ${devFirstName} ${devLastName}`}</h1>
        </div>
      </div>
    );
  }
}

export default App;
