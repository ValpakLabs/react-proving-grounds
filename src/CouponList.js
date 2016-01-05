import React, { Component, PropTypes } from 'react';
import Coupon from './Coupon';
import CouponListHeader from './CouponListHeader';

class CouponList extends Component {

  render() {
    const styles = {
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0',
      },
      geoForm: {
        display: 'flex',
      }
    };
    return (
      <div>
        <CouponListHeader
          geo={this.props.geo}
          onGeoChange={geo => this.handleGeoChange(geo)}
          onInputChange={t => this.handleInputChange(t)}
          currentPage={this.props.currentPage}
          onPrevClick={page => this.handlePrevClick(page)}
          onNextClick={page => this.handleNextClick(page)} />
        <div>
          {this.props.coupons.map((coupon, index) =>
            <Coupon
              key={index}
              coupon={coupon}
              onCouponClick={coupon => this.handleCouponClick(coupon)} />
          )}
        </div>
      </div>
    );
  }

  handleCouponClick(coupon) {
    this.props.onCouponClick(coupon);
  }

  handlePrevClick(page) {
    this.props.onPrevClick(page);
  }

  handleNextClick(page) {
    this.props.onNextClick(page);
  }

  handleGeoChange(geo) {
    this.props.onGeoChange(geo);
  }

  handleInputChange(t) {
    this.props.onInputChange(t);
  }
}

CouponList.propTypes = {
  coupons: PropTypes.array,
  geo: PropTypes.string,
  onGeoChange: PropTypes.func,
  onInputChange: PropTypes.func,
  onNextClick: PropTypes.func,
  onPrevClick: PropTypes.func,
  onCouponClick: PropTypes.func
};

CouponList.defaultProps = {
  coupons: [],
  geo: '90001',
  onGeoChange: e => null,
  onInputChange: e => null,
  onCouponClick: e => null,
  onNextClick: e => null,
  onPrevClick: e => null
};

export default CouponList;
