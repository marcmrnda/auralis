import {useColorScheme, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'
import { Pressable } from 'react-native'


const ThemedButton = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.dark


  return (
    <Pressable style={({pressed}) => [styles.btn, pressed && styles.pressed,style]} {...props} />
  )
}

export default ThemedButton


const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    },
    btn : {
        padding: 10,
        borderRadius: 14,
        marginVertical: 10

        }
})