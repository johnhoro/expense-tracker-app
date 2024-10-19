import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/screenWrapper";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";
import { expensesRef } from "../config/firebase";
import Loading from "../components/loading";
import EmptyList from "../components/emptyList";
import { addDoc } from "firebase/firestore";
import { getSoberColor } from "../constants/utils";

export default function AddExpenseScreen(props) {
  let { id } = props.route.params;
  const [expenseFor, setExpenseFor] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseCategory, setExpenseCategory] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const category = ["Food", "Shopping", "Movie", "Travel", "Others"];

  const handleAddExpense = async () => {
    if (expenseFor && expenseAmount && expenseCategory) {
      setLoading(true);
      let doc = await addDoc(expensesRef, {
        expenseFor,
        expenseAmount,
        expenseCategory,
        // tripId:id,
      });
      navigation.navigate("TripExpense");
      setLoading(false);
      if (doc && doc.id) navigation.navigate("TripExpense");
    } else {
      navigation.navigate("TripExpense");
      // show error
      setLoading(false);
      console.log("error");
    }
  };
  const handleCategory = (item) => {
    setExpenseCategory(item);
  };

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>

            <Text className="text-xl font-bold text-center">Add Expense</Text>
          </View>

          <View className="flex-row justify-center my-3 mt-5">
            <Image
              source={require("../../assets/images/signin.jpg")}
              className="w-72 h-72"
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className="text-xl font-bold">For What?</Text>
            <TextInput
              value={expenseFor}
              onChangeText={(value) => setExpenseFor(value)}
              className="p-4 bg-white rounded-full"
            />
            <Text className="text-xl font-bold">How Much?</Text>
            <TextInput
              value={expenseAmount}
              onChangeText={(value) => setExpenseAmount(value)}
              className="bg-white rounded-full p-4"
            />
          </View>
          <View className="space-y-2 mx-2 mt-2">
            <Text className="text-xl font-bold">Category</Text>
            <FlatList
              data={category}
              numColumns={4}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <EmptyList message={"You have not recorder trip yet"} />
              }
              keyExtractor={(item) => item}
              className="mx-1 flex flex-col"
              renderItem={({ item, i }) => {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: expenseCategory === item ? getSoberColor() : "white", // Apply the random background color here
                    }}
                    onPress={() => handleCategory(item)}
                    className="rounded-2xl shadow-sm mb-3 p-3 mr-4"
                  >
                    <View>
                      <Text className="font-bold">{item}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>

        <View>
          {loading ? (
            <Loading />
          ) : (
            <TouchableOpacity
              onPress={handleAddExpense}
              className="my-6 rounded-full bg-green-500 p-4"
            >
              <Text className="text-white text-center text-lg font-bold">
                Add Expense
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}
