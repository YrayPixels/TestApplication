import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ActiveSubs({ activeSubscriptions, styles }) {
    return (
        <View style={{
            marginLeft: 20,
        }}>

            <View style={{ marginTop: 20, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.headerText]}>Active Subscriptions</Text>
                <Text>View all</Text>
            </View>

            <ScrollView
                horizontal
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{
                    marginTop: 20,
                }}>
                {activeSubscriptions.reverse().map((subscription, index) => {
                    return (
                        <View key={index} style={{
                            paddingVertical: 20,
                            paddingHorizontal: 10,
                            elevation: 3,
                            backgroundColor: 'white',
                            height: 80,
                            marginVertical: 5,
                            borderRadius: 10,
                            marginRight: 20,
                            marginLeft: 5,
                            width: 300,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 10,
                        }}>

                            <View style={{
                                flexDirection: 'row',
                                gap: 10,
                                alignItems: 'center',
                            }}>
                                <View>
                                    <Image style={{
                                        height: 50,
                                        width: 50,
                                        borderRadius: 10,
                                    }} source={subscription.image} />
                                </View>
                                <View>
                                    <Text style={{
                                        fontSize: 14,
                                    }}>{subscription.name}</Text>
                                    <View style={{
                                        overflow: 'scroll',
                                        width: 100,
                                    }}>

                                        <Text style={{
                                            fontSize: 10,
                                        }}>{subscription.description}</Text>
                                    </View>

                                </View>
                            </View>

                            <View>
                                <Text style={
                                    {
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                    }
                                }>
                                    30 Days/left
                                </Text>
                            </View>

                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})