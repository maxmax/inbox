import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import * as InboxActions from "./actions";

import Section from './components/Section';
import Items from './components/Items';
import Loader from './components/Loader';

import Searchbar from './components/Searchbar';
import Selectbar from './components/Selectbar';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      active: 0,
      term: ''
    };
    this.resetData = this.resetData.bind(this);
  }

  // pre-render logic
  componentWillMount() {
    console.log("APP mounted");
  }

  resetData() {
    this.setState({
      data: []
    });
  }

  updateData(config) {
    this.setState(config);
  }

  render() {

    const { inbox, words } = this.props;

    //test on active apis
    if (!inbox.length) {
      return (
        <Loader />
      );
    }

    return (
      <div className="App">
        <div className="container">
          <Section>
            <section>
              <h2>Inbox</h2>
              <Items data={inbox} />
            </section>
            <section>
              <h2>Filter</h2>
              <div className="filters">
                <Searchbar
                  term={this.state.term}
                  data={inbox}
                  update={this.updateData.bind(this)}
                />
                <Selectbar
                  term={this.state.term}
                  data={inbox}
                  update={this.updateData.bind(this)}
                  items={words}
                />
                {this.state.data[0] ? (
                  <button
                    className="filter"
                    onClick={this.resetData}
                  >
                    Reset
                  </button>
                ) : null}
              </div>
            </section>
            <section>
              <h2>Result</h2>
              <Items
                data={this.state.data}
                empty="Not been selected." />
            </section>
          </Section>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { inbox, inwords } = state;
  return {
    inbox: inbox.inbox || [],
    words: inwords.words || [],
  };
}

export default connect(mapStateToProps)(App);
