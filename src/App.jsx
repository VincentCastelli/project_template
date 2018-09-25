import React from 'react';
import './style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      devFirstName: 'Vincent',
      devLastName: 'Castelli',
    };
  }

  render() {
    return (
      <div>
        <div className="title-head">
          <h1>{`This template was created by ${this.state.devFirstName} ${this.state.devLastName}`}</h1>
        </div>
      </div>
    );
  }
}

export default App;
