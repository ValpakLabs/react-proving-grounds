import React, { Component, PropTypes } from 'react';
import querystring from 'querystring';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      path: null,
      component: null
    };
  }

  getChildContext() {
    return {
      router: {
        push: function(_path) {
          window.history.pushState({}, null, _path);
          this.updateRouterState();
        }.bind(this)
      }
    };
  }

  componentDidMount() {
    window.addEventListener('popstate', e => {
      this.updateRouterState();
    });
    this.updateRouterState();
  }

  render() {
    const { component, path } = this.state;

    if (!component)
      return null;

    return React.createElement(component, {
      location: {
        query: this.state.query
      }
    });
  }

  getRoute() {
    const { pathname } = window.location;
    const route = this.props.routes.find(route => {
      return pathname === route.path;
    });
    return route;
  }

  getCurrentQuery() {
    return querystring.parse(window.location.search.replace(/^\?/, ''));
  }

  updateRouterState() {
    const { component, path } = this.getRoute();
    this.setState({
      query: this.getCurrentQuery(),
      component,
      path
    });
  }

}

Router.childContextTypes = {
  router: PropTypes.object
};

export default Router;
