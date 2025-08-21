import { StyleSheet, View } from 'react-native'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedImage from '../components/ThemedImage'
import { useFonts } from 'expo-font'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { Outfit_500Medium } from '@expo-google-fonts/outfit'
import ThemedButton from '../components/ThemedButton'
import { Link } from 'expo-router'
import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const Home = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.dark
    const [loaded] = useFonts({
        Poppins_400Regular, Outfit_500Medium, Poppins_600SemiBold
    })

    if (!loaded) return null

    return (
        <ThemedView safe={true} style={styles.container}>

            <View style={styles.littleContainer}>
                <ThemedImage style={styles.img} />
                <ThemedText title={true} style={styles.title}>
                    auralis
                </ThemedText>
                <ThemedText secondary={true} style={styles.text}>
                    Cough. Analyze. Know
                </ThemedText>
            </View>




            <ThemedButton style={[styles.link1, { backgroundColor: theme.button1 }]}>
                <Link style={{ textAlign: 'center', textAlignVertical: "center", fontFamily: "Poppins_600SemiBold", color: "#FFFFFF", fontSize: 14 }} href={"/login"}>
                    Get Started
                </Link>
            </ThemedButton>

            <Spacer height={0} />

            <ThemedButton style={[styles.link2, { backgroundColor: theme.button2 }]}>
                <Link href={"/register"} style={{ textAlign: 'center', textAlignVertical: "center", fontFamily: "Poppins_600SemiBold", color: theme.navBackground, fontSize: 14 }}>
                    I'm new, sign me up
                </Link>
            </ThemedButton>
        </ThemedView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontFamily: "Outfit_500Medium",
        fontSize: 30,
        lineHeight: 30,
        letterSpacing: -1,
    },
    img: {
        width: 500,
        height: 100,
        marginVertical: 10
    },
    text: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: -1
    },
    link1: {
        width: 361,
        height: 48,
        borderRadius: 999,
        justifyContent: "center",
        marginTop: 500
    },
    link2: {
        width: 361,
        height: 48,
        borderRadius: 999,
        justifyContent: "center",
        marginTop: 3
    },
    littleContainer: {
        justifyContent: "center",
        alignItems: "center",
        top: 250
    }
})