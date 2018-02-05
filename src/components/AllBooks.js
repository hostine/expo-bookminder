import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import BookList from './BookList';
import MenuButton from './Buttons/MenuButton';

class AllBooks extends Component {
  static navigationOptions = {
    tabBarLabel: 'All Books',
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'All Books'} />
        <BookList
          userName={'*'}
        />

        <MenuButton
          colorButton="#FFF"
          whenClicked={() => this.props.navigation.navigate('DrawerOpen')}
          title="Menu"
        >
          Menu
        </MenuButton>
      </View>
    );
  }
}


export default AllBooks;
