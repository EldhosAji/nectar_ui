import React from 'react'
import { View,Image, Text,StyleSheet,ScrollView,TextInput,Pressable } from 'react-native'
import { DButton } from "../../components/Index";
import { COLOR,WIDTH,HEIGHT } from "../../config/const";
import { TYPOGRAPHY } from "../../Styles/Index";
import {iconcolor,eyeopen,eyeclose} from '../../assets/Index'

function Index() {
    const [visible,setVisible] = React.useState(true)
    return (
        <View style={[styles.container]}>
            <ScrollView style={{width:WIDTH*0.9}} showsVerticalScrollIndicator={false}>
            <View >
                <View style={{height:HEIGHT*0.25,width:WIDTH*0.9,display:'flex',justifyContent:'center',alignItems:"center"}}>
                    <Image source={iconcolor} style={{width:WIDTH*0.14,height:HEIGHT*0.14,resizeMode:'contain'}}/>
                </View>
                <View>
                    <Text style={[styles.header,TYPOGRAPHY.h3]}>Login</Text>
                    <Text style={[styles.subheader,TYPOGRAPHY.h4]}>Enter your email and password</Text>
                    <View style={styles.nocontainer}>
                        <Text style={[TYPOGRAPHY.h4, styles.subheader,{marginTop:HEIGHT*0.03}]}>Email</Text>
                        <View style={{borderBottomWidth:1,borderBottomColor:COLOR.GREY,paddingTop:HEIGHT*0.02,width:WIDTH*0.9}}>
                            <TextInput placeholder="" keyboardType='email-address' style={styles.input}/>
                        </View>
                    </View>
                    <View style={styles.nocontainer}>
                        <Text style={[TYPOGRAPHY.h4, styles.subheader,{marginTop:HEIGHT*0.03}]}>Password</Text>
                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center', width:WIDTH*0.9,borderBottomWidth:1,borderBottomColor:COLOR.GREY,paddingBottom:10}}>
                            <TextInput placeholder="" secureTextEntry={visible} style={styles.input}/>
                            <Pressable onPress={()=>setVisible(val=>!val)}>
                                <Image source={visible?eyeopen:eyeclose} style={{width:WIDTH*0.06,height:WIDTH*0.06}}/>
                            </Pressable>
                        </View>
                        <Text style={[TYPOGRAPHY.h4, styles.subheader,{textAlign:'right',color:COLOR.BLACK, fontFamily:'GilroyMedium',marginTop:HEIGHT*0.02}]}>Forgot Password?</Text>
                    </View>
                        <DButton title="Login" bgcolor={COLOR.PRIMARY} width="100%" style={{marginTop:WIDTH*0.04,marginBottom:10}}/>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:HEIGHT*0.02}}>
                            <Text style={[TYPOGRAPHY.h4, styles.subheader,{textAlign:'right',color:COLOR.BLACK, fontFamily:'GilroyMedium'}]}>Don't have an account?</Text>
                            <Pressable><Text style={[TYPOGRAPHY.h4, styles.subheader,{color:COLOR.PRIMARY, fontFamily:'GilroyMedium'}]}>Signup</Text></Pressable>
                        </View>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    backgroundColor: COLOR.WHITE,
    width:WIDTH,
    height:HEIGHT,
    display:'flex',
    padding:WIDTH*0.05,
  },input:{
      height:20,
      fontSize:20,
    fontFamily:'GilroyRegular',
    width:WIDTH*0.75,
  },subheader:{
    color:COLOR.GREY,
    textAlign:'left',
    fontFamily:'GilroyRegular'
  },header:{
    color:COLOR.BLACK,
    width:WIDTH*0.7,
    textAlign:'left',
    fontFamily:'GilroyMedium'
  }
})

export default Login = Index