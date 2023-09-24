import { FlatList, Image, Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PopularSubs({ Subscriptions, navigate, styles, onRefresh, refreshing }) {
    return (
        <View style={{
            marginLeft: 20,
        }}>
            <View style={{
                marginTop: 20,
                marginHorizontal: 20,
                flexDirection: 'row', justifyContent: 'space-between'
            }}>
                <Text style={[styles.headerText]}>Popular Subscriptions</Text>
                <Text>See More</Text>
            </View>
            <FlatList
                style={{
                    height: 130,
                    marginTop: 20,
                }}
                horizontal
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={Subscriptions}
                renderItem={({ item, index }) => {

                    return (
                        <Pressable onPress={() => {
                            navigate.navigate('subscription', { sub: index })
                        }} key={index} style={{
                            height: 120,
                            width: 120,
                            borderRadius: 20,
                            elevation: 3,
                            backgroundColor: 'white',
                            alignItems: 'center',
                            marginRight: 20,
                        }}>
                            <Image style={{
                                height: 120,
                                width: 120,
                                borderRadius: 20,
                            }} source={item.image} />
                        </Pressable>
                    )
                }}
            />
            {/* <ScrollView
                refreshControl={refreshing && <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                horizontal
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{
                    height: 130,
                    marginTop: 20,
                }}>
                {Subscriptions.map((subscription, index) => {
                    return (
                        <Pressable onPress={() => {
                            navigate.navigate('subscription', { sub: index })
                        }} key={index} style={{
                            height: 120,
                            width: 120,
                            borderRadius: 20,
                            elevation: 3,
                            backgroundColor: 'white',
                            alignItems: 'center',
                            marginRight: 20,
                        }}>
                            <Image style={{
                                height: 120,
                                width: 120,
                                borderRadius: 20,
                            }} source={subscription.image} />
                        </Pressable>
                    )
                })}
            </ScrollView > */}
        </View >
    )
}

const styles = StyleSheet.create({})