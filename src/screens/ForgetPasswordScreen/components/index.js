import React from 'react';
import {
    View, SafeAreaView, Text, ActivityIndicator, Platform, StatusBar,
    RefreshControl, TouchableOpacity, ScrollView, Image, FlatList, ViewBase, TextInput, Dimensions
} from 'react-native';


const screenheigt = Dimensions.get("screen").height;
const screenwidth = Dimensions.get("screen").width;
const ForgetPasswordComponent = ({ navigation, isLinkSent,
    eMail,
    setEMail,
    forgotPassword,
}) => {
    const EmailAreaConfirm = () => {
        return (
            <View style={{

                flexDirection: 'row', backgroundColor: 'white', borderRadius: 50,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                alignItems: 'center',
                paddingLeft: 30,
                marginTop: 30,

                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            }}>
                <Text style={{ fontFamily: 'billy', fontSize: 20, paddingTop: -1, }}>Email</Text>
                <View style={{ flex: 2 }}>
                    <TextInput
                        placeholder='Enter Email'
                        value={eMail}
                        style={{ marginLeft: 20, }}
                        onChangeText={(text) => setEMail(text)}
                    />
                </View>


            </View>

        )
    }
    const EmailDetail = () => {
        return (

            <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: 'billy', color: '#FFFFFF', textAlign: 'center', fontSize: 34, fontWeight: '600', paddingTop: 3, }}>
                    Password reset link was sent.{"\n"} Check your email to proceed{"\n"} further steps
                </Text>
            </View>
        )

    }

    const Submitbutton = () => {
        return (
            <TouchableOpacity
                onPress={forgotPassword}>
                <View style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                    alignItems: 'center',
                    backgroundColor: '#FFA500', borderRadius: 70,

                }}>

                    <Text style={{ fontSize: 20, paddingVertical: 10, color: "white" }}>
                        {isLinkSent ? 'Reset' : 'Back'}
                    </Text>

                </View>
            </TouchableOpacity >
        )
    }
    const MainView = () => {
        return (
            <View style={{ flex: 1, }}>


                <View style={{ marginTop: 50 }} >

                </View>
                <View style={{ marginHorizontal: 30, }}>
                    {isLinkSent ? EmailAreaConfirm()
                        : EmailDetail()}
                </View>
                {
                    isLinkSent ?
                        <Text style={{ fontFamily: 'billy', fontSize: 20, textAlign: 'center', marginTop: 5 }} >
                            Password reset link will be sent to your email!
                        </Text>
                        :
                        null}


                <View style={{
                    marginHorizontal: 100, paddingBottom: 20, marginTop: 40,
                }}>

                    <Submitbutton />

                </View>

            </View>
        )
    }
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#DDCBE5' }}>
            <View style={{ flex: 1, backgroundColor: '#DDCBE5' }}>

                {MainView()}


            </View>
        </SafeAreaView>
    )
}
export default ForgetPasswordComponent;