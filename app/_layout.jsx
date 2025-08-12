import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Colors } from "../constants/Colors"
import { useColorScheme } from "react-native"

const Layout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme]
  return (
    <>
      <StatusBar value='auto'/>
        <Stack screenOptions={{
            headerStyle: {backgroundColor: theme.navBackground},
            headerTintColor: theme.title
        }}>
            <Stack.Screen name='index' options={{headerShown: false}}/>
            <Stack.Screen name="(auth)" options={{headerShown: false}}/>
        </Stack>
    </>
  )
}

export default Layout