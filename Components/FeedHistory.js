import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Feed(props){
    return(
        <View style={styles.container} style={{
        width:"100%",
        top:props.top,
        left:props.left,
        width:320,
        height:215
        }} >
            <Text style={styles.Text}>Ultimas transações</Text>
            <View style={styles.Line}></View>
            <View style={styles.Divisor}></View>
            <ScrollView showsVerticalScrollIndicator={true} >
                <View style={styles.TrasitionContainer}>
                <View style={styles.Container2}>
                <Image style={styles.Image} />
                <View style={styles.Texts}>
                    <Text style={styles.Name}>Netflix</Text>
                    <Text style={styles.Description}>Pagamento Mensal</Text>
                </View>
                </View>
                <Text style={styles.Price}>R$20</Text>
                </View>

                <View style={styles.TrasitionContainer}>
                <View style={styles.Container2}>
                <Image style={styles.Image} />
                <View style={styles.Texts}>
                    <Text style={styles.Name}>Shoppe</Text>
                    <Text style={styles.Description}>Compra</Text>
                </View>
                </View>
                <Text style={styles.Price}>R$55</Text>
                </View>

                <View style={styles.TrasitionContainer}>
                <View style={styles.Container2}>
                <Image style={styles.Image} />
                <View style={styles.Texts}>
                    <Text style={styles.Name}>App Store</Text>
                    <Text style={styles.Description}>Compra</Text>
                </View>
                </View>
                <Text style={styles.Price}>R$2,55</Text>
                </View>

                <View style={styles.TrasitionContainer}>
                <View style={styles.Container2}>
                <Image style={styles.Image} />
                <View style={styles.Texts}>
                    <Text style={styles.Name}>PicPay</Text>
                    <Text style={styles.Description}>Dia</Text>
                </View>
                </View>
                <Text style={styles.Price}>R$10</Text>
                </View>

                
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    TrasitionContainer:{
        width:"100%",
        height:50,
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:10
    },
    Text:{
        fontSize:20,
        fontWeight:"bold"
    },
    Line:{
        height:2,
        width:250,
        backgroundColor:"black",
        left:25,
        top:10
    },
    Divisor:{
        width:"100%",
        height:20
    },
    Name:{
        fontSize:18,
        fontWeight:"600"
    },
    Description:{
        color:"#BDBDBD",
    },
    Image:{
        height:48,
        width:48,
        borderRadius:50,
        backgroundColor:"orange",
        position:"relative",
    },
    Container2:{
        flexDirection:"row"
    },
    Texts:{
        position:"relative",
        left:15
    },
    Price:{
        fontSize:18,
        fontWeight:"600"

    }
})