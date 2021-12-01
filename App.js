import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import MusicPlayer from './src/components/MusicPlayer';

const App = () => {
  return (
    <View style={styles.container}>
      <MusicPlayer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
