import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
    >
        {/* Category card */}
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="test 1" />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="test 2" />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test 3' />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="test 4" />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="test 5" />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="test 6" />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="test 7" />

    </ScrollView>
  )
}

export default Categories;