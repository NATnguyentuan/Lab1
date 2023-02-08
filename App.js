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