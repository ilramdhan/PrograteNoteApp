import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

const CustomTextInput = ({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
}) => {
  return (
    <View style={styles.textInputWrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={[styles.input, { height: numberOfLines * 25 }]}
        placeholder={label}
        onChangeText={onChange}
        defaultValue={text}
        textAlignVertical="top"
        scrollEnabled={multiline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputWrapper: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#203239',
    fontWeight: '500',
  },
  input: {
    borderWidth: 2,
    borderColor: '#DDD',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default CustomTextInput;
