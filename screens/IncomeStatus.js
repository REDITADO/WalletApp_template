import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart} from "react-native-chart-kit"
import {Picker} from '@react-native-picker/picker';
import Feed from "../Components/FeedHistory";
import SectionMenu from "../Components/SectionMenu";


let data ={
    labels:[
        "03","04","05","06","07","08"
    ],
    datasets:[
        {
            data:[20,45,28,80,99,43]
        }
    ]
}
let chartConfig ={
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    
}
export default function IncomeStatus(){
    const [Mes,SetMes] = useState("Janeiro")
    return(
        <View style={styles.Container}>
            <Text style={styles.TitlePage}>Income Status</Text>

            <View  style={styles.graph}>
                <Picker selectedValue={Mes} onValueChange={(item)=>{SetMes(item)}} style={styles.MesPicker}>
                    <Picker.Item label="Dezembro" value={"Dezembro"} />
                    <Picker.Item label="Janeiro" value={"Janeiro"} />
                </Picker>
               <LineChart data={data} width={Dimensions.get("window").width} height={200} yAxisLabel="$" chartConfig={chartConfig}  style={{borderRadius: 26,overflow:"scroll",right:25}}/>
            </View>
            <View style={styles.Balance}>
                <Text style={styles.TotalBalance} >Total Balance</Text>
                <Text style={styles.Amount}>R$3.500</Text>
            </View>
            {/* <Feed top={80} left={0}/>
            <SectionMenu top={80} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        flexDirection:"column",
        width:"100%",
        alignItems:"center",
        padding:25,
        top:"1%",
        overflow:"scroll"
    }
    ,
    TitlePage:{
        alignSelf:"flex-start",
        fontSize:16,
        fontWeight:"700"
    },
    graph:{
        alignSelf:"center",
        top:50,
    },
    Balance:{
        position:"relative",
        top:80,
    },
    TotalBalance:{
        color:"#8B98B1",
        fontSize:17,
        fontWeight:"600",
        textAlign:"center"
    },
    Amount:{
        fontSize:35,
        fontWeight:"700",
        color:"#9038FF"
    },
    MesPicker:{
    left:150,
    width:150,
    bottom:23
    },
    
})