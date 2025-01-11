import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import Button from '../../components/Button/Button'

const Onboard1 = () => {
  return (
    <View className="bg-[--primary-background] w-[100vw] h-[100vh] flex items-center justify-center">
      <View className="bg-[--secondary-background]  w-[80%] h-[500px] rounded-md flex flex-col shadow-lg gap-5 pt-2">
        <View className="w-[90%] mt-5 h-[50px] mx-auto flex flex-col justify-center items-center ">
          <Text className="text-4xl">Hello There!!</Text>
          <Text className="text-[--graytext] text-sm ">
            Help us know you more !
          </Text>
        </View>

        <View className="w-[75%]  h-[300px] mx-auto flex flex-col gap-3">
          <View>
            <Text className="ml-2">Name</Text>
            <TextInput
              className="outline-none py-2 w-[100%] mx-auto mt-2 rounded-xl px-3 text-lg border border-black/20 bg-white"
              placeholder="Enter your name"
            />
          </View>

          <View>
            <Text className="ml-2">Age</Text>
            <TextInput
              className="outline-none py-2 w-[100%] mx-auto mt-2 rounded-xl px-3 text-lg border border-black/20 bg-white"
              placeholder="Enter your age"
            />
          </View>

          <View>
            <Text className="ml-2">Height</Text>
            <TextInput
              className="outline-none py-2 w-[100%] mx-auto mt-2 rounded-xl px-3 text-lg border border-black/20 bg-white"
              placeholder="Enter your height"
            />
          </View>

          <View>
            <Text className="ml-2">Weight</Text>
            <TextInput
              className="mb-3 outline-none py-2 w-[100%] mx-auto mt-2 rounded-xl px-3 text-lg border border-black/20 bg-white"
              placeholder="Enter your Weight "
            />
          </View>

          {/* <Button >Submit</Button> */}

          <TouchableOpacity className="rounded-xl overflow-hidden">
            <LinearGradient
            colors={["#ddd1ff", "#4299e1"]}
            className="flex-row items-center justify-center bg-inherit rounded-lg w-full py-3"
            start={{x:0,y:0}}
            end={{x:1,y:0}}
          >
              <Text className="text-black">Submit</Text>
           
          </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboard1;
