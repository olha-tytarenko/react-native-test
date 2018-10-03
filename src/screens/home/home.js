import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

type Props = {};
export class HomeScreen extends Component<Props> {
  componentDidMount() {
    this.props.fetchGithubUsers();
  }

  render() {
    console.log(this.props.users);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Repositories"
          onPress={() => this.props.navigation.navigate('Repositories')}
        />
        <Button
          title="Go to Gists"
          onPress={() => this.props.navigation.navigate('Gists')}
        />
      </View>
    );
  }
}
