import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';


import Fingerprint from './Fingerprint';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>prueba</Text>
      <Fingerprint jsKey="js-test-key" />
    </View>
  );
}

/*
<Text>Open up App.js to start working on your app!</Text>
      <Text>jajaja</Text>
      <DeviceFingerPrintExample />
      <Text>jejeje</Text>
      <MyWebComponent />
      <Text>jijiji</Text>
      <StatusBar style="auto" />
*/

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#ccc',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
