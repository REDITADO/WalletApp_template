import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export default function Avatar(){
    return(
        <View style={styles.Container}>
            <View>
                <Text style={styles.H1}>Wallet</Text>
                <Text style={styles.H2}>Active</Text>
            </View>
            <Image style={styles.AvatarImage} source={require("../Asset/user3.jpg")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        position:"absolute",
        flexDirection:"row",
        height:100,
        width:"100%",
        alignItems:"center",
        justifyContent:"space-between",
        padding:25,
        top:"5%"
    },
    H1:{
        fontSize:20,
        fontWeight:"bold",
    },
    H2:{
        color:"#BDBDBD"
    },
    AvatarImage:{
        width:50,
        height:50,
        borderRadius:25
    }
})