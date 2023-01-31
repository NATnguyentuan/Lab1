import { FlatList, Text, View, StyleSheet, Image } from "react-native";

const ProductItem = (props) => {
    const item = props.item;
    //tên sp là item.name, giá item.price...
    return (
        <>
            <View style={styles.list}>
                <Image style={{ width: 60, height: 60, borderRadius: 30, marginBottom: 30 }} source={require('../../../assets/avt.jpg')} />
                <View style={styles.text}>
                    <Text>Tên: {item.name}</Text>
                    <Text>Mô tả: {item.desc}</Text>
                </View>
            </View>
        </>
    );
};

// export default function ProductList(props) {}
const ProductList = (props) => {
    //khi data không được truyền vào thì mặc định là []
    const list = props.data || [];

    return (
        <FlatList
            data={list}
            renderItem={({ item }) => <ProductItem item={item} />}
            keyExtractor={(item) => item.id}
        />
    );

};
export default ProductList;

const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: 'row',
    },
    text:{
        marginLeft:20,
        marginTop: 10,
    }
});