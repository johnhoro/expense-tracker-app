import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/screenWrapper";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";
import { useSelector } from "react-redux";
import { addDoc } from "firebase/firestore";
import { tripRef } from "../config/firebase";

export default function AddTripScreen() {
  const [country, setCountry] = useState("");
  const [place, setPlace] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading]= useState(false);
  const {user}= useSelector(state=> state.user);

  const handleAddTrip = async() => {
    if (country && place) {
      navigation.navigate("Home");
      setLoading(true);
      let doc= await addDoc(tripRef, {
        place,
        country,
        userId:user.uid
      })
      setLoading(false);
      if(doc && doc.id){
        navigation.goBack();
      }

    } else {
      // show error
    }
  };
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <Text className="text-xl font-bold text-center">Add Trip</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Home")} className="absolute left-0 top-0">
                <Text className="text-blue-600 text-lg">Back</Text>
              </TouchableOpacity>
          </View>

          <View className="flex-row justify-center my-3 mt-5">
            <Image
              source={require("../../assets/images/addtrip1.jpg")}
              className="w-72 h-72"
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className="text-xl font-bold" >Where on Earth ?</Text>
            <TextInput value={place} onChangeText={value=> setPlace(value)} className="p-4 bg-white rounded-full" />
            <Text className="text-xl font-bold">Which Country?</Text>
            <TextInput value={country} onChangeText={value=> setCountry(value)} className="bg-white rounded-full p-4"/>
          </View>
        </View>

        <View>
          {loading? (
            <Loading/>
          ): (
            <TouchableOpacity onPress={handleAddTrip} className="my-6 rounded-full bg-green-500 p-4">
            <Text className="text-white text-center text-lg font-bold">Add Trip</Text>
           </TouchableOpacity>
          )}
       
        </View>
      </View>
    </ScreenWrapper> 
  );
}
