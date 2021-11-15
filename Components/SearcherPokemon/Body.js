import React from 'react';
import { VStack } from 'native-base'
import Searcher from './Searcher';

export default class Body extends React.Component {
  render() {
    return (
      <VStack >
        <Searcher />
      </VStack>
    );
  }
}

