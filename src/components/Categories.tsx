import {ScrollView} from 'react-native';
import CategoryCard from '@components/CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <CategoryCard
        title={'test1'}
        imageUrl={'https://links.papareact.com/wru'}
      />
      <CategoryCard
        title={'test'}
        imageUrl={'https://links.papareact.com/wru'}
      />
      <CategoryCard
        title={'test'}
        imageUrl={'https://links.papareact.com/2io'}
      />
      <CategoryCard
        title={'test'}
        imageUrl={'https://links.papareact.com/2io'}
      />
      <CategoryCard
        title={'test'}
        imageUrl={'https://links.papareact.com/2io'}
      />
      <CategoryCard
        title={'test'}
        imageUrl={'https://links.papareact.com/2io'}
      />
    </ScrollView>
  );
};

export default Categories;
