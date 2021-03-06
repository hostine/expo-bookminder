//Creating header Component

//Import libraries
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  /*
    Header is what's placed at the top of every screen that lists the current
    page and has the menu button which opens the menu tab
  */

  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={() => props.navigation.navigate('DrawerOpen')}>
        <View style={styles.leftContainer}>
          <Image
            style={styles.imageStyle}
            source={require('./Pictures/MenuIcon.png')}
          />
        </View>
        <View style={styles.rightContainer}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

//Styling
const styles = {
  viewStyle: {
    backgroundColor: '#E1E1E1',
    height: 70,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 25
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginLeft: 25
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  imageStyle: {
    height: 35,
    width: 40
  }
};

//Make component available to other areas
export default Header;
