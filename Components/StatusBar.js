import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function StatusBar(){
    return(
        <>
        <View style={styles.Container}>
            <View style={styles.SmallCircle}></View>
            <View >
                <Text style={styles.Text2}>Balance</Text>
                <Text style={styles.Text1}>R$1.234</Text>
            </View>
            <View>
                <Text style={styles.Text2}>Card</Text>
                <Text style={styles.Text1}>Jabank</Text>
            </View>
            <View style={styles.BigCircle}></View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    Container:{
        height:150,
        width:305,
        backgroundColor:"#44127a",
        borderRadius:50,
        flexDirection:"row",
        alignItems:"center",
        padding:20,
        justifyContent:"space-between",
        left:25,
        top:150,
        overflow:"hidden"
    },
    Text1:{
        color:"#FFFFFF",
        fontSize:23,
        fontWeight:"bold",
        elevation:2
    },
    Text2:{
        color:"#FFFFFF",
        fontSize:15,
        fontWeight:"700",
    },
    BigCircle:{
        width:143,
        height:143,
        borderRadius:100,
        backgroundColor:"transparent",
        borderWidth:3.5,
        borderColor:"#9038FF",
        position:"absolute",
        top:70,
        right:-50,
        zIndex:0,
    },
    SmallCircle:{
        width:54,
        height:54,
        borderRadius:100,
        backgroundColor:"#6E34B8",
        position:"absolute",
        top:-20
    }
})