import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { primary } from '../styles/general';
import { items } from '../item';

export default function MenuItem({ item, setFavourite, index, addtoCart }) {

    const [favouriteitem, setFavouriteItem] = useState(item.favourite)
    return (
        <View style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            width: '48%',
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end'
            }}>
                {!favouriteitem ?

                    <MaterialIcons onPress={() => { setFavouriteItem(!favouriteitem) }} name="favorite-outline" size={24} color="black" />
                    :
                    <MaterialIcons onPress={() => { setFavouriteItem(!favouriteitem) }} name="favorite" size={24} color="#D91442" />
                }
            </View>
            <View style={{ alignSelf: 'center', height: 100, width: 100, }}>
                <Image style={{
                    height: 100,
                    width: 100,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                    // borderRadius: 150,
                }} source={item.image} alt={item.name} />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 10,
                alignItems: 'center',
            }}>

                <Text style={{ fontSize: 18, fontWeight: 500, }}>
                    {item.name.substring(0, 12) + '...'}
                </Text>
                <Text style={{ fontSize: 20, color: primary }}>
                    {item.price}
                </Text>
            </View>

            <View >
                <Pressable
                    onPress={() => {
                        addtoCart(index)
                    }}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        borderRadius: 20,
                        marginBottom: 10,
                        backgroundColor: primary,
                    }}>
                    <SimpleLineIcons name="handbag" size={20} color="white" />
                    <Text style={{ color: 'white', fontSize: 18, }}>
                        Add to cart
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}
