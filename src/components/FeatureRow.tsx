import {ScrollView, Text, View} from 'react-native';
import {
  ArrowDownLeftIcon,
  ArrowRightIcon,
} from 'react-native-heroicons/outline';
import RestaurantCards, {
  RestaurantCardsProps,
} from '@components/RestaurantCards';
import {useEffect, useState} from 'react';
export interface FeatureRowProps {
  id: string;
  title: string;
  description: string;
}
const FeatureRow = ({id, title, description}: FeatureRowProps) => {
  const [restaurantCardsProps, setRestaurantCardsProps] = useState<
    RestaurantCardsProps[]
  >([]);

  useEffect(() => {
    fetch('http://localhost:3000/restaurantCards')
      .then(async response => {
        const data = await response.json();
        console.log('restaurant data', data);
        setRestaurantCardsProps(data);
      })
      .catch(error => {
        console.log('error restaurant data', error);
      });
  }, []);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text>{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal: 15}}
        showsHorizontalScrollIndicator={false}>
        {/*  ResturantCards*/}
        {restaurantCardsProps?.map(restaurantCard => (
          <RestaurantCards
            key={restaurantCard.id}
            id={restaurantCard.id}
            imageUrl={restaurantCard.imageUrl}
            title={restaurantCard.title}
            rateing={restaurantCard.rateing}
            genre={restaurantCard.genre}
            address={restaurantCard.address}
            short_description={restaurantCard.short_description}
            dishes={restaurantCard.dishes}
            long={restaurantCard.long}
            lat={restaurantCard.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
