import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import styled from 'styled-components';


const ListHeader = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  text-align: center;
`;

type Props = {};
export class RepositoriesScreen extends Component<Props> {
  state = {
    isRepositoriesListEmpty: true,
  }

  componentWillUnmount() {
    this.props.cleanUserData();
  }

  static getDerivedStateFromProps(props) {
    return {
      isRepositoriesListEmpty: !props.data.length
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  renderItem = (item) => (
    <Text>{item.name}</Text>
  )

  render() {
    const isLoaderShown = !this.props.isDataLoaded && this.state.isRepositoriesListEmpty;

    return (
      <View>
        <FlatList 
          data={this.props.data}
          renderItem={({item}) => this.renderItem(item)}
          ListEmptyComponent={
            isLoaderShown ?
              <ActivityIndicator size="large" color="#0000ff" /> :
              <Text>This user does not have any repositories</Text>
          }
          ListHeaderComponent={
            <ListHeader>{this.props.currentUser.login} repositories</ListHeader>
          }
        />
      </View>
    );
  }
}
