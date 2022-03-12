import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from "react-native";

export default function OptionsMenu(){
    return(
        <View style={styles.Container}>
            <View style={styles.Options}>
                <TouchableOpacity style={styles.OptionButton}>
                    <Image style={styles.Image} source={require("../Asset/transfer.png")}/>
                </TouchableOpacity>
                <Text style={styles.Text}>Transfer</Text>
            </View>

            <View style={styles.Options}>
                <TouchableOpacity style={styles.OptionButton}>
                    <Image style={styles.Image} source={require("../Asset/payment.png")}/>
                </TouchableOpacity>
                <Text style={styles.Text}>Payment</Text>
            </View>

            <View style={styles.Options}>
                <TouchableOpacity style={styles.OptionButton}>
                    <Image style={styles.Image} source={require("../Asset/payout.png")}/>
                </TouchableOpacity>
                <Text style={styles.Text}>Payout</Text>
            </View>

            <View style={styles.Options}>
                <TouchableOpacity style={styles.OptionButton}>
                    <Image style={styles.Image} source={require("../Asset/TopUp.png")}/>
                </TouchableOpacity>
                <Text style={styles.Text}>Top Up</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        height:70,
        width:300,
        left:29,
        top:185,
        flexDirection:"row",
        justifyContent:"space-evenly",
        paddingLeft:30
    },
    Options:{
        width:80,
        height:300
    },
    OptionButton:{
        height:45,
        width:45,
        borderRadius:16,
        backgroundColor:"white",
        marginBottom:10,
        alignItems:"center",
        justifyContent:"center",
        elevation:2,
        shadowOpacity:0.5,
        shadowColor:"black"
    },
    Text:{
        fontWeight:"600",
        color:"#8438FF"
    },
    Image:{
        height:35,
        width:35,
    }
})