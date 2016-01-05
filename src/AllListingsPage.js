import React, { Component, PropTypes } from 'react';
import CouponList from './CouponList';

class AllListingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      zipCode: '90001',
    };
  }

  componentDidMount() {
    this.fetchListings();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.zipCode !== this.state.zipCode || prevProps.location.query.p !== this.props.location.query.p) {
      this.fetchListings();
    }
  }

  render() {
    const currentPage = parseInt(this.props.location.query.p || 1);
    const styles = {
      couponList: {
        width: 600
      },
      button: {
        display: 'inline'
      }
    };

    return (
      <div style={styles.couponList}>
        <CouponList
          geo={this.state.zipCode}
          coupons={this.state.listings}
          onGeoChange={geo => this.updateGeo(geo)}
          currentPage={currentPage}
          onPrevClick={page => this.handlePrevClick(page)}
          onNextClick={page => this.handleNextClick(page)} />

      </div>
    );
  }

  handlePrevClick(page) {
    if (page > 0)
      this.context.router.push(`?p=${page}`);
  }

  handleNextClick(page) {
    this.context.router.push(`?p=${page}`);
  }

  updateGeo(geo) {
    this.setState({
      zipCode: geo,
      currentPage: 1,
    });
  }

  fetchListings() {
    const currentPage = parseInt(this.props.location.query.p || 1);
    fetch(`https://apidev.valpak.com/pub/offers/valpak/geo/${this.state.zipCode}/listings?limit=8&offset=${currentPage}`)
      .then(response => {
        response.json().then(json => {
          this.setState({
            listings: json
          });
        });
      });
  }
}

AllListingsPage.contextTypes = {
  router: PropTypes.object
};

export default AllListingsPage;
