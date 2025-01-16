import {Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageIndicator from '../../components/PageIndicator'


const IntroS4 = ({navigation}:any) => {
  return (
    <View style={styles.screen}>
      <Pressable
       style={styles.skipBtn}
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
          source={require('../../assests/screen4SideImg.png')}
          />
          <Image
            style={styles.screenImg}
            source={require('../../assests/screen4.png')}
          />
        </ImageBackground>
      </View>
      <View style={styles.pageInd}>
        <PageIndicator count={5} currentIndex={3}/>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.mainTxt}>Together, we heal, thrive & find our calm</Text>
        <Pressable
        style={styles.nextBtn}
        onPress={()=>{
          navigation?.navigate("intro5")}
          }>
          <Text style={styles.nextBtnTxt}>Next</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default IntroS4

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    backgroundColor:"aliceblue",
    gap:10
  },
  headerSection: {
    height: "74%",
    backgroundColor: "#FFE1E1",
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
    height:"30%",
    width:"100%",
    top:"30%",
    left:"1%",
    resizeMode:"contain"
  },
  skipBtn:{
    position:"absolute",
    zIndex:2,
    top:"5%",
    right:"5%",
    fontFamily:"primaryf2"

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
    width:"85%",
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