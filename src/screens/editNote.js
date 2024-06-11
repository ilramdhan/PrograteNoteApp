import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/customButton';

const EditNote = ({ setCurrentPage }) => (
  <View>
    <Text>Ubah Note</Text>
    <CustomButton
      backgroundColor="#DDD"
      color="#203239"
      text="Kembali ke Home"
      width="100%"
      onPress={() => setCurrentPage('home')}
    />
  </View>
);

export default EditNote;
