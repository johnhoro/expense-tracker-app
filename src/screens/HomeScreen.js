import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWrapper from "../components/screenWrapper";
import EmptyList from "../components/emptyList";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, tripRef } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/user";
import { getDocs, query, where } from "firebase/firestore";
import { randomImage } from "../constants/utils";

const items = [
  {
    id: 1,
    place: "Ranchi",
    country: "india",
    image: require("../../assets/images/travel1.png"),
  },
  {
    id: 2,
    place: "Ranchi",
    country: "india",
    image: require("../../assets/images/travel2.jpg"),
  },
  {
    id: 3,
    place: "Ranchi",
    country: "india",
    image: require("../../assets/images/travel3.jpeg"),
  },
  {
    id: 4,
    place: "Ranchi",
    country: "india",
    image: require("../../assets/images/travel4.jpeg"),
  },
  {
    id: 5,
    place: "Ranchi",
    country: "india",
    image: require("../../assets/images/travel6.jpg"),
  },
  {
    id: 6,
    place: "Ranchi",
    country: "india",
    image: require("../../assets/images/travel7.jpg"),
  },
  {
    id: 7,
    place: "Ranchi",
    country: "india",
    image: require("../../assets/images/travel8.png"),
  },
  {
    id: 8,
    place: "Ranchi",
    country: "india",
    image: require("../../assets/images/travel9.png"),
  },
];
const imageCollection={
  1: require("../../assets/images/travel1.png"),
  2: require("../../assets/images/travel2.jpg"),
  3: require("../../assets/images/travel3.jpeg"),
  4: require("../../assets/images/travel4.jpeg"),
  5: require("../../assets/images/travel6.jpg"),
  6: require("../../assets/images/travel7.jpg"),
  7: require("../../assets/images/travel8.png"),
  8: require("../../assets/images/travel9.png")
}


export default function HomeScreen() {
  const navigation= useNavigation()
  const dispatch= useDispatch()
  const {user}= useSelector(state=> state.user);
  const [trips, setTrips]= useState([]);
  const isFocused= useIsFocused()

const fetchTrips=async()=>{
  const q= query(tripRef, where("userId", "==", user.uid));
  const querySnapshot= await getDocs(q);
  let data=[];
  querySnapshot.forEach((doc,i)=>{
    // console.log(doc, "dayta");
    data.push({...doc.data(), id:doc.id});
  })
  setTrips(data);

}

useEffect(()=>{
  fetchTrips();
},[isFocused])

const handleLogout=async()=>{
  await signOut(auth)
}

  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className="text-3xl font-bold shadow-sm">Expense Tracker</Text>
        <TouchableOpacity onPress={handleLogout} className="p-2 px-3 bg-white rounded-full">
          <Text>Logout</Text>
        </TouchableOpacity>
        {/* <Button
          title="Login Screen"
          onPress={() => navigation.navigate('Login')}
        /> */}
      </View>
      <View className="flex-row justify-center items-center bg-white rounded-xl mx-4 mb-4">
        <Image
          source={require("../../assets/images/expense-image.jpg")}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-3">
        <View className="flex-row justify-between items-center">
          <Text className="font-bold text-xl">Recent Trip</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("AddTrip")} className="p-2 px-3 bg-white rounded-full">
            <Text>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 430}}>
          <FlatList
            data={trips}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyList message={"You have not recorder trip yet"}/>}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            className="mx-1"
            renderItem={({ item, i }) => {
              console.log("image", randomImage())
              return (
                <TouchableOpacity className="bg-white rounded-2xl shadow-sm mb-3 p-3">
                  <View>
                    <Image
                      source={randomImage()}
                      className="w-36 h-36 mb-2"
                    />
                    <Text className="font-bold">{item.place}</Text>
                    <Text className="text-xs">{item.country}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
