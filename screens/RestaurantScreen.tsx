import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '@components/RestaurantCards';
import React, {useEffect, useLayoutEffect} from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/mini';
import {
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/outline';
import DishRow from '@components/DishRow';
import BasketIcon from '@components/BasketIcon';
import {setRestaurant} from '../features/restaurantSlice';
import {useDispatch} from 'react-redux';
// restaurant
type RestaurantScreenRouteProp = RouteProp<RootStackParamList, 'Restaurant'>;
export default function RestaurantScreen() {
  const route = useRoute<RestaurantScreenRouteProp>();
  const {
    id,
    imageUrl,
    title,
    rateing,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = route.params;

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRestaurant(route.params));
  });

  console.log('dishes', dishes);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{uri: imageUrl}}
            className="w-full h-56 bg-gray-300  p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-10 left-2 p-2 bg-gray-100 rounded-full">
            <ArrowLeftIcon size={20} color="#00CCBB"></ArrowLeftIcon>
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-xs text-gray-500">{rateing}</Text> .(
                  {genre})
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">Nearby {address}</Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity
            className={
              'flex-row items-center space-x-2 p-4 border-y border-gray-300'
            }>
            <QuestionMarkCircleIcon color={'gray'} opacity={0.6} size={20} />
            <Text className={'pl-2 flex-1 text-md font-bold'}>
              Have a food allergy?
            </Text>
            <ChevronRightIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className={'pb-36'}>
          <Text className="px-4 pt-6 font-bold text-xl">Menu</Text>
          {/*Disrows*/}
          {dishes.map((dish, index) => (
            <DishRow
              key={index}
              id={dish.id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
