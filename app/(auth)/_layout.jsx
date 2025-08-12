import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Colors } from "../../constants/Colors"
import { useColorScheme } from "react-native"

const AuthLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme]
  return (
    <>
      <StatusBar value='auto'/>
        <Stack screenOptions={{
            headerStyle: {backgroundColor: theme.background, borderBottomWidth: 0,
      shadowColor: 'transparent', elevation: 0},
            headerTintColor: theme.title,
        }}>
            <Stack.Screen name='login' options={{title: '', animation: 'none'}}/>
            <Stack.Screen name='register' options={{title: '', animation: 'none'}}/>
        </Stack>
    </>
  )
}

export default AuthLayout