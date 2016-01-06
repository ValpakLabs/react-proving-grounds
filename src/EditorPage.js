import React, { Component } from 'react';

class EditorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#e9e9e9',
      fontColor: '#6d2e36',
      fontSize: 20,
      lineHeight: 1.4
    };
  }

  render() {
    const styles = {
      body: {
        backgroundColor: '#fff',
        border: 'solid 1px #222',
        borderRadius: '5px',
        padding: '10px 25px 25px'
      },
      title: {
        border: 'solid 1px #222',
        borderRadius: '5px',
        margin: '10px 0 15px',
        padding: '15px',
        fontSize: '24px',
        color: '#002f6c',
        backgroundColor: '#82bc00'
      },
      container: {
        border: 'solid 2px #222',
        borderRadius: '5px',
        marginTop: 15,
        padding: '10px 25px',
        color: this.state.fontColor,
        backgroundColor: this.state.backgroundColor
      },
      choice: {
        borderLeft: 'solid 4px',
        marginBottom: 5,
        padding: '15px',
        display: 'block',
        fontSize: '16px'
      },
      code: {
        textDecoration: 'underline'
      }
    };

    return (
      <div style={styles.body}>
        <h2 style={styles.title}>React Editor</h2>

        <div style={styles.choice}>
          <label><code>background color: </code></label>
          <input type="color" data-style-property="backgroundColor" defaultValue={this.state.backgroundColor} onChange={this.handleChange} />
          <label><code> {this.state.backgroundColor}</code></label>
        </div>

        <div style={styles.choice}>
          <label><code>font color: </code></label>
          <input type="color" data-style-property="fontColor" defaultValue={this.state.fontColor} onChange={this.handleChange} />
          <label><code> {this.state.fontColor}</code></label>
        </div>

        <div style={styles.choice}>
          <label><code>font-size: </code></label>
          <input type="range" data-style-property="fontSize" defaultValue={this.state.fontSize} onChange={this.handleChange} />
          <label><code> {this.state.fontSize}px</code></label>
        </div>

        <div style={styles.choice}>
          <label><code>line-height: </code></label>
          <input type="range" min="1" max="3" step=".1" data-style-property="lineHeight" defaultValue={this.state.lineHeight} onChange={this.handleChange} />
          <label><code> {this.state.lineHeight}</code></label>
        </div>

        <div style={styles.container}>
          <p style={{color: this.state.fontColor, fontSize: this.state.fontSize, lineHeight: this.state.lineHeight}}>Lucas ipsum dolor sit amet mandalorians sidious jabba boba ben kashyyyk kamino ackbar antilles binks. Hutt organa dooku jabba moff lando. Skywalker owen amidala fett skywalker. Lando amidala padmé leia darth skywalker han. Mon mace hutt jar. Fett mon tusken raider fisto antilles. Ackbar darth skywalker watto dantooine greedo mandalore kamino. Kenobi fisto qui-gonn chewbacca ackbar sebulba dagobah. Leia grievous boba tatooine sidious kit skywalker. Skywalker organa organa wedge twi'lek leia yavin thrawn. Leia mon mara skywalker cade moff qui-gon hutt fisto. Kit yoda obi-wan dantooine tatooine antilles. Darth skywalker jabba han sith mothma baba qui-gonn. Hutt antilles antilles organa darth. Moff boba fett dagobah fisto antilles. Hutt fett c-3po skywalker aayla. Solo alderaan yavin lando twi'lek sith dantooine hutt leia. Tatooine dooku zabrak mandalorians. Antilles fisto solo kashyyyk ben utapau darth skywalker. Organa calamari luke skywalker qui-gonn dantooine skywalker organa mara. Antilles sith skywalker darth.</p>
        </div>
      </div>
    );
  }

  handleChange(e) {
    var styleProperty = e.target.getAttribute('data-style-property');
    var styleValue = e.target.value;

    if (styleProperty === 'backgroundColor') this.setState({ backgroundColor: styleValue });
    if (styleProperty === 'fontColor') this.setState({ fontColor: styleValue });
    if (styleProperty === 'fontSize') this.setState({ fontSize: styleValue });
    if (styleProperty === 'lineHeight') this.setState({ lineHeight: styleValue });
  }

}

export default EditorPage;
