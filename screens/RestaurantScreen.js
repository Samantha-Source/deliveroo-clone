import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity';
import { ArrowLeftIcon, StarIcon } from 'react-native-heroicons/outline';


const RestaurantScreen = () => {

    const navigation = useNavigation();
    const { params: { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat }} = useRoute();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

  return (
    <ScrollView>
      <View className='relative'>
        <Image
            source={{
                uri: urlFor(imgUrl).url(),
            }}
            className='w-full h-56 bg-gray-300 p-4'
        />
        <TouchableOpacity className='absolute top-10 left-5 bg-gray-100 rounded-full' onPress={navigation.goBack}>
            <ArrowLeftIcon size={30} color='#00CCBB' />
        </TouchableOpacity>
      </View>

      <View className='bg-white'>
        <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-row space-x-2 my-1'>
                <View className='flex-row items-center space-x-1'>
                    <StarIcon color='green' opacity={.5} size={22} />
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-green-500'>{rating}</Text> ~ {genre}
                    </Text>
                </View>

            </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen
