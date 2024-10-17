import { View , Text, Image} from "react-native";
import React from "react";

export default function EmptyList({message}){
    return (
        <View className="flex justify-center items-center space-y-3 my-5">
            <Image source={require("../../assets/images/travel12.png")} className="w-36 h-36 shadow"/>
            <Text className="font-bold text-gray-500">{message || "data not found"}</Text>
        </View>
    )
}