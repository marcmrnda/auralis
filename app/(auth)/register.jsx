import { StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'


const Register = () => {
  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedText>
            Taemo
        </ThemedText>
    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
        
    },
})