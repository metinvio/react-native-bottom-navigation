import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import theme from 'config/theme';

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.global}>
      <View style={styles.input_container}>
        <TextInput style={styles.input} placeholder={'Search'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  global: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  input: {
    width: '95%',
    alignSelf: 'center',
    paddingStart: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.app2,
  },
  input_container: {
    width: '95%',
    height: 60,
    alignSelf: 'center',
    borderBottomColor: theme.colors.lite_gray,
    marginBottom: 20,
  },
});

export default SearchScreen;
