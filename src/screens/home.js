import React from 'react';
import { FlatList, StyleSheet, View, Text, Alert } from 'react-native';
import CustomButton from '../components/customButton';
//import NoteCard from './NoteCard';

const NoteCard = ({ item, setCurrentPage, deleteNote, onPressReadMore, onPressEdit }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardDesc} numberOfLines={3}>
      {item.desc}
    </Text>
    {item.desc.length > 100 && (
      <Text style={styles.readMore} onPress={() => onPressReadMore(item)}>
        Read More
      </Text>
    )}
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Edit"
        fontSize={12}
        width={100}
        onPress={() => onPressEdit(item)}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Delete"
        fontSize={12}
        width={100}
        onPress={() => deleteNote(item.id)}
      />
    </View>
  </View>
);

const Home = ({ noteList, setCurrentPage, deleteNote, setNoteToEdit }) => {

  const handleDeleteNote = (noteId) => {
      Alert.alert(
        'Confirmation',
        'Are you sure you want to delete this note?',
        [
          {
            text: 'No',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => deleteNote(noteId),
          },
        ],
        { cancelable: true }
      );
    };

  const handleReadMore = (item) => {
    Alert.alert(item.title, item.desc);
  };

  const handleEdit = (item) => {
    setNoteToEdit(item);
    setCurrentPage('edit');
  };

  return (
    <View style={styles.container}>
      <CustomButton
        backgroundColor="#247881"
        color="#fff"
        text="Add Note"
        width="100%"
        onPress={() => setCurrentPage('add')}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={noteList}
        renderItem={({ item }) => (
          <NoteCard
            item={item}
            setCurrentPage={setCurrentPage}
            deleteNote={handleDeleteNote}
            onPressReadMore={handleReadMore}
            onPressEdit={handleEdit} // Mengirimkan fungsi handleEdit
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  list: {
    paddingVertical: 10,
  },
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#203239',
    fontSize: 18,
    marginBottom: 5,
  },
  cardDesc: {
    color: '#6b6b6b',
    fontSize: 14,
    marginBottom: 5,
  },
  readMore: {
    color: '#247881',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home;
