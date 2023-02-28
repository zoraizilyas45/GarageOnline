// import React, { useEffect, useState, useRef } from 'react';
// import { writeUserData, getUserData } from '../../../Helpers/ApiCalls.js'

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { showToast } from '../../../Helpers/Utils.js';
// import ScreenNames from '../../../Helpers/ScreenNames';


// const ProfileEditScreenServiceComponent = ({ children, navigation, }) => {

//     const TextInputref = useRef()
//     const AgetInput = useRef()
//     const genderref = useRef()
//     const Naemref = useRef()
//     const [selectedValue, setSelectedValue] = useState("");
//     const [name, setName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [age, setAge] = useState("");
//     const [gender, setGender] = useState("");
//     const [userAddress, setUserAddress] = useState("");
//     const [country, setCountry] = useState("");
//     const [userData, setUserData] = useState("");
//     const [ImageData64, setImageData64] = useState('');
//     const [showImage, setshowImage] = useState('');
//     const bottomRef = useRef();
//     const [isLoading, setIsLoading] = useState(false)
//     // useEffect(() => {

//     //     getdatafrom()
//     // }, [])
//     const [coutriesArray, setCoutriesArray] = useState([])

//     useEffect(() => {
//         const unsubscribe = navigation.addListener('focus', async () => {
//             setIsLoading(true)
//             await getdatafrom()
//         });

//         return unsubscribe;
//     }, [navigation]);
//     const getdatafrom = async () => {

//         var user = await getUserData()
//         let tempUser = user._data
//         setUserData(tempUser)
//         tempUser.firstName && setName(tempUser.firstName)
//         tempUser.lastName && setLastName(tempUser.lastName)
//         tempUser.email && setEmail(tempUser.email)
//         tempUser.age && setAge(tempUser.age)
//         tempUser.gender && setSelectedValue(tempUser.gender)
//         tempUser.city && setCountry(tempUser.city)
//         tempUser.address && setUserAddress(tempUser.address)
//         tempUser.profileUrl && setImageData64(tempUser.profileUrl)
//         tempUser.profileUrl && setshowImage(tempUser.profileUrl)
//         setIsLoading(false)

//     }
//     const onBackPress = () => {
//         writeUserData({
//             name: name,
//             email: email,
//             age: age,
//             gender: selectedValue,
//             country: country,
//             last_name: lastName,
//             profileUrl: ImageData64,
//         }).then(() => {
//             navigation.goBack()
//         })
//     }


//     const onChangeTextCountry = (country) => {
//         setCountry(country)

//     }
//     const onSelectCountry = (item) => {
//         setCountry(item.Name)
//         setCoutriesArray([])
//     }
//     const onPressDropdown = () => {

//     }
//     const btnActionUpdateProfile = async () => {
//         let body = {
//             name: name + ' ' + lastName,
//             email: email,
//             firstName: name,
//             lastName: lastName,
//             address: userAddress,
//             age: age,
//             gender: gender,
//             profileUrl: ImageData64,
//             city: country,
//         }
//         await writeUserData(body).then(() => {
//             showToast('Profile Updated Successfully!')
//             navigation.navigate(ScreenNames.HomeTabNavigator)
//         })

//     }

//     return children({
//         navigation,
//         TextInputref,
//         AgetInput,
//         genderref,
//         selectedValue,
//         setSelectedValue,
//         Naemref,
//         name,
//         setName,
//         email,
//         setEmail,
//         age,
//         setAge,
//         country,
//         onChangeTextCountry,
//         gender,
//         setGender,
//         lastName,
//         setLastName,
//         ImageData64,
//         setImageData64,
//         bottomRef,
//         showImage,
//         setshowImage,
//         isLoading,
//         coutriesArray,
//         onSelectCountry,
//         onPressDropdown,
//         userAddress,
//         setUserAddress,


//         onBackPress,
//         btnActionUpdateProfile,

//     });

// }

// export default ProfileEditScreenServiceComponent;
