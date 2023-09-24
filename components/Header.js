import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { fS } from '../styles/menu';

export default function Header({ title, hasBackButton }) {
    return (
        <View style={[styles.header, { marginBottom: 20, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }]} >
            {!hasBackButton &&
                <View style={{ backgroundColor: 'white', borderRadius: 5, padding: 10, }}>
                    <Ionicons name="chevron-back" size={15} color="black" />
                </View>
            }
            <Text style={[fS.l, { textAlign: 'center', flex: 1, fontWeight: 'bold' }]} >
                {title}
            </Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    header: {
        // flex: 1,
        // justifyContent: 'center',
    }
})
