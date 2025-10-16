import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        headerStyle: { backgroundColor: '#033260' },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#033260' }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'TechHouse',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              size={30}
              color={'#fff'}
            />
          ),
          headerLeft: () => <></>
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: 'About Us',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'information' : 'information-outline'}
              size={30}
              color={'#fff'}
            />
          )
        }}
      />
    </Tabs>
  );
}

