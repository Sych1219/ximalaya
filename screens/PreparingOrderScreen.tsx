import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@components/RestaurantCards';
const PreparingOrderScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DeliveryScreen');
    }, 1000);
  }, []);

  return (
    <SafeAreaView className={'bg-[#00CCBB] flex-1 justify-center items-center'}>
      <Animatable.Image
        source={require('../src/assets/delivery.gif')}
        animation={'slideInUp'}
        iterationCount={1}
        className={'h-96 w-96'}
      />

      <Animatable.Text
        animation={'slideInUp'}
        iterationCount={1}
        className={'text-lg my-10 text-white font-bold text-center'}>
        Waiting for Restaurant to confirm your order!
      </Animatable.Text>

      <Progress.Circle
        size={60}
        indeterminate={true}
        color="white"
        fill="green"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
