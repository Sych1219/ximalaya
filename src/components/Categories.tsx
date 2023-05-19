import {ScrollView} from 'react-native';
import CategoryCard, {CategoryCardProps} from '@components/CategoryCard';
import {useEffect, useState} from 'react';

const Categories = () => {
  const [categoryCards, setCategoryCards] = useState<CategoryCardProps[]>();
  useEffect(() => {
    fetch('http://localhost:3000/categoryCards')
      .then(async response => {
        const data = await response.json();
        console.log('category cards data', data);
        setCategoryCards(data);
      })
      .catch(error => {
        console.log('error vdffd', error);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {categoryCards?.map(categoryCard => (
        <CategoryCard
          title={categoryCard.title}
          imageUrl={categoryCard.imageUrl}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
