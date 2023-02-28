import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Dimensions, ImageBackground } from 'react-native';
import ScreenNames from '../Helpers/ScreenNames';
import { showToast, validateUserEmail } from '../Helpers/Utils';
import { GetCurrentUserDataAPI, writeUserData } from '../Helpers/ApiCalls';
import ModalDropdown from 'react-native-modal-dropdown-with-flatlist';
import colors from '../Helpers/colors';
// import SvgImage from '../Helpers/SvgImage';
import BottomSheetComponent from '../Helpers/SimpleBottomSheet';
const screenWidth = Math.round(Dimensions.get('window').width);



import CustomActivityIndicator from '../Helpers/CustomActivityIndicator';
import auth from '@react-native-firebase/auth';

import Icon from 'react-native-vector-icons/AntDesign';



const SignUp = ({ navigation }) => {
    const [Password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [Email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [userMobile, setUserMobile] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const bottomRef = useRef()
    const [typeOfAccount, setTypeOfAccount] = useState('')
    console.log('>>> typeOfAccount');
    console.log('>>> typeOfAccount ', typeOfAccount);
    const [typeOfAccountSelected, setTypeOfAccountSelected] = useState('')
    const [accountTypesArray, setAccountTypesArray] = useState([


        { name: 'User', type: 'user' },
        { name: 'Work Shop', type: 'Work Shop' },
    ])
    console.log('=>=>21typeOfAccountSelected.type', typeOfAccountSelected.type)
    const signUpMailAndPassword = () => {
        console.log('=>=>21typeOfAccountSelected.type', typeOfAccountSelected.type)
        auth()
            .createUserWithEmailAndPassword(Email, Password)
            .then(async () => {
                console.log('User account created & signed in!');
                await GetCurrentUserDataAPI()
                await writeUserData({
                    name: firstName + ' ' + lastName,
                    email: Email,
                    firstName: firstName,
                    lastName: lastName,
                    userMobile: userMobile,
                    type: typeOfAccount,


                })
                setIsLoading(false)
                navigation.navigate(ScreenNames.SignIn)
                // navigation.navigate(ScreenNames.DashboardHome)
            })
            .catch(error => {
                setIsLoading(false)
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    showToast('That email address is already in use!')
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                if (error.code === 'auth/network-request-failed') {
                    showToast('Network Error')
                }
                // console.error(error);
            });
    }
    const GropDownListing = () => {

        return (
            <View style={{
                flexDirection: 'row',
            }}>
                <ModalDropdown
                    defaultValue={typeOfAccount ? typeOfAccount : 'Type of Account'}
                    options={accountTypesArray}
                    style={[{
                        // style={{ width: '45%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 10, }}

                        width: '90%', borderWidth: 1, marginTop: 10, paddingStart: 20, height: 50, borderColor: 'white', marginLeft: 15

                    },]}

                    textStyle={[{
                        //flex: 1,

                        alignSelf: 'flex-start',
                        paddingVertical: 15,
                        paddingLeft: 10,
                        paddingStart: 5,
                        paddingRight: 30,
                        color: 'white',
                        backgroundColor: 'transparent',
                        // backgroundColor: 'red',
                        fontSize: 15,
                        fontWeight: '300',
                        width: screenWidth * 0.75,
                        borderRadius: 5,
                        // borderWidth: 0.5


                    },]}
                    dropdownStyle={[{
                        width: screenWidth * 0.75,
                        height: 80,
                        borderRadius: 6,

                    }]}

                    renderRow={(value) =>
                        <View
                            style={{
                                width: '100%',
                                backgroundColor: colors.white,
                                justifyContent: 'center',
                            }}
                            pointerEvents="none"
                        >
                            {/* <SimpleLabel
                            color={colors.lightBlack}
                            fontSizeDropDown={fontSize14}
                            backgroundColor={'transparent'}
                            fontFamily={axiLightFontFamily.fontFamily}
                            padding={10}
                            title={value.name}
                            alignSelf={'flex-start'}
                            textAlign={I18nManager.isRTL ? 'right' : 'left'}
                            marginRight={I18nManager.isRTL ? 2 : 5}
                        /> */}
                            <Text style={{ color: colors.black, fontSize: 20, paddingVertical: 5, paddingStart: 10 }} >
                                {value.name}
                            </Text>
                        </View>
                    }
                    renderButtonText={(value) =>
                        // <SimpleLabel
                        //     color={props.dropDownTextColor ? props.dropDownTextColor : colors.white}
                        //     backgroundColor={'transparent'}
                        //     fontFamily={axiLightFontFamily.fontFamily}
                        //     fontSizeDropDown={fontSize14}
                        //     title={value.name}
                        //     padding={10}
                        //     alignSelf={'flex-start'}
                        //     justifyContent={'center'}
                        //     textAlign={I18nManager.isRTL ? 'right' : 'left'}
                        //     marginRight={I18nManager.isRTL ? 2 : 5}
                        // />
                        <Text>
                            {value.name}
                        </Text>
                    }
                    onSelect={(index) => {
                        setTypeOfAccount(accountTypesArray[index].name)
                        setTypeOfAccountSelected(accountTypesArray[index])
                    }}


                />
                {/* <SvgImage
                    // source={DropDownIcon}
                    style={{ height: 20, width: 20, marginEnd: 5 }}
                /> */}
            </View>
        )
    }
    const btnActionSignUp = () => {
        // if (userName === '') {
        //     showToast('Name is rsequired!')
        // }
        // else
        if (firstName === '') {
            showToast('First Name is rsequired!')
        }
        else if (lastName === '') {
            showToast('Last Name is rsequired!')
        }
        else if (userMobile === '') {
            showToast('Mobile Number is required!')
        }
        else if (userMobile.length < 11) {
            showToast('Mobile Number is not Valid!')
        }
        else if (Email === '') {
            showToast('Email is required!')
        }
        else if (!validateUserEmail(Email)) {
            showToast('Enter Valid Email!')
        }

        else if (Password === '') {
            showToast('Password is required!')
        }
        else if (Password.length < 8) {
            showToast('Password should be at least 8 characters ')
        }
        else if (confirmPassword === '') {
            showToast('Confirm Password is required!')
        }
        else if (confirmPassword !== Password) {
            showToast('Password does not Matched!')
        }
        else {
            setIsLoading(true)
            signUpMailAndPassword()
        }

        // navigation.navigate(Screeenames.AfterSignupScreen) 
    }
    return (

        <View style={{ flex: 1, }}>
            <ImageBackground source={require('../Assets/Bgbg.jpg')} resizeMode="cover" style={{
                flex: 1,
                width: '100%', // applied to Image
            }}>
                <ScrollView>
                    <CustomActivityIndicator
                        isLoading={isLoading}
                    />
                    <View>
                        <Image
                            source={require('../Assets/Logo.png')}
                            style={{
                                marginLeft: 110,
                                width: 120,
                                height: 120,
                                marginTop: 40,


                            }}

                        />
                        <View style={{ flex: 1, marginTop: 20, }}>
                            <TextInput
                                placeholder='First Name'
                                value={firstName}
                                style={{ width: '90%', borderWidth: 1, marginTop: 10, paddingStart: 20, height: 50, borderColor: 'white', marginLeft: 15, color: 'white' }}
                                onChangeText={(text) => setFirstName(text)}
                            />

                            <TextInput
                                placeholder='Last Name'
                                value={lastName}
                                style={{ width: '90%', borderWidth: 1, marginTop: 10, paddingStart: 20, height: 50, borderColor: 'white', marginLeft: 15, color: 'white' }}
                                onChangeText={(text) => setLastName(text)}
                            />
                            <TextInput
                                placeholder='Mobile No'
                                value={userMobile}
                                style={{ width: '90%', borderWidth: 1, marginTop: 10, paddingStart: 20, height: 50, borderColor: 'white', marginLeft: 15, color: 'white' }}
                                onChangeText={(text) => setUserMobile(text)}
                                keyboardType='phone-pad'
                                maxLength={11}
                            />
                            <TextInput
                                placeholder='Email Address'
                                value={Email}
                                style={{ width: '90%', borderWidth: 1, marginTop: 10, paddingStart: 20, height: 50, borderColor: 'white', marginLeft: 15, color: 'white' }}
                                onChangeText={(text) => setEmail(text)}
                                keyboardType='email-address'
                            />
                            {GropDownListing()}
                            <TextInput
                                placeholder='Password'
                                secureTextEntry={true}
                                value={Password}
                                style={{ width: '90%', borderWidth: 1, marginTop: 10, paddingStart: 20, height: 50, borderColor: 'white', marginLeft: 15, color: 'white' }}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <TextInput
                                placeholder='Confirm Password'
                                secureTextEntry={true}
                                value={confirmPassword}
                                style={{ width: '90%', borderWidth: 1, marginTop: 10, paddingStart: 20, height: 50, borderColor: 'white', marginLeft: 15, color: 'white' }}
                                onChangeText={(text) => setConfirmPassword(text)}
                            />
                        </View>
                        <View style={{ flex: 1, marginTop: 10, }}>
                            <TouchableOpacity
                                style={{ width: '50%', borderWidth: 1, borderRadius: 10, marginTop: 15, backgroundColor: '#133160', marginLeft: 85, height: 40, }}
                                onPress={() => {
                                    btnActionSignUp()
                                }} >
                                <Text style={{ textAlign: 'center', padding: 5, color: 'white', fontWeight: 'bold', fontSize: 20 }} >Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, }}>
                            <Text style={{ textAlign: 'center', marginTop: 15, fontSize: 10, fontWeight: '300', color: 'white' }}>Already Have an account?</Text>
                            <TouchableOpacity
                                style={{ width: '40%', marginLeft: 100, }}
                                onPress={() => {
                                    navigation.navigate(ScreenNames.SignIn)
                                }} >
                                <Text style={{ textAlign: 'center', color: '#133160', fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline' }} >Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <BottomSheetComponent
                        title={true}
                        ref={bottomRef}
                    //sheetData={renderPicture}
                    />
                </ScrollView>
            </ImageBackground>

        </View>
    )
}

export default SignUp