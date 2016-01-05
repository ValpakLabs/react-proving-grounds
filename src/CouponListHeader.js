import React, { Component, PropTypes } from 'react';

class CouponListHeader extends Component {

  render() {
    const styles = {
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0',
      },
      geoForm: {
        display: 'flex',
      },
      pageNav: {
        display: 'flex',
      }
    };
    return (
      <div style={styles.header}>
        <div>Coupons near {this.props.geo}</div>
        <div style={styles.geoForm}>
          <input
            ref='geo'
            placeholder='Enter Geo'
            onChange={e => this.handleInputChange(e)}/>
          <button
            onClick={e => this.handleGeoChange(e)}
            >
            Submit
          </button>
        </div>
        <div style={styles.pageNav}>
          <button onClick={e => this.handlePrevClick(e)}>Prev</button>
          {this.props.currentPage}
          <button onClick={e => this.handleNextClick(e)}>Next</button>
        </div>
      </div>
    );
  }

  handlePrevClick(e) {
    this.props.onPrevClick(this.props.currentPage - 1);
  }

  handleNextClick(e) {
    this.props.onNextClick(this.props.currentPage + 1);
  }

  handleGeoChange(e) {
    const geo = this.refs.geo.value;
    this.props.onGeoChange(geo);
  }

  handleInputChange(e) {
    this.props.onInputChange(e.target.value);
  }
}

CouponListHeader.defaultProps = {
  geo: '90001',
  onGeoChange: e => null,
  onInputChange: e => null,
};

export default CouponListHeader;
