/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
// import Te from '@components/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View className="flex-1 items-center justify-center bg-amber-300 ">
    //   <Text style={{color: 'black'}}>{Config.API_URL}</Text>
    //   {/*<Te></Te>*/}
    //   <Text>ddd</Text>
    // </View>
    // <SafeAreaView>
    //   <Text>ddd</Text>
    //   <Text className="text-red-300">{Config.API_URL}</Text>
    //   <Text>ddd</Text>
    //   <HomeScreen />
    // </SafeAreaView>
  );
}

export default App;
