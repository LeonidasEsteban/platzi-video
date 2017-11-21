import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Categories categories={this.props.data.categories} />
      </HomeLayout>
    )
  }
}

export default Home
