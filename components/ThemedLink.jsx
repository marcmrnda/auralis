import {useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import { Link } from 'expo-router'


const ThemedLink = ({style,  secondButton=false, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.dark

  return (
    <Link style={[{color: theme.navBackground, backgroundColor: secondButton ? theme.button2 : theme.button1},style]} {...props} />
  )
}

export default ThemedLink