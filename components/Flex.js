import React, {Component} from "react";
import {Text,View} from "react-native";

const Flex = props => {
    return (
        <View style={{ flex:1 }}>
            <View style={{ flex:1, backgroundColor:"#e1cdb5" }} />
            <View style={{ flex:2, backgroundColor:"#90708c" }} />
            <View style={{ flex:3, backgroundColor:"#635380" }} />
            <View style={{ flex:4, backgroundColor:"#49306b" }} />
        </View>
    );
};
export default Flex;