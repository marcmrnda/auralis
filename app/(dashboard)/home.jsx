import { StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedImage from '../../components/ThemedImage'
import ThemedText from '../../components/ThemedText'
import { useFonts } from 'expo-font'
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { Outfit_500Medium, Outfit_300Light } from '@expo-google-fonts/outfit'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Link } from 'expo-router'

const HomePage = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.dark
    const [loaded] = useFonts({
        Poppins_400Regular, Outfit_500Medium, Poppins_600SemiBold, Outfit_300Light, Poppins_500Medium
    })

    if (!loaded) return null
    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedImage style={styles.img} />
            <ThemedText title={true} style={styles.title}>
                auralis
            </ThemedText>
            <ThemedText secondary={true} style={styles.text}>
                Cough. Analyze. Know
            </ThemedText>

            <Spacer height={12.5} />
            <ThemedText style={styles.text1}>
                Start recording your cough to assess your tuberculosis risk and take immediate action.
            </ThemedText>

            <ThemedButton style={[styles.button1, { backgroundColor: theme.button1 }]}>
                <Link href={"/"} style={{color: "#FFF", fontFamily: "Poppins_500Medium", fontSize: 15}}>
                    New Recordings
                </Link>
            </ThemedButton>

        </ThemedView>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    title: {
        fontFamily: "Outfit_500Medium",
        fontSize: 35,
        lineHeight: 35,
        letterSpacing: -1,
        height: 100,
        marginTop: -7
    },
    img: {
        marginTop: -200,
        marginBottom: -185
    },
    text: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: -1,
        marginTop: -65
    },
    text1: {
        fontFamily: "Outfit_300Light",
        fontSize: 18,
        lineHeight: 28,
        letterSpacing: -1,
        textAlign: "center",
        textAlignVertical: "center",
        width: 300
    },
    button1: {
        width: 350,
        height: 63,
        justifyContent: "center",
        alignItems: "center",
        top: 185
    }
})