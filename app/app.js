import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="center">
        <h1>My webpack, express and react starter</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDom.render(<App />, app);
