import {Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageIndicator from '../../components/PageIndicator'


const IntroS3 = ({navigation}:any) => {
  return (
    <View style={styles.screen}>
      <Pressable
       style={styles.skipBtn}
       onPress={()=>{
        navigation?.navigate("login")
       }}
       >
        <Text>
          SKIP {">"}
        </Text>
      </Pressable>
      <View style={styles.headerSection}>
        <ImageBackground
        style={styles.imageBG}
        source={require('../../assests/bgAssest1.png')}
        >
          <Image 
          style={styles.screenSideImg}
          source={require('../../assests/screen3SideImg-2.png')}
          />
          <Image 
          style={styles.screenSideImg2}
          source={require('../../assests/screen3SideImg.png')}
          />
          <Image
            style={styles.screenImg}
            source={require('../../assests/screen3.png')}
          />
        </ImageBackground>
      </View>
      <View style={styles.pageInd}>
        <PageIndicator count={5} currentIndex={2}/>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.mainTxt}>Daily Challenges for Growth</Text>
        <Pressable
        style={styles.nextBtn}
        onPress={()=>{
          navigation?.navigate("intro4")}
          }>
          <Text style={styles.nextBtnTxt}>Next</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default IntroS3

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    backgroundColor:"aliceblue",
    gap:10
  },
  headerSection: {
    height: "74%",
    backgroundColor: "#CDECCD",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  imageBG:{
    height:"100%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  screenImg: {
    height: "70%",
    width: "70%",  
    resizeMode: "contain"

  },
  screenSideImg:{
    position:"absolute",
    zIndex:2,
    borderRadius:30,
    height:"28%",
    width:"50%",
    top:"55%",
    right:"1%"
  },
  skipBtn:{
    position:"absolute",
    zIndex:2,
    top:"5%",
    right:"5%",
    fontFamily:"primaryf2"

  },
  screenSideImg2:{
    width:"70%",
    height:"10%",
    resizeMode:"contain",
    position:"absolute",
    zIndex:2,
    top:"34%",
    left:"4.5%"
  }
  ,
  pageInd:{
  },
  bottomSection: {
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    gap:12
  },
  mainTxt:{
    fontWeight:900,
    fontSize:30,
    width:"80%",
    textAlign:"center",
    fontFamily:"primaryf3"
  },
  nextBtn:{
    backgroundColor:"#3A6B75",
    paddingHorizontal:"15%",
    paddingVertical:"2%",
    borderRadius:30,
  },
  nextBtnTxt:{
    color:"aliceblue",
    fontSize:18
  }
})