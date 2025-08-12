import { Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'


const ThemedText = ({style, title=false, secondary=false, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.dark

    const textColor = title ? theme.title : theme.text
  return (
    <Text style={[{color: secondary ? theme.secondaryTitle : textColor},style]} {...props} />
  )
}

export default ThemedText