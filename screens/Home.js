import React from "react";
import { View } from "react-native";
import Avatar from "../Components/Avartar";
import Feed from "../Components/FeedHistory";
import OptionsMenu from "../Components/OptionsMenu";
import SectionMenu from "../Components/SectionMenu";
import StatusBar from "../Components/StatusBar";

export default function Home(){
    return(    
    <>
        <Avatar />
      <StatusBar/>
      <OptionsMenu />
      <Feed top={210} left={20}/>
      <SectionMenu top={220} />
    </>
    )
}