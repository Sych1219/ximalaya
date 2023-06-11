import {Image, Text, TouchableOpacity, View} from 'react-native';
import Currency from 'react-currency-formatter';
import {useState} from 'react';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/outline';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  selectBasket,
  selectBasketItemWithId,
} from '../../features/basketSlice';
import {RootState} from '../../store';
export interface DishRowProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}
const DishRow = ({id, name, description, price, image}: DishRowProps) => {
  const [isPress, setIsPress] = useState(false);
  const items = useSelector((state: RootState) =>
    selectBasketItemWithId(state, id),
  );

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket({id, name, description, price, image}));
  };

  const removeItemFromBasket = () => {
    if (items.length <= 0) {
      return;
    }
    dispatch(removeFromBasket({id, name, description, price, image}));
  };

  return (
    <TouchableOpacity
      onPress={() => {
        setIsPress(!isPress);
      }}
      className={`bg-white border p-4 border-gray-200 ${
        isPress && 'border-b-0'
      }`}>
      <View className={'flex-row'}>
        <View className={'flex-1 pr-2'}>
          <Text className={'text-lg mb-1'}>{name}</Text>
          <Text className={'text-gray-400'}> {description}</Text>
          <Text className={'text-gray-400 mt-2'}>
            <Currency quantity={price} currency="GBP" />
          </Text>
        </View>

        <View>
          <Image
            style={{borderWidth: 1, borderColor: '#F3F3F4'}}
            source={{uri: image}}
            className={'h-20 w-20 bg-gray-300 p-4'}
          />
        </View>
      </View>

      {isPress && (
        <View className={'bg-white px-1 pt-1'}>
          <View className={'flex-row items-center space-x-2 pb-3'}>
            <TouchableOpacity>
              <MinusCircleIcon
                disabled={!items.length}
                onPress={removeItemFromBasket}
                size={24}
                color={items.length > 0 ? '#00CCBB' : 'gray'}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <PlusCircleIcon
              onPress={addItemToBasket}
              size={24}
              color={'#00CCBB'}
            />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default DishRow;
