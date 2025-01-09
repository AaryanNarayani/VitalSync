import { View, Text, Button } from 'react-native';
import React from 'react';

export default function Home({ navigation }: { navigation: any }) {
  return (
    <View className='bg-white h-full w-full'>
      <Text>Home</Text>
      <Button 
        title="Go to Signup" 
        onPress={() => navigation.navigate('Signup')}></Button>
    </View>
  );
}
