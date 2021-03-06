//import libraries
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';
import TwitterButton from './TwitterButton';

const BookDetail = ({ record, onCheckOut, email, onReturn, onReserve, onUnreserve }) => {
  const { title, checkedOutBy, reservedBy } = record;
  const image = record.imageLinks.smallThumbnail.replace(/^http:\/\//i, 'https://');
  const author = record.authors[0];
  const {
    headerContentStyle,
    headerTextStyle,
    albumCoverStyle,
    notAvailableViewStyle,
    dueDateStyle,
  } = styles;

  /*
    This code calls and styles each individual book in the list
    and it is used in BookList to style the whole list
  */

  let action = '';
  let willShowDueDate;
  if (checkedOutBy === '' || typeof (checkedOutBy) === 'undefined') {
    action = (
      <Button
        whenClicked={() => onCheckOut(record)}
        colorButton="#0984e3"
      >
      {'CHECK OUT'}
      </Button>);
  } else if (checkedOutBy !== email) {
    if (reservedBy === '' || typeof (reservedBy) === 'undefined') {
      action = (
        <Button
          whenClicked={() => onReserve(record)}
          colorButton="#ff7675"
        >
          {'RESERVE BOOK'}
        </Button>
        );
    } else if (reservedBy === email) {
      action = (
        <Button
          whenClicked={() => onUnreserve(record)}
          colorButton="#ff7675"
        >
          {'UNRESERVE BOOK'}
        </Button>
        );
    } else {
      action = (
        <Button colorButton="#808e9b">
          {'NOT AVAILABLE'}
        </Button>
        );
    }
  } else {
    action = (
      <View style={notAvailableViewStyle}>
        <Button colorButton="#00cec9" whenClicked={() => onReturn(record)} >
          {'RETURN BOOK'}
        </Button>
      </View>
      );
  }
  if (checkedOutBy === email) {
      const dueDate = new Date(record.dueDate);
      const today = new Date();
      if (today >= dueDate) {
        willShowDueDate = (
          <Text style={dueDateStyle}>Past Due!</Text>
        );
      } else {
        willShowDueDate = (
          <View>
            <Text style={dueDateStyle}>Due by {dueDate.toDateString()}</Text>
            <TwitterButton />
          </View>
        );
      }
  } else if (checkedOutBy !== '' && typeof (checkedOutBy) !== 'undefined') {
      willShowDueDate = (
        <Text style={dueDateStyle}>Due back by {(new Date(record.dueDate)).toDateString()}</Text>
      );
  }
  return (
    <Card>
    <CardItem>
      <Image
        style={albumCoverStyle}
        source={{ uri: image }}
      />
      <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>By {author}</Text>
          {willShowDueDate}
      </View>
    </CardItem>

    <CardItem>
      {action}
    </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 20,
    flex: 1,
    //backgroundColor: '#d2dae2'
  },
  headerTextStyle: {
    fontSize: 20,
    flexWrap: 'wrap',
    fontFamily: 'Heiti SC'
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumCoverStyle: {
    height: 150,
    width: 100,
    marginLeft: 10
  },
  notAvailableStyle: {
    alignSelf: 'center',
    color: '#999999',
    fontSize: 16,
    fontWeight: '600',
  },
  notAvailableViewStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    //borderColor: '#4dff88'
  },
  dueDateStyle: {
    paddingTop: 10,
    //textDecorationLine: 'underline'
  }
};

export default BookDetail;
