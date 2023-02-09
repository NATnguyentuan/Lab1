
import * as React from "react";
import { View, Text, Image, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from "./style";

const Home = (progs) => {
  const nav = progs.navigation;
  const name = "Nguyễn Anh Tuấn";
  const age = 20;
  const address = "Hải Dương";
  const phoneNumber = "0123456789";
  const email = "tuannaph27891@fpt.edu.vn";

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 90 }}>
      <Image source={require("./assets/avt.jpg")} style={styles.photo} />
      <View style={styles.button}>
        <Button
          title="Profile"
          onPress={() =>
            nav.navigate("Profile", {
              name: name,
              age: age,
              address: address,
              phoneNumber: phoneNumber,
              email: email,
            })
          }
        ></Button>
      </View>
    </View>
  );
};
const EditProfile = (progs) => {
  const nav = progs.navigation;
  const route = progs.route;
  const getName = route.params?.name || "";
  const getAge = route.params?.age || 0;
  const getAddress = route.params?.address || "";
  const getPhone = route.params?.phoneNumber || "";
  const getEmail = route.params?.email || "";

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            width: 250,
            height: 100,
          }}
        />
      </View>
      <View style={styles.input}>
        <TextInput value={getName} />
        <TextInput value={getAge} />
        <TextInput value={getAddress} />
        <TextInput value={getPhone} />
        <TextInput value={getEmail} />
      </View>

      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Button title="Home" onPress={() => nav.navigate("Home")}></Button>
        <Button title="Save" onPress={() => nav.navigate("Profile")}></Button>
      </View>
    </View>
  );
};

const Profile = (progs) => {
  const nav = progs.navigation;
  const route = progs.route;
  const getName = route.params?.name || "Nguyễn Anh Tuấn";
  const getAge = route.params?.age || 21;
  const getAddress = route.params?.address || "Hải Dương";
  const getPhone = route.params?.phoneNumber || "0335076529";
  const getEmail = route.params?.email || "tuannaph27891@gmail.com";
  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            width: 250,
            height: 100,
          }}
          
        />
      </View>

      <Text style={styles.text}>Tên: {getName}</Text>
      <Text style={styles.text}>Tuổi: {getAge}</Text>
      <Text style={styles.text}>Địa chỉ: {getAddress}</Text>
      <Text style={styles.text}>Số điện thoại: {getPhone}</Text>
      <Text style={styles.text}>Email: {getEmail}</Text>
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Button title="Home" onPress={() => nav.navigate("Home")}></Button>
        <Button
          title="Edit Profle"
          onPress={() =>
            nav.navigate("EditProfile", {
              name: getName,
              age: getAge,
              address: getAddress,
              phoneNumber: getPhone,
              email: getEmail,
            })
          }
        ></Button>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

=======
import { NavigationContainer }
    from "@react-navigation/native";
import { createNativeStackNavigator }
    from '@react-navigation/native-stack';
import Manager from './Manager'; // file App cũ
import {View, Text, Button, Image} from 'react-native';
const Stack = createNativeStackNavigator();

const dataProduct = [
    { id: 1, name: '123', desc: '123' },
    { id: 2, name: '456', desc: '456' },
    { id: 3, name: '789', desc: '789' },
  
  ];

// Tạo ra thêm 1 màn hình About để quản lý
const Home = (props) => {
    const nav = props.navigation;
    return (<View style={{alignItems: "center"}}>
        <Image style={{ width: 200, height: 200 }} source={require('./assets/avt.jpg')} />
        <Button
            title='Quản lý'
            onPress={() => nav.navigate(
                'Quản lý',
                {list: dataProduct}
            )}
        />
        <Button
            title='About'
            onPress={() => nav.navigate(
                'About',
                {name: 'Nguyễn Anh Tuấn', MSV: 'PH27891'},
            )}
        />
    </View>);
};

const About = (props) => {
    const route = props.route;
    const name = route.params.name;
    const MSV = route.params.MSV;
    return (<View>
        <Text>Họ tên: {name}</Text>
        <Text>MSV: {MSV}</Text>
        
    </View>);
};

const App = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Quản lý" component={Manager}
            />
            <Stack.Screen
                name='About' component={About}
            />
            <Stack.Screen
                name='Home' component={Home}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
};
export default App;
