import React, { Component, PropTypes } from 'react';
import CouponList from './CouponList';

class Coupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  componentDidMount() {
    if (this.props.print)
      setTimeout(function() {window.print();}, 1000);
  }

  render() {
    const { coupon } = this.props;
    const print = this.props.print;
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
        alignItems: 'center',
        print: {
          padding: 60,
          width: 800
        }
      },
      businessName: {
        fontSize: 12,
        textTransform: 'uppercase'
      },
      couponTitle: {
        fontWeight: 300,
        fontSize: 22,
        lineHeight: '30px',
        textTransform: 'capitalize'
      },
      viewBtn: {
        background: '#82bc00',
        border: 'solid 1px #00a0df',
        borderRadius: 3,
        marginLeft: 25,
        padding: '5px 9px',
        textDecoration: 'none',
        minWidth: 100,
        display: print ? 'none' : 'block'
      }
    };

    return (
      <div>
        <div style={styles.coupon}
          onClick={e => this.handleCouponClick()}
          onMouseEnter={e => this.setState({isHovered: print ? false : true})}
          onMouseLeave={e => this.setState({isHovered: false})}>

          <div style={print ? styles.body.print : styles.body}>
            <div>
              <div style={styles.businessName}
                dangerouslySetInnerHTML={{__html: coupon.businessName}} />
              <div style={styles.couponTitle}
                dangerouslySetInnerHTML={{__html: coupon.title}} />
            </div>
            <a style={styles.viewBtn} href={`/${coupon.componentUID}`}>Use Coupon</a>
          </div>

        </div>
      </div>
    );
  }

  handleCouponClick() {
    this.props.onCouponClick(this.props.coupon);
  }
}

// {(() => {
//   if (print) {
//     return <a className='noprint' style={styles.viewBtn} href='javascript:window.print()'>Print</a>;
//   }
// })()}

Coupon.propTypes = {
  coupon: PropTypes.object
};

Coupon.defaultProps = {
  coupon: {},
};

export default Coupon;
