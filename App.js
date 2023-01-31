
import { Button, ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react';


import ProductList from './src/screens/ProductList';

//Ds truyền sang cho ProductList
const dataProduct = [
  { id: 1, name: 'tên', desc: 'mô tả ', image: '../../../assets/avt.jpg' },
  { id: 2, name: 'tên', desc: 'mô tả', image: '../../../assets/avt.jpg' },
  { id: 3, name: 'tên', desc: 'mô tả', image: '../../../assets/avt.jpg' },

];

export default function App() {


  const [showHideView, setShowHideView] = useState(false);



  return (

    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.text}>Họ tên: Nguyễn Anh Tuấn</Text>
        <Text style={styles.text}>MSV: PH27891</Text>
      </View>
      {showHideView
        ?
        <>
          <TextInput placeholder='Tên' />
          <TextInput placeholder='Mô tả' />
          <TextInput placeholder='Link ảnh' />
          <View style={styles.button}>
            <Button title='Hủy' onPress={() => setShowHideView(!showHideView)} />
            <Button title='lưu' />
          </View>
        </>

        :

        <Button
          title={'Thêm mới'}
          onPress={() => setShowHideView(!showHideView)}
        />
      }
      <View style={styles.list}>
      <ProductList data={dataProduct} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    margin:20,
  },
  info: {
    marginBottom:15,
  },
  text: {
    fontSize:25,
  },
  button: {
    flex: 0.1,
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    bottom: 10,
  },
  list: {
    marginTop:30,
    borderWidth:2,
    borderRadius:10,
    padding: 20,
  },
});
