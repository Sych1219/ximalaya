import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import {MagnifyingGlassIcon} from 'react-native-heroicons/mini';
import Categories from '@components/Categories';
import FeatureRow, {FeatureRowProps} from '@components/FeatureRow';

export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [featureCategories, setFeatureCategories] = useState<FeatureRowProps[]>(
    [],
  );

  useEffect(() => {
    fetch('http://localhost:3000/featureRows')
      .then(async response => {
        const data = await response.json();
        console.log('data', data);
        setFeatureCategories(data);
      })
      .catch(error => {
        console.log('error vdffd', error);
      });
  }, []);

  return (
    <SafeAreaView className={'bg-white pt-5'}>
      {/*header*/}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{uri: 'https://links.papareact.com/wru'}}
          className="h-7 w-7 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">deliver now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/*search*/}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder={'Restaurants and cuisines'}
            keyboardType={'default'}
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/*body*/}
      <ScrollView>
        {/*categories*/}
        <Categories />
        {/*  feature rows */}
        {featureCategories?.map(category => (
          <FeatureRow
            key={category.id}
            title={category.title}
            description={category.description}
            id={category.id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
