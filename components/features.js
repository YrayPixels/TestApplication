import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Features({ styles, appfeatures, }) {
    return (
        <View style={{
            marginHorizontal: 20,
        }}>

            <View style={{
                marginVertical: 20,
                elevation: 4,
                backgroundColor: 'white',
                paddingVertical: 20,
                borderRadius: 10,
                gap: 20,
                width: '99%',
                alignSelf: 'center'
            }}>

                {appfeatures.map((appfeature, index) => {
                    return (

                        <View key={index} style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>

                            {appfeature.feature.map((feature, index) => {
                                return (
                                    <View key={index} style={{
                                        alignItems: 'center',
                                        flex: 1,
                                        width: 300,
                                    }}>
                                        <View style={{
                                            backgroundColor: '#bfd8fb',
                                            padding: 10,
                                            borderRadius: 10,
                                            marginBottom: 5,
                                        }}>
                                            {feature.icon}
                                        </View>
                                        <Text style={[styles.sentSmallText,]}>{feature.name}</Text>
                                    </View>)
                            })
                            }

                        </View>
                    )
                })}


            </View>
        </View>
    )
}

const styles = StyleSheet.create({})