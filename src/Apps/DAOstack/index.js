/* eslint-disable import/prefer-default-export */

import React, { Component, Fragment } from 'react';
import { View, SafeAreaView } from 'react-native'
import { ApolloProvider } from 'react-apollo';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { ApolloClientConfig as client } from './Config';
// eslint-disable-next-line no-unused-vars

import {
  DAOstack,
  NewProposal,
  Proposals,
  ReputationRequest,
  RequestComplete,
  DetailedProposal
} from './Screens';

const App = createStackNavigator({
  "DAOstack": DAOstack,
  "DAOstack/Home": Proposals,
  "DAOstack/NewProposal": NewProposal,
  "DAOstack/ReputationRequest": ReputationRequest,
  "DAOstack/RequestComplete": RequestComplete,
  "DAOstack/DetailedProposal": DetailedProposal,

});

App.navigationOptions = {
  // Hide the header from AppNavigator stack
  header: null,
};

class DAOstackContainer extends Component {
  static router = {
    ...App.router,
    getStateForAction: (action, lastState) => {
      // check for custom actions and return a different navigation state.
      return App.router.getStateForAction(action, lastState);
    },
  };

  render() {
    return (
      <Fragment>
        <SafeAreaView></SafeAreaView>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <ApolloProvider client={client}>
              <App
                navigation={this.props.navigation}
              />
            </ApolloProvider>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default createAppContainer(DAOstackContainer);
