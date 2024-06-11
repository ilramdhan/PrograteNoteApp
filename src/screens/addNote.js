import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const AddNote = ({ setCurrentPage, addNote }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.pageTitle}>Add New Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Title"
        placeholder="Title"
        numberOfLines={2}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Description"
        placeholder="Description"
        multiline
        numberOfLines={6}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Save Note"
          width="100%"
          onPress={() => {
            addNote(title, desc);
            setCurrentPage('home');
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Cancel "
          width="100%"
          onPress={() => setCurrentPage('home')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#203239',
    marginBottom: 20,
  },
  spacerTop: {
    marginTop: 20,
  },
});

export default AddNote;
