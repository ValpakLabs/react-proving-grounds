import React, { Component } from 'react';
import styles from './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const styles = {
      app: {
        padding: 30,
        display: 'flex'
      }
    };

    return (
      <div style={styles.app}>
        Hello, App!
      </div>
    );
  }

}

export default App;
