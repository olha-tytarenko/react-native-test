import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from '../../components/header/header';

type Props = {};
export default class RepositoriesScreen extends Component<Props> {
  render() {
    return (
      <View>
        <Header title="Repositories" />
      </View>
    );
  }
}
