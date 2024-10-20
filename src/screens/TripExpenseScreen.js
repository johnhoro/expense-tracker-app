import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWrapper from "../components/screenWrapper";
import BackButton from "../components/backButton";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getDocs, query, where } from "firebase/firestore";
import { expensesRef, tripRef } from "../config/firebase";
import EmptyList from "../components/emptyList";
import { getSoberColor } from "../constants/utils";

export default function TripExpenseScreen(props) {
  const { id, place, country } = props.route.params;
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [expenses, setExpenses] = useState([]);

  const fetchExpense = async () => {
    const q = query(expensesRef, where("tripId", "==", id));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc, i) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setExpenses(data);
  };
  useEffect(() => {
    fetchExpense();
  }, [isFocused]);

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <Text className="text-xl font-bold text-center">{place}</Text>
            <Text className="text-center">{country}</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Home")} className="absolute left-0 top-0">
                <Text className="text-blue-600 text-lg">Back</Text>
              </TouchableOpacity>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              source={require("../../assets/images/travel10.png")}
              className="w-72 h-72"
            />
          </View>
        </View>
        <View className="px-4 space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className="font-bold text-xl">Expense</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AddExpense", { id, place, country })
              }
              className="p-2 px-3 bg-white rounded-full"
            >
              <Text>Add Expense</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 430 }}>
            <FlatList
              data={expenses}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <EmptyList message={"You have not recorder trip yet"} />
              }
              keyExtractor={(item) => item.id}
              className="mx-1"
              renderItem={({ item, i }) => {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: getSoberColor(), // Apply the random background color here
                    }}
                    className="rounded-2xl shadow-sm mb-4 p-3"
                  >
                    <View className="flex-row justify-between items-center">
                      <View>
                        <Text className="font-bold">{item.expenseFor}</Text>
                        <Text className="text-xs">{item.expenseCategory}</Text>
                      </View>
                      <Text>{item.expenseAmount}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
