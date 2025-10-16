import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={myStyles.container}>
      <Text style={myStyles.text}>Hello new testing!</Text>
    </View>
  );
}

export const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: { color: '#ffff' },
  button: {
    margin: 2,
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#ffff'
  }
});
