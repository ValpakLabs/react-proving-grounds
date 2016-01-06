import React, { Component, PropTypes } from 'react';

class CouponListHeader extends Component {

  render() {
    const styles = {
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 0 20px 0'
      },
      geoForm: {
        display: 'flex'
      },
      pageNav: {
        display: 'flex'
      },
      pageNum: {
        margin: '0 10px'
      },
      button: {
        background: '#82bc00',
        border: '1px solid #fff',
        borderRadius: 3,
        padding: '5px 9px',
        cursor: 'pointer'
      },
      input: {
        border: '1px solid #82bc00',
        borderRadius: 3,
        marginRight: 5,
        padding: 5
      }
    };

    return (
      <div style={styles.header}>
        <strong>Coupons Near {this.props.geo}</strong>

        <div style={styles.geoForm}>
          <input ref='geo' placeholder='Enter Zip Code' onChange={e => this.handleInputChange(e)} style={styles.input} />
          <button onClick={e => this.handleGeoChange(e)} style={styles.button}>GO</button>
        </div>

        <div style={styles.pageNav}>
          <button style={styles.button} onClick={e => this.handlePrevClick(e)}>&larr; prev</button>
          <div style={styles.pageNum}>{this.props.currentPage}</div>
          <button style={styles.button} onClick={e => this.handleNextClick(e)}>next &rarr;</button>
        </div>
      </div>
    );
  }

  handleGeoChange(e) {
    this.props.onGeoChange(this.refs.geo.value);
  }

  handleInputChange(e) {
    this.props.onInputChange(e.target.value);
  }

  handlePrevClick(e) {
    this.props.onPrevClick(this.props.currentPage - 1);
  }

  handleNextClick(e) {
    this.props.onNextClick(this.props.currentPage + 1);
  }

}

CouponListHeader.defaultProps = {
  geo: '90001',
  onGeoChange: e => null,
  onInputChange: e => null
};

export default CouponListHeader;
