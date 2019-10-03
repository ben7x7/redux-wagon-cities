import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import City from '../containers/city';

import { setCities } from '../actions';


class CityList extends Component {

  componentWillMount() {
// TODO: dispatch an action to load cities! }
    this.props.setCities();
  }

  render() {
    return(
      <div className="cities">
        {this.props.cities.map((city, index) => <City city={city} tabIndex={index} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
 );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
