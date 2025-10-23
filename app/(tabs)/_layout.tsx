import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ' #033260',
        headerStyle: { backgroundColor: '#fff' },
        headerShadowVisible: false,
        headerTintColor: '#033260',
        tabBarStyle: { backgroundColor: '#fff' }
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
              color={'#033260'}
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
              color={'#033260'}
            />
          )
        }}
      />
    </Tabs>
  );
}

