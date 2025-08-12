import { Image, useColorScheme } from 'react-native'
import LightLogo from '../assets/1.png'
import DarkLogo from '../assets/2.png'
const ThemedImage = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    
    const imageSource = colorScheme == "dark" ? DarkLogo : LightLogo

  return (
    <Image source={imageSource} style={style} {...props}/>
  )
}

export default ThemedImage