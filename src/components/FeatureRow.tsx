import {ScrollView, Text, View} from 'react-native';
import {
  ArrowDownLeftIcon,
  ArrowRightIcon,
} from 'react-native-heroicons/outline';
import RestaurantCards from '@components/RestaurantCards';
export interface FeatureRowProps {
  id: string;
  title: string;
  description: string;
}
const FeatureRow = ({id, title, description}: FeatureRowProps) => {
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
        <RestaurantCards
          id={123}
          imageUrl="https://thumbs.dreamstime.com/z/susi-29401740.jpg"
          title="Yo! Sushi"
          rateing={4.5}
          genre="Japanese"
          address="123 Fake Street"
          short_description="Sushi, Japanese, Asian, Healthy, Vegetarian Friendly, Vegan Options"
          dishes={[]}
          long={123}
          lat={123}
        />
        <RestaurantCards
          id={123}
          imageUrl="https://thumbs.dreamstime.com/z/susi-29401740.jpg"
          title="Yo! Sushi"
          rateing={4.5}
          genre="Japanese"
          address="123 Fake Street"
          short_description="Sushi, Japanese, Asian, Healthy, Vegetarian Friendly, Vegan Options"
          dishes={[]}
          long={123}
          lat={123}
        />
        <RestaurantCards
          id={123}
          imageUrl="https://thumbs.dreamstime.com/z/susi-29401740.jpg"
          title="Yo! Sushi"
          rateing={4.5}
          genre="Japanese"
          address="123 Fake Street"
          short_description="Sushi, Japanese, Asian, Healthy, Vegetarian Friendly, Vegan Options"
          dishes={[]}
          long={123}
          lat={123}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
