
import firestore from '@react-native-firebase/firestore';

export const OrderRideAPI = async (data) => {

    firestore()
        .collection('OrdersRide')
        .doc(Math.random(100000).toString())
        .set(data)
        .then(() => {
            console.log('User added! ride order');
        });

}

export const getOrdersRideAPI = async () => {

    var user = await firestore().collection('OrdersRide').get();
    user = user._docs
    user = user.map(item => item._data)
    return (user)
}