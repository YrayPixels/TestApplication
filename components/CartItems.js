import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { primary } from '../styles/general';

export default function CartItems({ item, index, navigation }) {
    const [quantity, setQuantity] = useState(item.quantity)
    return (
        <View
            style={{
                backgroundColor: 'white',
                borderRadius: 10,
                flexDirection: 'row',
                padding: 10,
                paddingHorizontal: 15,

                marginBottom: 10,
                alignSelf: 'center',
                justifyContent: 'space-between',
                width: '98%',
            }}>
            <Pressable
                onPress={() => {
                    navigation.navigate('item', { item: index })
                }}
                style={{ flex: 1, alignSelf: 'center', height: 100, width: 100, }}>
                <Image style={{
                    height: 100,
                    width: 100,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                    // borderRadius: 150,
                }} source={item.image} alt={item.name} />
            </Pressable>
            <View style={{
                flex: 2,
                gap: 10,
                justifyContent: 'flex-start',
                marginBottom: 10,
                alignItems: 'flex-start',
            }}>

                <Text style={{ fontSize: 18, fontWeight: 500, }}>
                    {item.name}
                </Text>
                <Text style={{ fontSize: 20, color: primary, fontWeight: 'bold', }}>
                    £{item.price}
                </Text>
                <Pressable>
                    <AntDesign name="delete" size={24} color="black" />
                </Pressable>
            </View>

            <View>
                <Pressable style={{ flex: 1 }} onPress={() => { quantity > 1 && setQuantity(quantity - 1) }}>
                    <AntDesign name="minus" size={24} color="black" />
                </Pressable>
                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 22 }}>
                        {quantity}
                    </Text>
                </View>

                <Pressable onPress={() => { setQuantity(quantity + 1) }} style={{ flex: 1 }}>
                    <AntDesign name="plus" size={24} color="black" />
                </Pressable>
            </View>

        </View>
    )
}
