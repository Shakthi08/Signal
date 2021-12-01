import * as React from 'react';

import { Text, Image, View, StyleSheet, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItems/ChatRoomItem';
import ChatRoomsData from '../assets/dummy/ChatRooms';



export default function TabOneScreen() {
  return (
      <View style={styles.page}>
        <FlatList 
          data={ChatRoomsData}
          renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
          showsVerticalScrollIndicator={true}
         />
         
      </View>  
   );
}


const styles  = StyleSheet.create({
  page:{
    backgroundColor: 'white',
    flex: 1,
  },
});