import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const googleIconUrl = "../../../assets/images/googleIcon.png";

function Signin({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<string>("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handleSubmit = () => {
    console.log(email);
    navigation.navigate("Onboard1");
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className=" w-[80%] bg-[--secondary-background] p-12 rounded-lg flex items-center ">
        <Text className="text-4xl font-bold">Sign In</Text>
        <Text className="text-md text-gray-500">Welcome !</Text>
        <TouchableOpacity className="w-full rounded-lg mt-6 mb-4 overflow-hidden">
          <LinearGradient
            colors={["#ddd1ff", "#4299e1"]}
            className="flex-row items-center justify-center bg-secondary rounded-lg w-full py-3 "
            start={{x:0,y:0}}
            end={{x:1,y:0}}
          >
            <Image source={require(googleIconUrl)} className="h-5 w-5 mr-3" />
            <Text className="text-black">Sign Up with Google</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View className="relative w-[85%] my-2">
          <View className="border-t border-gray-300"></View>
          <Text className="absolute text-xs bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-gray-100 px-2">
            OR
          </Text>
        </View>
        <TextInput
          style={{ padding: 10, height: 40, width: "100%" }}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          className="mt-3 border border-black/20 rounded-lg outline-none bg-white"
        />
        <TouchableOpacity
          className="bg-black mt-5 w-[100%] py-3 rounded-lg"
          onPress={handleSubmit}
        >
          <Text className="text-white text-center">Continue with email</Text>
        </TouchableOpacity>
        <View className="text-xs mt-3 flex-row h-10">
          <Text>Not a user?</Text>
          <Text className="text-blue-500 h-3">
            <TouchableOpacity
              onPress={() => navigation.navigate("Signup")}
              className="h-10"
            >
              <Text className="h-10 text-primary"> Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Signin;
