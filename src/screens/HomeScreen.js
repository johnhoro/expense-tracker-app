import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";

const items = [
  {
    id: 1,
    place: "Ranchi",
    country: "india",
  },
  {
    id: 2,
    place: "Ranchi",
    country: "india",
  },
  {
    id: 3,
    place: "Ranchi",
    country: "india",
  },
  {
    id: 4,
    place: "Ranchi",
    country: "india",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className="text-3xl font-bold shadow-sm">Expense Tracker</Text>
        <TouchableOpacity className="p-2 px-3 bg-white rounded-full">
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
          <TouchableOpacity className="p-2 px-3 bg-white rounded-full">
            <Text>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 430}}>
          <FlatList
            data={items}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            className="mx-1"
            renderItem={({ item }) => {
              return (
                <TouchableOpacity className="bg-white rounded-2xl shadow-sm mb-3 p-3">
                  <View>
                    <Image
                      source={require("../../assets/images/travel1.png")}
                      className="w-36 h-36 mb-2"
                    />
                    <Text className="font-bold"> {item.place}</Text>
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
