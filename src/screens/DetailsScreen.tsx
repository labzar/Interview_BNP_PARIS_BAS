import moment from 'moment';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export const DetailsScreen = ({navigation, route}) => {
  const params = route.params;
  let newDateObj = moment(Date()).format('HH:mm');

  return (
    <View style={styles.container}>
      <Text>{params.name}</Text>
      <Text>{'Date de debut : '}</Text>
      <Text>{newDateObj} </Text>
      <Button title="Valider reservation" onPress={() => navigation.goBack()} />
      <Button title="Annuler reservation" onPress={() => navigation.goBack()} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
