import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageIndicator from '../../components/PageIndicator'

type Props = {
  pageNumber:number;
  bottomText:string;
}

const CommonScreen = ({pageNumber, bottomText}:Props) => {
  return (
    <View style={styles.screen}>
      <Pressable style={styles.skipBtn}>
        <Text style={{}}>
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
          source={require('../../assests/screen1SideImg.png')}
          />
          <Image
            style={styles.screenImg}
            source={require('../../assests/screen1.png')}
          />
        </ImageBackground>
      </View>
      <View style={styles.pageInd}>
        <PageIndicator count={5} currentIndex={pageNumber}/>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.mainTxt}>{bottomText}</Text>
        <Pressable>
          <Text style={styles.mainBtn}>Next</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CommonScreen

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    backgroundColor:"aliceblue",
    gap:10
  },
  headerSection: {
    height: "74%",
    backgroundColor: "#BFDBE0",
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
    height:"34%",
    width:"40%",
    top:"33%",
    right:"17%"
  },
  skipBtn:{
    position:"absolute",
    zIndex:2,
    top:"5%",
    right:"5%",
    fontFamily:"primaryf2"

  },
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
  mainBtn:{
    backgroundColor:"#3A6B75",
    paddingHorizontal:"15%",
    paddingVertical:"2%",
    borderRadius:30,
    color:"aliceblue",
    fontSize:18
  }
})