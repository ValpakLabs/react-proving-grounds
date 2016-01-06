import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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
      coupon: {
        background: this.state.isHovered ? '#eee' : '#fff',
        border: 'solid 1px #00a0df',
        borderRadius: 3,
        marginBottom: 10,
        padding: 10
      },
      body: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      businessName: {
        fontSize: 14
      },
      couponTitle: {
        fontWeight: 300,
        fontSize: 22,
        lineHeight: '30px'
      },
      viewBtn: {
        background: '#82bc00',
        border: 'solid 1px #00a0df',
        borderRadius: 3,
        marginLeft: 25,
        padding: '5px 9px',
        textDecoration: 'none'
      }
    };

    return (
      <div style={styles.coupon}
        onClick={e => this.handleCouponClick()}
        onMouseEnter={e => this.setState({isHovered: true})}
        onMouseLeave={e => this.setState({isHovered: false})}>

        <div style={styles.body}>
          <div>
            <div style={styles.businessName}
              dangerouslySetInnerHTML={{__html: coupon.businessName}} />
            <div style={styles.couponTitle}
              dangerouslySetInnerHTML={{__html: coupon.title}} />
          </div>
          <Link style={styles.viewBtn} to={`/${coupon.componentUID}`}>View</Link>
        </div>

      </div>
    );
  }

  handleCouponClick() {
    this.props.onCouponClick(this.props.coupon);
  }
}

Coupon.propTypes = {
  coupon: PropTypes.object
};

Coupon.defaultProps = {
  coupon: {},
};

export default Coupon;
