/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import {Provider} from 'react-redux';
import {store} from './store';
import BasketScreen from './screens/BasketScreen';
function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{presentation: 'modal', headerShown: false}}
          />
        </Stack.Navigator>
      </Provider>
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
