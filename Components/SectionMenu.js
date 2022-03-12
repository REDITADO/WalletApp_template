import React, { Component, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Feather, Foundation, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
let lastName = "Wallet"

export default class SectionMenu extends Component{
    constructor(props){
        super(props)
        this.state = {
          Wallet:"Selected",
          graph:null,
          alert:null,
          status:null
        }
    }
     Select(style,route){
        if(lastName&& lastName!== route){
           this.setState({[lastName]:null})
    }
        if(!this.state[route] && style=="Selected"){
           this.setState({[route]:style})
    }
    lastName = route
    }
    render(){
    return( 
        <View style={
            {
                height:78,
                width:327,
                borderRadius:30,
                flexDirection:"row",
                backgroundColor:"#2F1155",
                alignSelf:"center",
                position:"relative",
                top:this.props.top,
                alignItems:"center",
                justifyContent:"space-evenly",
                padding:20
            }
        }>
            <TouchableOpacity >
                <MaterialCommunityIcons name="wallet-outline" size={25} color={"#FFFFFF"} onPress={(e)=>{this.Select("Selected","Wallet")}} style={this.state.Wallet=="Selected"?styles.Selected:null} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Foundation name="graph-bar" size={25} color={"#FFFFFF"}  onPress={(e)=>{this.Select("Selected","graph")}} style={this.state.graph=="Selected"?styles.Selected:null}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="ios-notifications" size={25} color={"#FFFFFF"}  onPress={(e)=>{this.Select("Selected","alert")}} style={this.state.alert=="Selected"?styles.Selected:null}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <MaterialCommunityIcons name="hexagon-slice-6" size={25} color={"#FFFFFF"}  onPress={(e)=>{this.Select("Selected","status")}} style={this.state.status=="Selected"?styles.Selected:null}/>
            </TouchableOpacity>
        </View>
    );
      }
}

const styles = StyleSheet.create({
    Selected:{
        backgroundColor:"white",
        borderRadius:10,
        width:30,
        height:30,
        textAlign:"center",
        paddingTop:2,
        color:"black"
    }
})