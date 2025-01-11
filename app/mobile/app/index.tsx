import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home/Home";
import Signup from "./screens/signup/Signup";
import Signin from "./screens/signin/Signin";
import Dashboard from "./screens/dashbaord/Dashboard";
import { HomeIcon, LayoutDashboard} from "lucide-react-native";
import Onboard1 from "./screens/onboard/Onboard1";

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
      tabBarStyle: {
        backgroundColor: '#E4E4E4',
        borderTopWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        width: '40%',
        borderRadius: 100,
        marginHorizontal: '30%',
        marginBottom: 10,
        height: 70,
      },
      tabBarItemStyle: {
          width: 60,
          height: 60,
          borderRadius: 100, 
          backgroundColor: 'white',
          marginHorizontal: 5,
          marginVertical: 5,
          display: 'flex',
          alignItems: 'center',
        },
        tabBarIconStyle: {
          width: 40,
          height: 40,
          top: 10,
          position: 'absolute',
        },
      tabBarShowLabel: false, // Hide labels
        headerShown: false,
    }}>
      <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <HomeIcon color={color}/>
          ),
        }}/>
        <Tab.Screen name="Dashboard" component={Dashboard} options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <LayoutDashboard color={color}/>
          ),
        }}/>
    </Tab.Navigator>
  );
}

export default function Index() {
  return (
      <RootStack.Navigator>

        <RootStack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Signup" component={Signup} options={{
          headerShown: false
        }} />
        <RootStack.Screen name="Signin" component={Signin} options={{
          headerShown: false
        }}/>
        <RootStack.Screen name="Onboard1" component={Onboard1} options={{
          headerShown: false
        }}/>
      </RootStack.Navigator>
  );
}
