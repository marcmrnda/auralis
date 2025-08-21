import { StyleSheet, View } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedBTNText from '../../components/ThemedButtonText'
import { useState } from 'react'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'
import { Outfit_500Medium, Outfit_600SemiBold} from '@expo-google-fonts/outfit'
import { useFonts } from 'expo-font'
import { router } from 'expo-router'
import ThemedTextInput from '../../components/ThemedTextInput'
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Spacer from '../../components/Spacer'
import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Link } from 'expo-router'

const Register = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.dark
    const [loaded] = useFonts({
        Poppins_400Regular, Outfit_500Medium, Poppins_600SemiBold, Poppins_500Medium, Outfit_600SemiBold
    })

    if (!loaded) return null


    const handleSubmit = () => {
        router.push("/login")
    }
    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedText style={styles.title} title={true}> 
                Register Your
                Account
            </ThemedText>

            <View style={styles.inputView}>
                <Ionicons style={styles.icon} name="person-outline" size={24} color={"#FF6B5D"} />
                <ThemedTextInput style={styles.inputText}  placeholder="Full Name" />
            </View>

            <View style={styles.inputView}>
                <Fontisto style={styles.icon} name="email" size={24} color={"#FF6B5D"} />
                <ThemedTextInput style={styles.inputText}  placeholder="Email Address" />
            </View>

            <View style={styles.inputView}>
                <MaterialIcons style={styles.icon} name="lock" size={24} color={"#FF6B5D"} />
                <ThemedTextInput style={styles.inputText} secureTextEntry placeholder="Password"  />

                
            </View>

            <Spacer height={20} />

            <ThemedButton style={[styles.button, {backgroundColor: theme.button2}]} onPress={handleSubmit}>
                <ThemedBTNText style={styles.btnText}>
                    Register
                </ThemedBTNText>
            </ThemedButton>

            <Spacer height={5}/>

            <View >
                <ThemedText style={{fontSize: 16, fontFamily: "Poppins_500Medium" }}>
                    Already have an account? <Link style={{color: theme.secondaryTitle, fontFamily: "Poppins_500Medium"}} href="/login">Sign In!</Link>
                </ThemedText>
            </View>


        </ThemedView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center'

    },
    button: {
        width: 344,
        height: 65.54,
        alignItems: "center",
        justifyContent: "center"
    },
    btnText: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,

    },
    inputText: {
        width: 344,
        height: 65.52,
        fontFamily: "Poppins_400Regular",
        paddingLeft: 55
    },
    inputView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'end',
        marginTop: -25
    },
    icon: {
        padding: 10,
        top: 53,
        left: 8
    },
    title: {
        fontFamily: "Outfit_600SemiBold",
        fontSize: 38,
        width: 320,
        marginBottom: 40
    }

})