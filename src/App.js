import React from 'react';
import {StatusBar, View} from 'react-native';
import Navigation from './Navigation/Navigation';
function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Navigation />
    </View>
  );
}

export default App;
