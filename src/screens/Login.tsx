import { BlurView } from '@react-native-community/blur'
import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, View, Pressable, TouchableOpacity } from 'react-native';

const Login = (): React.JSX.Element => {

  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)

  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.imageBG}
        source={require('../assests/screenBG.png')}
      >
        <Image
          style={styles.yogaMan}
          source={require('../assests/yoga.png')}
        />

        <View style={styles.loginBox}>
          <View style={styles.blurContainer}>
            <BlurView
              style={styles.blur}
              blurType="light"
              blurAmount={32}
              reducedTransparencyFallbackColor="white"
            />
          </View>
          <Text style={styles.mainTxt}>Sign In</Text>

          <View style={{ padding: 15, gap: 15 }}>
            <View style={{ gap: 6 }}>
              <Text style={styles.inputText}>
                Username
              </Text>
              <TextInput
                style={styles.inputBox} />
            </View>
            <View style={{ gap: 6 }}>
              <Text style={styles.inputText}>
                Password
              </Text>
              <TextInput
                secureTextEntry={isPasswordShown}
                style={styles.inputBox} />
  
              <Pressable>
                <Text style={{ textAlign: "right", color: "aliceblue", textDecorationLine: "underline" }}>Forgot Password?</Text>
              </Pressable>
            </View>
            <Pressable
              style={styles.signInBtn}
            >
              <Text style={{ color: "#046675", fontSize: 15 }}>Sign In</Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center", gap: 4 }}>
            <Text style={{ color: "aliceblue" }}>Don't Have Account</Text>
            <Pressable ><Text style={{ color: "aliceblue", textDecorationLine: "underline" }}>Sign up</Text></Pressable>
          </View>
        </View>

      </ImageBackground>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    backgroundColor: "#046675",
  },
  imageBG: {
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  },
  yogaMan: {
    position: "absolute",
    top: "12%",
    left: "8%",
    height: "40%",
    width: "80%",
    resizeMode: "contain"
  },
  blurContainer: {
    overflow: 'hidden',
    borderRadius: 50,
    position: 'absolute',
    width: "100%",
    height: "100%",
  },
  blur: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    position: "absolute",
  },
  loginBox: {
    width: "90%",
    height: "53%",
    position: "absolute",
    top: "34%",
    left: "6%",
  },
  mainTxt: {
    padding: 6,
    alignSelf: "center",
    color: "#FFFFFF",
    fontWeight: 900,
    fontSize: 32,
    fontFamily: "primaryf5",
    paddingVertical: 15
  },
  inputText: {
    color: "aliceblue",
    fontSize: 16
  },
  inputBox: {
    backgroundColor: "#CFE9E9",
    borderRadius: 10,
    padding: 10,
    color: "#046675",
  },
  signInBtn: {
    backgroundColor: "aliceblue",
    borderRadius: 20,
    paddingVertical: 9,
    justifyContent: "center",
    alignItems: "center",

  }
})