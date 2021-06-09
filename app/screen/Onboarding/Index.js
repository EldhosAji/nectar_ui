import React from "react";
import { StyleSheet,View, Text,Image, ImageBackground } from "react-native";
import { onboarding_img, splash_logo, unicon } from "../../assets/Index";
import { COLOR,WIDTH,HEIGHT } from "../../config/const";
import { TYPOGRAPHY } from "../../Styles/Index";
import {DButton} from '../../components/Index'
function Index() {
  return (
    <View style={styles.container}>
        <Image source={onboarding_img} style={styles.bg_img}/>
        <View style={styles.sec_container}>
            <View style={styles.section}/>
            <View style={[styles.section]}>
                <Image source={unicon} style={styles.unicon}/>
                <Text style={[TYPOGRAPHY.h1,styles.header]}>Welcome to our store</Text>
                <Text style={[TYPOGRAPHY.h6,styles.subheader]}>Get your groceries in as fast as one hour</Text>
                <DButton title="Get stated" bgcolor={COLOR.PRIMARY}/>
            </View>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.PRIMARY,
    width:WIDTH,
    height:HEIGHT,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },bg_img:{
    width:WIDTH+WIDTH*0.009,
    height:HEIGHT,
    resizeMode:'cover'
  },sec_container:{
    width:WIDTH,
    height:HEIGHT,
    display:"flex",
    flexDirection:'column',
    position:'absolute'
  },section:{
    flex:1,
    display:"flex",
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center'
  },header:{
    color:COLOR.WHITE,
    width:WIDTH*0.74,
    textAlign:'center',
    fontFamily:'GilroyRegular'
  },subheader:{
    color:COLOR.LIGHTWHITE,
    width:WIDTH*0.80,
    textAlign:'center',
    marginTop:-WIDTH*0.1,
    marginBottom:-WIDTH*0.0,
    fontFamily:'GilroyRegular'
  },unicon:{
      width:WIDTH*0.12,
      height:WIDTH*0.12,
      marginBottom:-WIDTH*0.09
  }
});

export default Onboarding = Index;
