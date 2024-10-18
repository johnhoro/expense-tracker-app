import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/screenWrapper";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignIn = () => {
    if (email && password) {
      navigation.goBack()
      navigation.navigate("Home");
    } else {
      // show error
    }
  };
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>

            <Text className="text-xl font-bold text-center">Sign In</Text>
          </View>

          <View className="flex-row justify-center my-3 mt-5">
            <Image
              source={require("../../assets/images/travel10.png")}
              className="w-72 h-72"
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className="text-xl font-bold" >Email</Text>
            <TextInput value={email} onChangeText={value=> setEmail(value)} className="p-4 bg-white rounded-full" />
            <Text className="text-xl font-bold">Password</Text>
            <TextInput value={password} onChangeText={value=> setPassword(value)} className="bg-white rounded-full p-4"/>
              <TouchableOpacity>
                <Text className="text-right">
                  Forget Password?
                </Text>
              </TouchableOpacity>
          </View>
        </View>

        <View>
         <TouchableOpacity onPress={handleSignIn} className="my-6 rounded-full bg-green-500 p-4">
          <Text className="text-white text-center text-lg font-bold">Sign In</Text>
         </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper> 
  );
}
