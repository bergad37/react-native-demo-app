import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerTitle: 'TechHouse',
            headerShown: false,
            headerLeft: () => <></>
          }}
        />
        <Stack.Screen name="+not-found" options={{}} />
      </Stack>
    </>
  );
}
