import { Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'


const ThemedBTNText = ({style, title=false, secondary=false, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.dark

  return (
    <Text style={[{color: theme.btnText},style]} {...props} />
  )
}

export default ThemedBTNText