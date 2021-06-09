import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image
} from 'react-native'
import { WIDTH,COLOR } from '../../config/const'
import { TYPOGRAPHY } from "../../Styles/Index";

const Index = ({title,bgcolor,icon,width,style}) => {
    return (
        <TouchableOpacity  onPress={()=>alert(1)} style={[styles.button,{backgroundColor:bgcolor?bgcolor:COLOR.PRIMARY,width:width?width:WIDTH*0.85,display:'flex',flexDirection:'row'},style&&style]}>
            {icon&&<Image source={icon} style={{position:'absolute',left:WIDTH*0.07}}/>}
            <Text style={[TYPOGRAPHY.h5,styles.subheader]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width:WIDTH*0.85,
        height:WIDTH*0.16,
        borderRadius:WIDTH*0.05,
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    },subheader:{
    color:COLOR.WHITE,
    textAlign:'center',
    fontFamily:'GilroyMedium'
  }
})
export default DButton = Index
