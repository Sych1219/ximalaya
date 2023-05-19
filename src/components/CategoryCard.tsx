import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export interface CategoryCardProps {
  title: string;
  imageUrl: string;
}
const CategoryCard = ({title, imageUrl}: CategoryCardProps) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{uri: imageUrl}} className={'h-20 w-20 rounded'} />
      <Text className="absolute bottom-1 left-1 text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
