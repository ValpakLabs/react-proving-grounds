import React, { Component, PropTypes } from 'react';
import CouponList from './CouponList';

class Coupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  render() {
    const { coupon } = this.props;
    const styles = {
      listing: {
        background: this.state.isHovered ? 'lightgrey' : 'white',
        marginBottom: 10,
        padding: 10
      },
      businessName: {
        fontWeight: 700,
        fontSize: 14
      },
      couponTitle: {
        fontWeight: 100,
        fontSize: 22,
        lineHeight: '30px'
      }
    };

    return (
      <div
        style={styles.listing}
        onClick={e => this.handleCouponClick()}
        onMouseEnter={e => this.setState({isHovered: true})}
        onMouseLeave={e => this.setState({isHovered: false})}>
        <div style={styles.businessName}>{coupon.businessName}</div>
        <div style={styles.couponTitle}>{coupon.title}</div>
      </div>
    );
  }

  handleCouponClick() {
    this.props.onCouponClick(this.props.coupon);
  }
}

Coupon.propTypes = {
  coupons: PropTypes.object
};

Coupon.defaultProps = {
  coupons: {},
};

export default Coupon;
