import React, { Component } from 'react';
import Coupon from './Coupon';

class ListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {}
    };
  }

  componentDidMount() {
    this.fetchListing();
  }

  render() {
    // console.log(this.state.listing);
    // console.log(this.props.location);
    const styles = {

    };

    return (
      <div>
        <Coupon print='true' coupon={this.state.listing} />
      </div>
    );
  }

  fetchListing() {
    fetch(`https://apidev.valpak.com/pub/offers/valpak/listings/${this.props.params.cid}`)
      .then(response => {
        response.json().then(json => {
          this.setState({
            listing: json[0]
          });
        });
      });
  }

}

export default ListingPage;
