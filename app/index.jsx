import { StyleSheet} from 'react-native'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedImage from '../components/ThemedImage'
import { useFonts } from 'expo-font'
import { Poppins_400Regular,Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { Outfit_500Medium } from '@expo-google-fonts/outfit'
import ThemedLink from '../components/ThemedLink'

const Home = () => {
  const [loaded]  = useFonts({
        Poppins_400Regular,Outfit_500Medium,Poppins_600SemiBold
    })

    if(!loaded) return null

  return (
    <ThemedView style={styles.container}>
        <ThemedImage style={styles.img}/>
        <ThemedText title={true} style={styles.title}>
            auralis
        </ThemedText>
        <ThemedText secondary={true} style={styles.text}>
            Cough. Analyze. Know
        </ThemedText>

        <Spacer height={220}/>


        <ThemedLink style={styles.link1} secondary={true} href='/login'>
        Get Started
        </ThemedLink>
        <Spacer height={12}/>
        <ThemedLink style={styles.link2} secondButton={true} href='/register'>
        I'm new, Sign me up!
        </ThemedLink>
    </ThemedView>
  )
}

export default Home

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
        lineHeight: 24,
        letterSpacing: -1,
        height: 100
    },
    img: {
        marginTop: 80,
        marginBottom: -185
    },
    text: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: -1,
        marginTop: -65
    },
    link1: {
        fontFamily: "Poppins_600SemiBold",
        width: 361,
        height: 48,
        borderRadius: 999,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 15,
        fontSize: 14

    
    },
    link2: {
        fontFamily: "Poppins_600SemiBold",
        width: 361,
        height: 48,
        borderRadius: 999,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 14
    }
})