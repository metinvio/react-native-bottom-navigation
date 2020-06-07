import React from 'react';
import {View, Text, StyleSheet, Button, StatusBar} from 'react-native';

import theme from 'config/theme';

const OnBoarding = ({
  route: {
    params: {callback},
  },
}) => {
  return (
    <>
      <StatusBar backgroundColor={theme.colors.black} />
      <View style={styles.body}>
        <View style={styles.motivationContainer}>
          <Text style={styles.motivation}>
            Your <Text style={styles.marked}> TOMORROW </Text> is created {'\n'}
            by what you do {'\n'} <Text style={styles.marked}>TODAY!</Text>{' '}
            {'\n'}
            <Text style={styles.motivationSub}>tomorrow</Text>
          </Text>
          <Button onPress={callback} title="GOT IT">
            GOT IT!
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  motivationContainer: {
    paddingHorizontal: 20,
  },
  motivation: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '600',
    color: '#ffffff75',
    textAlign: 'center',
  },
  motivationSub: {
    color: theme.colors.white,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  marked: {
    color: theme.colors.white,
  },
});

export default OnBoarding;
