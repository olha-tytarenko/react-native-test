import React, { Component } from 'react';
import { View, Button, FlatList, ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import {styles} from './styles';

const UserLogin = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const ListHeader = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  text-align: center;
`;

type Props = {};
export class HomeScreen extends Component<Props> {
  componentDidMount() {
    this.props.fetchGithubUsers();
  }

  handleRepositoriesButtonClick = (user) => {
    this.props.setCurrentUser(user);
    this.props.fetchUserRepositories(user.login);
    this.props.navigation.navigate("Repositories");
  }
 
  renderItem = (item) => (
    <View style={styles.container}>
      <UserLogin>{item.login}</UserLogin>
      <View style={styles.container}>
        <Button
          title="Repo"
          onPress={() => this.handleRepositoriesButtonClick(item)}
        />
        <Button
          title="Gists"
          onPress={() => this.props.navigation.navigate("Gists")}
        />
      </View>
    </View>
  )

  render() {
    const { users } = this.props;

    return (
      <View>
        <FlatList 
          data={users}
          renderItem={({item}) => this.renderItem(item)}
          ListEmptyComponent={
            <ActivityIndicator size="large" color="#0000ff" />
          }
          ListHeaderComponent={
            <ListHeader>Users list</ListHeader>
          }
        />
      </View>
    );
  }
}
