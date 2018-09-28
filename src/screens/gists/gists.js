import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from '../../components/header/header';

type Props = {};
export default class GistsScreen extends Component<Props> {
  render() {
    return (
      <View>
        <Header title="Gists" />
      </View>
    );
  }
}
