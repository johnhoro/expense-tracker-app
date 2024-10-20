import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/screenWrapper";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native"
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoading } from "../redux/slices/user";
import Loading from "../components/loading";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {userLoading}= useSelector(state=> state.user);
  const dispatch= useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const navigation= useNavigation();

    // Sign up user with email and password
    const handleSignUp = async () => {
      if(email && password){
          dispatch(setUserLoading(true))
          await createUserWithEmailAndPassword(auth, email, password);
          dispatch(setUserLoading(false))
      }else {
        setErrorMessage('Email and Password field cannot be empty.');
        dispatch(setUserLoading(false))
        console.log("error")
      }
    };
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <Text className="text-xl font-bold text-center">Sign Up</Text>
            <TouchableOpacity onPress={()=> navigation.goBack()} className="absolute left-0 top-0">
                <Text className="text-blue-600 text-lg">Back</Text>
              </TouchableOpacity>
          </View>

          <View className="flex-row justify-center my-3 mt-5">
            <Image
              source={require("../../assets/images/signup.jpg")}
              className="w-72 h-72"
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className="text-xl font-bold" >Email</Text>
            <TextInput value={email} onChangeText={value=> setEmail(value)} className="p-4 bg-white rounded-full" />
            <Text className="text-xl font-bold">Password</Text>
            <TextInput value={password} onChangeText={value=> setPassword(value)} className="bg-white rounded-full p-4"/>
          </View>
        </View>

        <View>
        {errorMessage ? <Text className="text-sm text-red-600">{errorMessage}</Text> : null}
          {userLoading? (
            <Loading/>
          ): (
            <TouchableOpacity onPress={handleSignUp} className="my-6 rounded-full bg-green-500 p-4">
            <Text className="text-white text-center text-lg font-bold">Sign Up</Text>
           </TouchableOpacity>
          )}
        </View>
      </View>
    </ScreenWrapper> 
  );
}
