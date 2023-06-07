import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import AndroidSafeArea from '../AndroidSafeArea';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
    MagnifyingGlassCircleIcon
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured"] {
            ...,
            restaurants[] -> {
              ...,
              dishes[]->,
            }
          }`).then(data => {
            setFeaturedCategories(data)
          })
    }, [])

  return (
    <SafeAreaView  className='bg-white pt-8'>
        {/* <Text className='text-red-500'> */}

            {/* Header */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image 
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                
                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-xl'>Currrent location
                        <ChevronDownIcon size={20} color='#00CCBB'/>
                    </Text>
                </View>

                <UserIcon size={35} color='#00CCBB' />
            </View> 

            {/* Search */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row flex-1 space-x-2 rounded bg-gray-200 p-3'>
                    <MagnifyingGlassIcon size={20} color='#00CCBB' />
                    <TextInput 
                    placeholder='Restaurants and cuisines'
                    keyboardType='default'
                    />
                </View>

                <AdjustmentsVerticalIcon size={35} color="#00CCBB" />
            </View>

            {/* Body */}
        <ScrollView className='bg-gray-100'
            contentContainerStyle={{
                paddingBottom: 100,
            }}
        >
            {/* Categories */}
            <Categories />

            {/* Featured rows */}
            <FeaturedRow 
                id="1"
                title='Featured'
                description='Promoted restaurants'
            />
            <FeaturedRow 
                id="2"
                title='Tasty Discounts'
                description="Everyone's enjoying these juicy discounts!"
            />
            <FeaturedRow 
                id="3"
                title='Offers near you'
                description='Support your local bussiness'
            />




            </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen;