import React from "react";
import { StyleSheet,View, Text,Image,TextInput,ScrollView } from "react-native";
import { inicon, signin_img ,fbicon,gicon} from "../../assets/Index";
import { DButton } from "../../components/Index";
import { COLOR,WIDTH,HEIGHT } from "../../config/const";
import { TYPOGRAPHY } from "../../Styles/Index";
import {Number} from '../../modal/Index'
function Index() {
  const [visible,setVisible] = React.useState(false)
  const [number,setNumber] = React.useState('+91')
  function closeModal(data){
    setVisible(false)
  }
  return (
    <View style={styles.container}>
      <Number visible={visible} hide={closeModal}/>
        <ScrollView style={{width:WIDTH}} showsVerticalScrollIndicator={false}>
            <Image source={signin_img} style={styles.container_logo}/>
            <View style={styles.nocontainer}>
                <Text style={[TYPOGRAPHY.h3, styles.header]}>Get your groceries with nectar</Text>
                <View style={{display:'flex',flexDirection:'row',alignItems:"center",marginTop:WIDTH*0.05,borderBottomWidth:1,borderBottomColor:COLOR.GREY,paddingBottom:10}}>
                    <Image source={inicon} style={[styles.icon]}/>
                    <TextInput onFocus={()=>setVisible(true)} placeholder="+91-" value={number} style={styles.input}/>
                </View>
            </View>
            <View style={styles.socialcontainer}>
                <Text style={[TYPOGRAPHY.h6,styles.subheader]}>Or connect with social media</Text>
                <DButton title="Continue with Google" bgcolor="#5383EC" icon={gicon} width="100%" style={{marginTop:WIDTH*0.04}}/>
                <DButton title="Continue with Facebook" bgcolor="#4A66AC" icon={fbicon} width="100%" style={{marginTop:WIDTH*0.04,marginBottom:10}}/>
            </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
    width:WIDTH,
    height:HEIGHT,
    display:'flex',
  },input:{
      height:20,
      fontSize:20,
      marginLeft:10,
    fontFamily:'GilroyRegular',
    width:WIDTH*0.75,
  },subheader:{
    color:COLOR.GREY,
    textAlign:'center',
    marginLeft:-WIDTH*0.05,
    marginTop:WIDTH*0.04,
    fontFamily:'GilroyRegular'
  },container_logo:{
    width:WIDTH,
    resizeMode:'contain',
  },nocontainer:{
    paddingLeft:WIDTH*0.05,
    paddingRight:WIDTH*0.05
  },socialcontainer:{
      display:'flex',
      
    paddingLeft:WIDTH*0.05,
    paddingRight:WIDTH*0.05
  },header:{
    color:COLOR.BLACK,
    width:WIDTH*0.7,
    textAlign:'left',
    fontFamily:'GilroyMedium'
  },icon:{
      width:WIDTH*0.12,
      height:WIDTH*0.06,
      borderRadius:2
  }
});

export default SignIn = Index;