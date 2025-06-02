import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../themes/colors'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Powered by</Text>
          <Text style={ styles.link} onPress={() => Linking.openURL("https://www.weatherapi.com")}>WeatherAPI.com</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({

    container: {

        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        backgroundColor: COLORS.background
    },
    text: {
        color: COLORS.text,
        backgroundColor: COLORS.background
    },
    link: {
        color: COLORS.link
    }
})