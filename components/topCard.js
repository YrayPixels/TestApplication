import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TopCard({ styles, balance, MainColor, bgImg, icons, }) {
    return (
        <ImageBackground source={bgImg} style={{
            marginTop: 20,
            marginHorizontal: 20,
            height: 200,
            borderRadius: 20,
            overflow: 'hidden',
            backgroundColor: MainColor,
            padding: 20,
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Text style={[styles.white, styles.sentText]}>Available Balance</Text>
                <Text style={[styles.white, styles.sentSmallText]}>{'Transaction History >'}</Text>
            </View>
            <View style={{
                marginTop: 10,
            }}>
                <Text style={[styles.white, styles.sentCashText]}>${balance}</Text>
            </View>
            <View style={{
                marginTop: 10,
                // marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}>
                {icons.map((icon, index) => {
                    return (
                        <View key={index}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <View style={{
                                backgroundColor: 'white',
                                padding: 10,
                                borderRadius: 10,
                                marginBottom: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 40,
                            }}>
                                {icon.icon}
                            </View>
                            <Text style={[styles.white, styles.sentSmallText]}>{icon.title}</Text>
                        </View>
                    )
                })}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({})