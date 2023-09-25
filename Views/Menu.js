import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Modal, ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from '../components/Header'
import MenuItem from '../components/MenuItem'
import ModalComp from '../components/ModalComp'
import NavMenu from '../components/NavMenu'
import Search from '../components/Search'
import { items } from '../item'
import { primary } from '../styles/general'
import { AddItem } from '../utils/functions'


export default function Menu({ navigation, route }) {
    // console.log(route.name)
    const [message, setMessage] = useState('');
    const [menuItems, setMenuItems] = useState(items)
    const [showModal, setShowModal] = useState(false);

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
                <Header title={'Menu'} hasBackButton={false} navigation={navigation} />
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
                            <MenuItem key={index} navigation={navigation} addtoCart={addtoCart} setFavourite={setFavourite} index={index} item={item} />
                        )
                    })
                    }
                </ScrollView>

            </View>
            <ModalComp showModal={showModal} message={message} setShowModal={setShowModal} />
            <NavMenu navigation={navigation} route={route.name} />

        </SafeAreaProvider>
    )
}

