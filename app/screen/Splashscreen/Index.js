import React from "react";
import { StyleSheet,View, Text,Image } from "react-native";
import { splash_logo } from "../../assets/Index";
import { COLOR,WIDTH,HEIGHT } from "../../config/const";

function Index() {
  return (
    <View style={styles.container}>
      <Image source={splash_logo} style={styles.container_logo}/>
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
    alignItems:'center'
  },container_logo:{
    width:WIDTH*0.4,
    resizeMode:'contain',
    height:WIDTH*0.5
  }
});

export default Splashscreen = Index;
