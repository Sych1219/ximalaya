import {Text, TouchableOpacity, View} from 'react-native';
import {selectBasket, selectBasketTotal} from '../../features/basketSlice';
import {useSelector} from 'react-redux';
import Currency from 'react-currency-formatter';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@components/RestaurantCards';

const BasketIcon = () => {
  const items = useSelector(selectBasket);
  // const navigation = useNavigation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  const basketTotal = useSelector(selectBasketTotal);
  if (!items.length) {
    return null;
  }
  return (
    <View className={'absolute bottom-10 w-full z-50'}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className={
          'mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1'
        }>
        <Text
          className={
            'text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'
          }>
          {items.length}
        </Text>
        <Text
          className={'flex-1 text-white font-extrabold text-lg text-center'}>
          🛒View Basket
        </Text>

        <Text className={'text-lg text-white font-extrabold'}>
          <Currency quantity={basketTotal} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
