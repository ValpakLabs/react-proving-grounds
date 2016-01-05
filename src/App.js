import React, { Component } from 'react';
import CouponList from './CouponList';
import Coupon from './Coupon';
import styles from './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      zipCode: '90001',
      currentPage: 1,
      isCouponSelected: false,
      selectedCoupon: null,
    };
  }

  componentDidMount() {
    this.fetchListings();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.zipCode !== this.state.zipCode || prevState.currentPage !== this.state.currentPage) {
      this.fetchListings();
    }
  }

  render() {
    const styles = {
      app: {
        display: 'flex',
        justifyContent: 'center',
        padding: 40
      },
      couponList: {
        width: 600
      },
      button: {
        display: 'inline'
      }
    };

    return (
      <div style={styles.app}>
        <div style={styles.couponList}>
          {this.state.selectedCoupon ?
            <div>
              <button style={styles.button} onClick={e => this.setState({ selectedCoupon: null })}>Close</button>
              <Coupon
                style={styles.app}
                coupon={this.state.selectedCoupon} />
            </div>
          :
            <CouponList
              geo={this.state.zipCode}
              coupons={this.state.listings}
              onGeoChange={geo => this.updateGeo(geo)}
              onInputChange={t => console.log(t)}
              currentPage={this.state.currentPage}
              onPrevClick={() => this.handlePrevClick()}
              onNextClick={() => this.handleNextClick()}
              onCouponClick={coupon => this.handleCouponClick(coupon)}  />
          }
        </div>
      </div>
    );
  }

  handleCouponClick(coupon) {
    if (this.state.selectedCoupon)
      return;

    this.setState({
      selectedCoupon: coupon,
    });
  }

  handlePrevClick(e) {
    if (this.state.currentPage === 1)
      return;
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  }

  handleNextClick(e) {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  }

  updateGeo(geo) {
    this.setState({
      zipCode: geo,
      currentPage: 1,
    });
  }

  fetchListings() {
    fetch(`https://apidev.valpak.com/pub/offers/valpak/geo/${this.state.zipCode}/listings?limit=8&offset=${this.state.currentPage}`)
      .then(response => {
        response.json().then(json => {
          this.setState({
            listings: json
          });
        });
      });
  }
}

export default App;
