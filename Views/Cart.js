import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { Modal, Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from '../components/Header'
import NavMenu from '../components/NavMenu'
import { primary } from '../styles/general'
import CartItems from '../components/CartItems'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Cart({ route, navigation }) {
    const [cartItems, setCartItems] = useState('')
    let total = 0;
    const [message, setMessage] = useState('')
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('cartitems');
                if (value !== null) {
                    setCartItems(JSON.parse(value))
                } else {
                    console.log('empty');
                }
            } catch (e) {
                console.log(e);
            }
        };
        getData()
    }, [])

    return (
        <SafeAreaProvider style={{ backgroundColor: '#E1E5E9', }}>

            <StatusBar style={'dark'} />
            <View style={{
                top: 70,
            }}>
                <Header title={'Cart'} hasBackButton={true} navigation={navigation} />
                <ScrollView
                    overScrollMode={'always'}
                    showsVerticalScrollIndicator={false}
                    style={{
                        paddingVertical: 20,
                        paddingHorizontal: 20,
                        height: 500,
                    }}
                >
                    {Array.isArray(cartItems) ? cartItems.map((item, index) => {
                        total += Number(item.price) * item.quantity
                        return (
                            <CartItems key={index} navigation={navigation} index={index} item={item} />
                        )
                    })
                        :
                        <View>
                            <Text style={{ fontSize: 50, textAlign: 'center' }}>
                                Cart is empty
                            </Text>
                        </View>
                    }
                </ScrollView>

                <View style={{
                    marginHorizontal: 25,
                    marginTop: 10,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 10,
                    }}>
                        <Text style={{
                            // fontWeight: 'bold',
                            fontSize: 18,
                        }}>
                            Total ({cartItems.length} Items)
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                        }}>
                            £ {total}
                        </Text>
                    </View>

                    <Pressable style={{
                        backgroundColor: primary,
                        borderRadius: 40,
                        padding: 20,
                        alignItems: "center",
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: 'white'
                        }}>
                            Checkout - £ {total}
                        </Text>
                    </Pressable>
                </View>

            </View>

            <NavMenu navigation={navigation} route={route.name} />

        </SafeAreaProvider>
    )
}

