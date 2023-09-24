import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { secondary } from '../styles/general';

export default function Search() {
    return (
        <View style={{
            borderWidth: 1,
            borderColor: '#151515',
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 8,
        }}>
            <View style={{
                width: '80%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <Ionicons name="search" size={20} color='#858585' />
                </View>
                <TextInput style={{ flex: 6, fontSize: 15, }}
                    placeholder='Search'
                    placeholderTextColor='#858585'>
                </TextInput>
            </View>
        </View >
    )
}
