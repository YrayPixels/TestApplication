import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Image, Modal, Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from '../components/Header'
import ModalComp from '../components/ModalComp'
import { items } from '../item'
import { primary } from '../styles/general'
import { AddItem } from '../utils/functions'

export default function Item({ route, navigation }) {
    const { item } = route.params
    const [message, setMessage] = useState('')
    const [menuItems, setMenuItems] = useState(items)
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedItem, setSelectedItem] = useState(menuItems[item]);

    async function addtoCart(item) {
        await AddItem(item).then((response) => {
            if (response.status === true) {
                setMessage(response.message);
                setShowModal(true);
            } else {
                setMessage(response.message);
                setShowModal(true)
            }
        })
    }

    function setFavourite(id) {
    }
    return (
        <SafeAreaProvider style={{ backgroundColor: '#E1E5E9', }}>

            <StatusBar style={'dark'} />
            <View style={{
                top: 70,
            }}>
                <Header title={''} hasBackButton={true} navigation={navigation} />

                <ScrollView
                    overScrollMode={'always'}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                    }}
                >
                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 10,
                        padding: 10,
                        marginBottom: 20,
                        height: 330, width: '100%',
                    }}>
                        <Image style={{ alignSelf: 'center', height: 300, width: 300, resizeMode: 'contain' }} source={selectedItem.image} />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 20,

                    }}>
                        <Text style={{
                            fontSize: 30, fontWeight: '500',
                        }}>
                            {selectedItem.name}
                        </Text>
                        <Text style={{
                            color: primary,
                            fontSize: 30, fontWeight: '500',
                        }}
                        >£ {selectedItem.price}</Text>
                    </View>

                    <Text style={{
                        marginBottom: 10,
                        lineHeight: 20,
                    }}
                    >{selectedItem.description.substring(0, 190) + '...'} <Text style={{ color: primary }}>Read more</Text></Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: '10px',
                    }}>
                        <Pressable onPress={() => { quantity > 1 && setQuantity(quantity - 1) }} style={{
                            borderRadius: 5,
                            backgroundColor: 'white',
                            paddingHorizontal: 20,
                            paddingVertical: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                fontSize: 40,
                            }}>-</Text>
                        </Pressable>
                        <Text style={{
                            fontSize: 30,
                        }}>{quantity}</Text>
                        <Pressable onPress={() => { setQuantity(quantity + 1) }} style={{
                            borderRadius: 5,
                            backgroundColor: 'white',
                            paddingHorizontal: 20,
                            paddingVertical: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                fontSize: 40,
                                fontWeight: '300',
                            }}>+</Text>
                        </Pressable>
                    </View>

                    <View style={{
                        gap: 10,
                        marginTop: 20,
                    }}>
                        <Pressable onPress={() => { addtoCart({ ...selectedItem, quantity }) }} style={{
                            backgroundColor: primary,
                            borderRadius: 40,
                            padding: 20,
                            alignItems: "center",
                        }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Add to cart</Text>
                        </Pressable>
                        <Pressable style={{
                            // backgroundColor: primary,
                            borderWidth: 2,
                            borderColor: primary,
                            borderRadius: 40,
                            padding: 20,
                            alignItems: "center",
                        }}>
                            <Text style={{ fontSize: 20, color: primary }}>Subscribe to a Plan</Text>
                        </Pressable>
                    </View>

                </ScrollView>

            </View>
            <ModalComp showModal={showModal} message={message} setShowModal={setShowModal} />


            {/* <NavMenu navigation={navigation} /> */}

        </SafeAreaProvider>
    )
}

