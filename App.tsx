import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

function App(): Element {
  return (
    <SafeAreaView>
      {/*// @ts-ignore*/}
      <View>
        <Text>Test</Text>
        {/*// @ts-ignore*/}
      </View>
    </SafeAreaView>
  );
}

export default App;
