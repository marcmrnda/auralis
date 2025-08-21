import { TextInput, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'


const ThemedTextInput = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.dark

  return (
    <TextInput style={[{color: theme.text, backgroundColor: "transparent", padding: 20, borderRadius:10, borderWidth: 2, borderColor: theme.uiBackground},style]} placeholderTextColor={theme.uiBackground}  {...props} />
  )
}

export default ThemedTextInput