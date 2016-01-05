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
        display: 'flex',
        justifyContent: 'center',
        padding: 40
      },
    };

    return (
      <div style={styles.app}>
        {this.props.children}
      </div>
    );
  }

}

export default App;
