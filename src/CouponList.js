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
          onPrevClick={() => this.handlePrevClick()}
          onNextClick={() => this.handleNextClick()} />
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

  handlePrevClick(e) {
    this.props.onPrevClick();
  }

  handleNextClick(e) {
    this.props.onNextClick();
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
  onGeoChange: PropTypes.fn,
  onInputChange: PropTypes.fn
};

CouponList.defaultProps = {
  coupons: [],
  geo: '90001',
  key: null,
  onGeoChange: e => null,
  onInputChange: e => null,
};

export default CouponList;
