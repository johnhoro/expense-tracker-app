import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/screenWrapper";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";

export default function AddTripScreen() {
  const [country, setCountry] = useState("");
  const [place, setPlace] = useState("");
  const navigation = useNavigation();

  const handleAddTrip = () => {
    if (country && place) {
      navigation.navigate("Home");
    } else {
      // show error
    }
  };
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View>
            <View>
              <BackButton />
            </View>
            <Text className="text-xl font-bold text-center">Add Trip</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/images/travel10.png")}
              className="w-30 h-30"
            />
          </View>
          <View>
            <Text>Where on Earth ?</Text>
            <TextInput value={place} onChangeText={value=> setPlace(value)} />
            <Text>Which Country</Text>
            <TextInput value={country} onChangeText={value=> setCountry(value)}/>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={handleAddTrip}>
            <Text className="text-center text-white text-lg font-bold">
              Add Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
