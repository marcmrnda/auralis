import { StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedImage from '../../components/ThemedImage'
import ThemedText from '../../components/ThemedText'
import { useFonts } from 'expo-font'
import { Poppins_400Regular,Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { Outfit_500Medium } from '@expo-google-fonts/outfit'
import Spacer from '../../components/Spacer'


const HomePage = () => {
     const [loaded]  = useFonts({
        Poppins_400Regular,Outfit_500Medium,Poppins_600SemiBold
    })

    if(!loaded) return null
  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedImage style={styles.img}/>
        <ThemedText title={true} style={styles.title}>
            auralis
        </ThemedText>
        <ThemedText secondary={true} style={styles.text}>
            Cough. Analyze. Know
        </ThemedText>

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
        height: 100
    },
    img: {
        marginTop: -150,
        marginBottom: -185
    },
    text: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: -1,
        marginTop: -65
    }
})