import { Tabs } from 'expo-router'
import { Colors } from "../../constants/Colors"
import { useColorScheme } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'



const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme]
    const insets = useSafeAreaInsets()
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.navBackground,
                    paddingBottom: insets.bottom,
                    height: 87.35 + insets.bottom
                    
                },
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor,
                tabBarIconStyle: {
                    marginVertical: 10
                }
            }}>

            <Tabs.Screen name='home' options={{
                title: "Home",
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        size={30}
                        name={focused ? "home-sharp" : "home-outline"}
                        color={focused ? theme.iconColorFocused : theme.iconColor}
                    />
                ),
                tabBarLabel: ({ focused }) => {
                    return <Ionicons
                        size={8}
                        name={focused ? "ellipse-sharp" : "ellipse-outline"}
                        color={focused ? theme.iconColorFocused : theme.iconColor}
                    />
                }
            }} />

            <Tabs.Screen name='history' options={{
                title: "History", tabBarIcon: ({ focused }) => (
                    <Ionicons
                        size={30}
                        name={focused ? "time-sharp" : "time-outline"}
                        color={focused ? theme.iconColorFocused : theme.iconColor}
                    />
                ), tabBarLabel: ({ focused }) => {
                    return <Ionicons
                        size={8}
                        name={focused ? "ellipse-sharp" : "ellipse-outline"}
                        color={focused ? theme.iconColorFocused : theme.iconColor}
                    />
                }
            }} />

            <Tabs.Screen name='profile' options={{
                title: "Profile", tabBarIcon: ({ focused }) => (
                    <Ionicons
                        size={30}
                        name={focused ? "person-sharp" : "person-outline"}
                        color={focused ? theme.iconColorFocused : theme.iconColor}
                    />
                ), tabBarLabel: ({ focused }) => {
                    return <Ionicons
                        size={8}
                        name={focused ? "ellipse-sharp" : "ellipse-outline"}
                        color={focused ? theme.iconColorFocused : theme.iconColor}
                    />
                }
            }} />

            
        </Tabs>
    )

}

export default DashboardLayout