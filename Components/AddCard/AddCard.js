import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons"

export default function AddCard(){
    return(
        <View style={styles.Container}>
        <TouchableOpacity style={styles.BackArrow}>
            <Feather name="arrow-left-circle" size={35} color={"#45197D"}/>
        </TouchableOpacity>
          <Text style={styles.Title}>Add card</Text>
          <View style={styles.ContainerCard}>

             <View style={styles.BigCircle}></View>
             <View style={styles.CreditCardChip}></View>
             <View style={styles.SmallCircle}></View>
             <View style={styles.SecondBigCircle}></View>
             <Text style={styles.Text}>Card</Text>

          </View>
              <Text>Add a new card on your wallet for easy life</Text>
          <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}} >
              <AntDesign name="pluscircleo" size={35} color={"#45197D"}/>
              <Text style={styles.Button}>Add</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerCard:{
        height:400,
        width:250,
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
        color:"#130138"
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
        right:-20,
        top:-20,
        position:"absolute"
    },
    SecondBigCircle:{
        width:170,
        height:170,
        borderRadius:100,
        position:"absolute",
        top:281,
        left:130,
        borderWidth:4,
        borderColor:"#D71CDB"
    },
    CreditCardChip:{
        width:40,
        height:50,
        borderRadius:5,
        backgroundColor:"#FFD686",
        top:80,
        left:50
    },
    Text:{
        fontSize:35,
        fontWeight:"bold",
        color:"#FFFFFF",
        left:160,
        top:275
    }
})