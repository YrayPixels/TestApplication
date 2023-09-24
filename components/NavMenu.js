import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons, MaterialIcons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { primary, secondary } from '../styles/general';
import { items } from '../item';

export default function NavMenu({ item, index }) {
    const [active, setActive] = useState('Home');
    // const [favouriteitem, setFavouriteItem] = useState(item.favourite)
    return (
        <View style={{
            backgroundColor: 'white',
            borderTopColor: secondary,
            borderTopWidth: 1,
            padding: 10,
            paddingHorizontal: 25,
            position: 'absolute',
            bottom: 0,
            width: '100%',
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Pressable onPress={() => { setActive('Home') }} style={{
                    alignItems: 'center',
                }}>
                    <AntDesign name="home" size={24} color={active == 'Home' ? primary : "black"} />
                    <Text style={active == 'Home' ? [styles.nav_text, { color: primary }] : [styles.nav_text]} >
                        Home
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => { setActive('Menu') }}
                    style={{
                        alignItems: 'center',
                    }}>
                    <Image style={{
                    }} source={require('../assets/heroicon.png')} tintColor={active == 'Menu' ? primary : "black"} />

                    <Text style={active == 'Menu' ? [styles.nav_text, { color: primary }] : [styles.nav_text]}
                    >
                        Menu
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => { setActive('Cart') }}
                    style={{
                        alignItems: 'center',
                    }}>
                    <SimpleLineIcons name="handbag" size={24} color={active == 'Cart' ? primary : "black"} />
                    <Text
                        style={active == 'Cart' ? [styles.nav_text, { color: primary }] : [styles.nav_text]}
                    >
                        Cart
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => { setActive('Account') }}
                    style={{
                        alignItems: 'center',
                    }}>
                    <Image style={{
                        height: 30,
                        width: 30,
                        borderRadius: 50,
                    }} source={require('../assets/images/prof2.jpeg')} />

                    <Text
                        style={active == 'Account' ? [styles.nav_text, { color: primary }] : [styles.nav_text]}
                    >
                        Account
                    </Text>
                </Pressable>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    nav_text: {
        fontSize: 18, fontWeight: 600, marginTop: 5,
    }
})