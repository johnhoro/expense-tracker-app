import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/screenWrapper";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, expensesRef } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/loading";
import { setUserLoading } from "../redux/slices/user";
import EmptyList from "../components/emptyList";
import { addDoc } from "firebase/firestore";

export default function AddExpenseScreen() {
  const [expenseFor, setExpenseFor] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseCategory, setExpenseCategory] = useState("");
  const navigation = useNavigation();
  const [loading,setLoading]=useState(false);
  const {user}= useSelector(state=> state.user);
  const dispatch=useDispatch();

  const category=["Food","Shopping", "Movie","Travel", "Others"];

  const handleAddExpense = async() => {
    if (expenseFor && expenseAmount && expenseCategory) {
      setLoading(true);
      let doc= await addDoc(expensesRef,{
        expenseFor,
        expenseAmount,
        expenseCategory,
        userId:user.uid,
      } )
      setLoading(false)
    } else {
      // show error
      setLoading(false)
      console.log("error")
    }
  };
  const handleCategory=(item)=>{
      setExpenseCategory(item);
  }
  console.log(expenseCategory, "expenseCategoiry")
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
          <View className="space-y-2 mx-2">
            <Text className="text-xl font-bold">Category</Text>
            <FlatList
            data={category}
            numColumns={4}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyList message={"You have not recorder trip yet"}/>}
            keyExtractor={(item) => item}
            className="mx-1 flex flex-col"
            renderItem={({ item, i }) => {
              return (
                <TouchableOpacity onPress={()=>handleCategory(item)} className={`${expenseCategory=== item? "bg-slate-400": "bg-white"} rounded-2xl shadow-sm mb-3 p-3 mr-4`}>
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
            <Loading/>
          ): (
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
