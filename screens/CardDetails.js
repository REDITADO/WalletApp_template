import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

let umber ="2222405343248877"
function hideNumber(CardNumber){
    let result='';
    for(let i=0; i<CardNumber.length/2;i++){
        result +="*"
    }
    console.log(result+CardNumber.substring(CardNumber.length/2))
    return result + CardNumber.substring((CardNumber.length)/2,CardNumber.length/4)
}

export default function CardDetails(){
    return(
        <View style={styles.Container}>
        <TouchableOpacity style={styles.BackArrow}>
            <Feather name="arrow-left-circle" size={35} color={"#45197D"}/>
        </TouchableOpacity>
          <Text style={styles.Title}>Details</Text>
          <View style={styles.ContainerCard}>

             <View style={styles.BigCircle}></View>
             <View style={styles.CreditCardChip}></View>
             <View style={styles.SmallCircle}></View>
             <View style={styles.SecondBigCircle}></View>
             <Text style={styles.Text}>Card</Text>

          </View>
            <View>
            <View style={styles.info}>
                    <Text style={styles.TitleInfo}>Name</Text> 
                    <Text style={styles.InfoText}>JBank</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.TitleInfo}>Bank</Text> 
                    <Text style={styles.InfoText}>Mabank</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.TitleInfo}>Account</Text> 
                    <Text style={styles.InfoText}>{hideNumber(umber)}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.TitleInfo}>Status</Text> 
                    <Text style={styles.InfoText}>Active</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.TitleInfo}>Valid</Text> 
                    <Text style={styles.InfoText}>2022-2026</Text>
                </View>
            </View>
          <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}} >
              <EvilIcons name="trash" size={35} color={"#5B259F"}/>
              <Text style={styles.Button}>Remove</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerCard:{
        width:300,
        height:200,
        borderRadius:40,
        backgroundColor:"#301975",
        overflow:"hidden"
    },
    Container:{
        flexDirection:"column",
        height:"100%",
        width:"100%",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    Title:{
        fontSize:20,
        fontWeight:"bold",
        color:"#130138"
    },
    Button:{
        fontWeight:"bold",
        fontSize:20,
        marginLeft:5,
        color:"#5B259F"
    },
    BackArrow:{
        alignSelf:"flex-start",
        left:20
    },
    BigCircle:{
        width:170,
        height:170,
        borderRadius:100,
        backgroundColor:"#6E34B8",
        position:"absolute",
        top:-50,
        left:-20
    },
    SmallCircle:{
        width:81,
        height:81,
        borderColor:"#9038FF",
        borderWidth:4,
        borderRadius:100,
        left:-20,
        bottom:-20,
        position:"absolute"
    },
    SecondBigCircle:{
        width:170,
        height:170,
        borderRadius:100,
        position:"absolute",
        top:81,
        left:170,
        borderWidth:4,
        borderColor:"#D71CDB"
    },
    CreditCardChip:{
        width:50,
        height:40,
        borderRadius:5,
        backgroundColor:"#FFD686",
        top:80,
        left:50
    },
    Text:{
        fontSize:35,
        fontWeight:"bold",
        color:"#FFFFFF",
        left:200,
        top:90
    },
    info:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-evenly"
    },
    TitleInfo:{
        color:"#BDBDBD",
        fontWeight:"500",
        fontSize:16,
        marginBottom:12
    },
   InfoText:{
       fontSize:16,
       fontWeight:"700"
   }
})