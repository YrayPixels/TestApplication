import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Feather, AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { MainColor } from '../../jsontesters/slides';

const iconSize = 24;

export default function TabBar({ bars, styles, navigate }) {
    const [iconIndex, setIconIndex] = useState(0)
    return (
        <View style={{
            position: 'absolute',
            elevation: 10,
            width: '100%',
            backgroundColor: 'white',
            bottom: 0,
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 20,
        }}>
            <Pressable onPress={() => {
                setIconIndex(0)
                navigate.navigate('home')
            }} style={{
                alignItems: 'center',
            }}>
                <Feather name="divide" size={iconSize} color={iconIndex == 0 ? MainColor : "#cccccc"} />
                <Text style={[styles.iconTcol, {
                    color: iconIndex == 0 ? MainColor : "#cccccc",
                }]}>Home</Text>
            </Pressable>
            <Pressable onPress={() => {
                setIconIndex(1)
            }} style={{
                alignItems: 'center',
            }}>
                <FontAwesome name="diamond" size={iconSize} color={iconIndex == 1 ? MainColor : "#cccccc"} />
                <Text style={[styles.iconTcol, {
                    color: iconIndex == 1 ? MainColor : "#cccccc",
                }]}>Rewards</Text>
            </Pressable>
            <Pressable onPress={() => {
                setIconIndex(2)
            }} style={{
                alignItems: 'center',
            }}>
                <MaterialCommunityIcons name="finance" size={iconSize} color={iconIndex == 2 ? MainColor : "#cccccc"} />
                <Text style={[styles.iconTcol, {
                    color: iconIndex == 2 ? MainColor : "#cccccc",
                }]}>Finance</Text>
            </Pressable>
            <Pressable onPress={() => {
                setIconIndex(3)
            }} style={{
                alignItems: 'center',
            }}>
                <MaterialCommunityIcons name="cards" size={iconSize} color={iconIndex == 3 ? MainColor : "#cccccc"} />
                <Text style={[styles.iconTcol,
                {
                    color: iconIndex == 3 ? MainColor : "#cccccc",
                }]}>Cards</Text>
            </Pressable>
            <Pressable onPress={() => {
                setIconIndex(4)
            }} style={{
                alignItems: 'center',
            }}>
                <Ionicons name="person" size={iconSize} color={iconIndex == 4 ? MainColor : "#cccccc"} />
                <Text style={[styles.iconTcol, {
                    color: iconIndex == 4 ? MainColor : "#cccccc",
                }]}>Me</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({})