import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { urlFor } from '../sanity';

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='relative mr-2'>
        <Image source={{
            uri: urlFor(imgUrl).width(200).url(),
        }}
        className='h-20 w-20 rounded'
        />
      <Text style={{position: 'absolute', top: 1, left: 1, color: 'yellow',  fontWeight: 'bold'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard