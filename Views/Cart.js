import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Modal, ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from '../components/Header'
import MenuItem from '../components/MenuItem'
import NavMenu from '../components/NavMenu'
import Search from '../components/Search'
import { items } from '../item'
import { primary } from '../styles/general'

export default function Cart() {
    const [menuItems, setMenuItems] = useState(items)
    const [showModal, setShowModal] = useState(false);

    function addtoCart(index) {
        setShowModal(true)
    }

    function setFavourite(id) {

    }
    return (
        <SafeAreaProvider style={{ backgroundColor: '#E1E5E9', }}>

            <StatusBar style={'dark'} />
            <View style={{
                top: 70,
            }}>
                <Header title={'Menu'} hasBackButton={false} />
                <View style={{
                    width: '90%',
                    alignSelf: 'center',
                }}>
                    <Search />
                </View>
                <ScrollView
                    overScrollMode={'always'}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingVertical: 20,
                        paddingHorizontal: 20,
                        gap: 10,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                >

                    {menuItems.map((item, index) => {
                        return (
                            <MenuItem key={index} addtoCart={addtoCart} setFavourite={setFavourite} index={index} item={item} />
                        )
                    })
                    }


                </ScrollView>

            </View>

            <Modal
                transparent
                visible={showModal}
                onRequestClose={() => {
                    setShowModal(false)
                }}
                animationType='slide'
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#000000990',
                        alignItems: 'center'
                    }}>
                    <View
                        onPress={() => { setShowModal(false) }}
                        style={{
                            position: 'absolute',
                            height: 400,
                            width: '100%',
                            bottom: 0,
                            backgroundColor: primary,
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20,
                            // elevation: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: 'white',
                        }}>
                            Item Added to Cart
                        </Text>
                    </View>

                </View>

            </Modal>

            <NavMenu />

        </SafeAreaProvider>
    )
}

