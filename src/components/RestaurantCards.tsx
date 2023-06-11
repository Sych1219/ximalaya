import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MapPinIcon, StarIcon} from 'react-native-heroicons/outline';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DishRowProps} from '@components/DishRow';

export interface RestaurantCardsProps {
  id: number;
  imageUrl: string;
  title: string;
  rateing: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: DishRowProps[];
  long: number;
  lat: number;
}
export type RootStackParamList = {
  Home: undefined;
  Restaurant: RestaurantCardsProps;
};

const RestaurantCards = ({
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
}: RestaurantCardsProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  // const navigation = useNavigation();
  return (
    <TouchableOpacity
      className={'bg-white mr-3 shadow'}
      onPress={() => {
        navigation.navigate('Restaurant', {
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
        });
      }}>
      <Image source={{uri: imageUrl}} className="h-36 w-64 rounded-sm" />

      <View className="px-3 pb-4">
        <Text>{title}</Text>
        <View className={'flex-row items-center space-x-1'}>
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className={'text-xs text-gray-500'}>
            <Text className={'text-green-500'}>{rateing}</Text> {genre}
          </Text>
        </View>

        <View className={'flex-row items-center space-x-1'}>
          <MapPinIcon color="gray" opacity={0.5} size={22} />
          <Text className={'text-xs text-gray-500'}>Nearby {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCards;
