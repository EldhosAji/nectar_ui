import React,{ useEffect } from 'react'
import { View, Modal, Text,TextInput,StyleSheet,Image,Pressable,Platform, KeyboardAvoidingView,Keyboard } from 'react-native'
import { backward,inicon,forward } from '../../assets/Index'
import {HEIGHT, WIDTH,COLOR} from '../../config/const'
import { TYPOGRAPHY } from "../../Styles/Index";
function Index({visible,hide}) {
    const [mobNumber,setMobNumber] = React.useState('+91')
    const [code,setCode] = React.useState()
    const [stage,setStage] =React.useState(1)
    const [bottomBtn,setBottomBtn]=React.useState(50)
    useEffect(() => {
        
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

   const _keyboardDidShow = (e) => {
    setBottomBtn(e.endCoordinates.height+30)
  };

  const _keyboardDidHide = () => {
    setBottomBtn(50)
  };

    function onBack(){
        if(stage===1){
            hide(mobNumber)
        }else{
            setStage(1)
        }
    }

    function entry(e){
        if(stage===1){
            setMobNumber(e)
        }else{
            setCode(e)
        }
    }

    function next(){
        if(stage===1){
            setStage(2)
        }
    }
    return (
        <View>
            <Modal
            animationType="slide"
            transparent={true}
            visible={visible}>
                <View style={styles.modalcontainer}>
                    <Pressable onPress={onBack} style={{height:30,width:30,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
                        <Image source={backward} style={{width:10,height:20}}/>
                        
                    </Pressable>
                    <View style={styles.nocontainer}>
                        <Text style={[TYPOGRAPHY.h3, styles.header]}>{stage===1?'Enter your mobile number':'Enter your 4-digit code'}</Text>
                        <Text style={[TYPOGRAPHY.h6, styles.header]}>{stage===1?'Mobile Number':'Code'}</Text>
                        <View style={{display:'flex',flexDirection:'row',alignItems:"center",marginTop:WIDTH*0.05,borderBottomWidth:1,borderBottomColor:COLOR.GREY,paddingBottom:10}}>
                            {stage===1&&<Image source={inicon} style={[styles.icon]}/>}
                            <TextInput placeholder={stage===1?'+91':"- - - - - -"} value={stage===1?mobNumber:code} onChangeText={entry} keyboardType='numeric' style={styles.input}/>
                        </View>
                    </View>

                    <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={{position:"absolute",display:'flex',bottom:bottomBtn}}>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:WIDTH,padding:WIDTH*0.05}}>
                        <Pressable>
                            <Text style={[TYPOGRAPHY.h6, styles.link]}>{stage===1?'':'Resent Code'}</Text>
                        </Pressable>
                        <Pressable style={styles.roundBtn} onPress={()=>next()}>
                            <Image source={forward}/>
                        </Pressable>
                    </View>
                    </KeyboardAvoidingView>
                </View>
                
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },modalcontainer:{
      width:WIDTH,
      height:HEIGHT,
      backgroundColor:COLOR.WHITE,
      padding:WIDTH*0.05
  },icon:{
      width:WIDTH*0.12,
      height:WIDTH*0.06,
      borderRadius:2
  },container_logo:{
    width:WIDTH,
    resizeMode:'contain',
  },nocontainer:{
  },header:{
    color:COLOR.BLACK,
    width:WIDTH*0.85,
    textAlign:'left',
    marginTop:WIDTH*0.1,
    fontFamily:'GilroyRegular'
  },input:{
      height:20,
      fontSize:20,
      marginLeft:10,
    fontFamily:'GilroyRegular',
    width:WIDTH*0.85
  },roundBtn:{
    width:60,
    height:60,
    backgroundColor:COLOR.PRIMARY,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40
  },link:{
      color:COLOR.PRIMARY,
    fontFamily:'GilroyRegular'
    }
})
export default Number = Index
