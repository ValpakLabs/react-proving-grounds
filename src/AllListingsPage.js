import React, { Component, PropTypes } from 'react';
import CouponList from './CouponList';

class AllListingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      zipCode: '90001'
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
      body: {
        display: 'flex'
      },
      couponList: {
        background: '#a3d9e7',
        border: '1px solid #fff',
        borderRadius: 5,
        padding: 20,
        width: 620
      },
      adSpace: {
        background: '#fff',
        border: '1px solid #a3d9e7',
        borderRadius: 5,
        padding: 20,
        marginLeft: 30,
        width: 300
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
      <div style={styles.body}>
        <div style={styles.couponList}>
          <CouponList
            geo={this.state.zipCode}
            coupons={this.state.listings}
            onGeoChange={geo => this.updateGeo(geo)}
            currentPage={currentPage}
            onPrevClick={page => this.handlePrevClick(page)}
            onNextClick={page => this.handleNextClick(page)} />
        </div>
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
      currentPage: 1
    });
  }

  fetchListings() {
    const currentPage = parseInt(this.props.location.query.p || 1);
    fetch(`https://apidev.valpak.com/pub/offers/valpak/geo/${this.state.zipCode}/listings?limit=6&offset=${currentPage}`)
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
