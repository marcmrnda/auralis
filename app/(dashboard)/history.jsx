import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';
// highlight-start
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
// highlight-end
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import LottieView from 'lottie-react-native';
import ThemedView from '../../components/ThemedView';
import loading from '../../assets/Loading #35.json'

 function App() {
  const pressed = useSharedValue(false);

  const tap = Gesture.LongPress()
    .onBegin(() => {
      pressed.value = true;
    })
    .onEnd(() => {
      pressed.value = false;
    })

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? '#FFE04B' : '#B58DF1',
    width: withSpring(pressed.value ?  120: 200),
    height: withSpring(pressed.value ? 120 : 200 )
  }));

  



  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemedView safe={true} style={styles.container}>
      <LottieView
      source={loading}
      autoPlay
      loop
    />
        <GestureDetector gesture={tap}>
          <Animated.View style={[styles.circle, animatedStyles]}>
          <SimpleLineIcons name="microphone" size={70} color={"#FFFFFF"} />
          </Animated.View>
          

        </GestureDetector>
      </ThemedView>
    </GestureHandlerRootView>
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle: {
    height: 120,
    width: 120,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
