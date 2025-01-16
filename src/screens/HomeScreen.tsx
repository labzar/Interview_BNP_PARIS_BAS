import React, {useMemo} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';

export const HomeScreen = ({navigation}) => {
  const meetingRooms = useMemo(() => {
    return [
      {
        id: '07993a8f-2df6-4d48-a53b-6c41ca3af243',
        name: 'Louis Pasteur',
        status: 'Available',
        position: 'Z-NR-01',
        capacity: 4,
      },
      {
        id: 'fad81356-7a97-469f-a606-2e8e4ab83a25',
        name: 'Archimède',
        status: 'Unavailable',
        position: 'Z-OU-03',
        capacity: 6,
      },
      {
        id: '7a357da8-d296-42f1-ad34-129592402c00',
        name: 'Nicolas Copernic',
        status: 'FreeSoon',
        position: 'Z-SOU-05',
        capacity: 6,
      },
      {
        id: '06492352-3a55-48ac-b601-cca56e0c0b17',
        name: 'Marie Curie',
        status: 'Available',
        position: 'Z-NR-04',
        capacity: 4,
      },
    ];
  }, []);

  const meetingRoomsAvailable = meetingRooms.filter(
    item => item.status === 'Available',
  );
  const meetingRoomsBiento = meetingRooms.filter(
    item => item.status === 'FreeSoon',
  );
  const meetingRoomsOccuped = meetingRooms.filter(
    item => item.status === 'Unavailable',
  );

  const renderItemCompo = ({item}: any) => {
    return (
      <View>
        <Text
          style={{
            color:
              item.status === 'Available'
                ? 'green'
                : item.status === 'FreeSoon'
                ? 'pink'
                : 'red',
          }}>
          {item.name}
        </Text>
        <Text>{item.position}</Text>
        <Text>{item.capacity}</Text>
        <Button
          disabled={item.status === 'Unavailable' || item.status === 'FreeSoon'}
          title="Reserver"
          onPress={() => {
            navigation.navigate('Reservation', item);
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          ...meetingRoomsAvailable,
          ...meetingRoomsBiento,
          ...meetingRoomsOccuped,
        ]}
        renderItem={renderItemCompo}
      />
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
