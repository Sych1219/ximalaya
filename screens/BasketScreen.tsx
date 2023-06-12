import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  removeFromBasket,
  selectBasket,
  selectBasketTotal,
} from '../features/basketSlice';
import {selectRestaurant} from '../features/restaurantSlice';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import DishRow, {DishRowProps} from '@components/DishRow';
import {XCircleIcon} from 'react-native-heroicons/outline';
import Currency from 'react-currency-formatter';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@components/RestaurantCards';

interface GroupedItems {
  [key: string]: DishRowProps[];
}

// const BasketScreen = () => {
export default function BasketScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const resutrant = useSelector(selectRestaurant);
  const items = useSelector(selectBasket);
  const [groupedItems, setGroupedItems] = useState<GroupedItems>({});
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);

  useEffect(() => {
    const groupedItmes = items.reduce((res: GroupedItems, item) => {
      (res[item.id] = res[item.id] || []).push(item);
      return res;
    }, {});
    setGroupedItems(groupedItmes);
  }, [items]);

  return (
    <SafeAreaView className={'flex-1 bg-white'}>
      <View className={'flex-1 bg-gray-100'}>
        <View className={'p-5 border-b border-[#00CCBB] bg-white shadow-xs'}>
          <View>
            <Text className={'text-lg font-bold text-center'}>Your Basket</Text>
            <Text className={'text-center text-gray-400'}>
              {resutrant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className={'rounded-full bg-gray-100 absolute top-3 right-5'}>
            <XCircleIcon color={'#00CCBB'} size={30} />
          </TouchableOpacity>
        </View>

        <View
          className={'flex-row items-center space-x-4 px-4 py-3 bg-white my-5'}>
          <Image
            source={{uri: 'https://links.papareact.com/wru'}}
            className={'h-7 w-7 bg-gray-300 p-4 rounded-full'}
          />
          <Text className={'flex-1'}>Deliver in 50-70 mis</Text>
          <TouchableOpacity>
            <Text className={'text-[#00CCBB]'}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className={'divide-y divide-gray-200'}>
          {Object.entries(groupedItems).map(([key, items]) => (
            <View
              key={key}
              className={'flex-row items-center space-x-3 py-2 px-5 bg-white'}>
              <Text className={'text-[#00CCBB]'}>{items.length} x</Text>
              <Image
                className={'h-12 w-12 rounded-full'}
                source={{uri: items[0]?.image}}
              />
              <Text className={'flex-1'}>{items[0]?.name}</Text>
              <Text>
                <Currency quantity={items[0]?.price} currency="GBP" />
              </Text>

              <TouchableOpacity>
                <Text
                  className={'text-[#00CCBB] text-xs'}
                  onPress={() => dispatch(removeFromBasket({id: key}))}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className={'p-5 bg-white space-y-4'}>
          <View className={'flex-row justify-between'}>
            <Text className={'text-gray-400'}>Subtotal</Text>
            <Text>
              <Currency quantity={basketTotal} currency="GBP" />
            </Text>
          </View>

          <View className={'flex-row justify-between'}>
            <Text className={'text-gray-400'}>Delivery Fee</Text>
            <Text>
              <Currency quantity={5.99} currency="GBP" />
            </Text>
          </View>

          <View className={'flex-row justify-between'}>
            <Text className={'text-gray-400'}>Order Total</Text>
            <Text className={'font-extrabold'}>
              <Currency quantity={basketTotal + 5.99} currency="GBP" />
            </Text>
          </View>

          <TouchableOpacity
            className={'bg-[#00CCBB] py-2 rounded-md'}
            onPress={() => navigation.navigate('PreparingOrderScreen')}>
            <Text className={'text-center text-white font-bold text-lg'}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// export default BasketScreen;
