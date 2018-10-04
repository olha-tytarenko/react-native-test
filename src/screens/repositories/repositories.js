import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import styled from 'styled-components';


const ListHeader = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  text-align: center;
`;

type Props = {};
export class RepositoriesScreen extends Component<Props> {
  componentWillUnmount() {
    this.props.cleanUserRepositories();
  }

  renderItem = (item) => (
    <Text>{item.name}</Text>
  )

  render() {
    console.log(this.props);
    
    return (
      <View>
        <FlatList 
          data={this.props.repositories}
          renderItem={({item}) => this.renderItem(item)}
          ListEmptyComponent={
            <ActivityIndicator size="large" color="#0000ff" />
          }
          ListHeaderComponent={
            <ListHeader>{this.props.currentUser.login} repositories</ListHeader>
          }
        />
      </View>
    );
  }
}
