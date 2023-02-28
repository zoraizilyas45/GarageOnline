// import React, { useState } from 'react';
// import {
//     View, SafeAreaView, Text, ActivityIndicator, Platform, StatusBar,
//     RefreshControl, TouchableOpacity, ScrollView, Image, FlatList, TextInput, Dimensions
// } from 'react-native';
// import SvgImage from '../../../Helpers/SvgImage';

// import { Picker } from '@react-native-picker/picker';
// //import ImagePickerCrop from 'react-native-image-crop-picker';
// //import RNFS from 'react-native-fs';
// import ImageResizer from 'react-native-image-resizer';
// const screenWidth = Math.round(Dimensions.get('window').width);

// import SimpleBottomSheet from '../../../Helpers/SimpleBottomSheet'
// import CustomActivityIndicator from '../../../Helpers/CustomActivityIndicator';
// import colors from '../../../Helpers/colors'

// import DropDownIcon from '../../../Helpers/DropDownList'
// const ProfileEditScreenComponent = ({
//     navigation,
//     TextInputref,
//     AgetInput,
//     genderref,
//     selectedValue,
//     setSelectedValue,
//     Naemref,
//     name,
//     setName,
//     email,
//     setEmail,
//     age,
//     setAge,
//     country,
//     onChangeTextCountry,
//     onSelectCountry,
//     coutriesArray,
//     gender,
//     setGender,
//     lastName,
//     setLastName,
//     ImageData64,
//     setImageData64,
//     bottomRef,
//     showImage,
//     setshowImage,
//     isLoading,
//     onPressDropdown,
//     userAddress,
//     setUserAddress,


//     onBackPress,
//     btnActionUpdateProfile,

// }) => {
//     const takeGalleryPicture = async () => {

//         ImagePickerCrop.openPicker({
//             width: screenWidth,
//             height: screenWidth,
//             cropping: true,
//             includeBase64: false,
//             disableCropperColorSetters: true,
//             compressImageQuality: 0.1,
//             showCropGuidelines: true,
//             showCropFrame: true,
//             hideBottomControls: true,
//         })
//             .then(image => {
//                 let compressFormat = 'PNG'
//                 let quality = 40; // out of 100
//                 ImageResizer.createResizedImage(image.path, 1020, 1020, compressFormat, quality).then((resizedImageUri) => {
//                     // resizeImageUri is the URI of the new image that can now be displayed, uploaded...

//                     setshowImage(resizedImageUri.uri)
//                     convert64(resizedImageUri.uri)

//                 }).catch((err) => {
//                     // Oops, something went wrong. Check that the filename is correct and
//                     // inspect err to get more details.
//                 });
//             })


//     };
//     const takeCameraPicture = async () => {


//         ImagePickerCrop.openCamera({
//             width: screenWidth,
//             height: screenWidth,
//             cropping: true,
//             includeBase64: false,
//             disableCropperColorSetters: true,
//             compressImageQuality: 0.1,
//             showCropGuidelines: true,
//             showCropFrame: true,
//             hideBottomControls: true,
//         })
//             .then(image => {

//                 let compressFormat = 'PNG'
//                 let quality = 40; // out of 100

//                 ImageResizer.createResizedImage(image.path, 1020, 1020, compressFormat, quality).then((resizedImageUri) => {
//                     // resizeImageUri is the URI of the new image that can now be displayed, uploaded...
//                     setshowImage(resizedImageUri.uri)

//                     convert64(resizedImageUri.uri)
//                 }).catch((err) => {
//                     // Oops, something went wrong. Check that the filename is correct and
//                     // inspect err to get more details.
//                 });
//             })

//     };
//     const convert64 = (uri) => {

//         RNFS.readFile(uri, 'base64')
//             .then(res => {
//                 setImageData64("data:image/jpeg;base64," + res)
//             })
//         bottomRef.current.close()
//     }
//     const Header = () => {
//         return (
//             <View style={{ flexDirection: 'row', padding: 20 }}>
//                 <TouchableOpacity onPress={onBackPress}>

//                 </TouchableOpacity>
//                 <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', }}>
//                     <Text style={{ fontSize: 24, fontWeight: '400', color: '#FFA500', paddingTop: 3, }}>PROFILE</Text>
//                     <Text style={{ fontSize: 24, fontWeight: '400', color: '#FFA500', paddingTop: 3, }}>EDIT</Text>

//                 </View>
//             </View>
//         )
//     }
//     const ProfileDetail = () => {
//         return (
//             <View style={{
//                 flex: 1,

//                 marginTop: 40,
//                 backgroundColor: 'white', borderTopRightRadius: 60, borderTopLeftRadius: 60,
//                 // shadowColor: "#000",
//                 // shadowOffset: {
//                 //     width: 0,
//                 //     height: 8,
//                 // },
//                 // shadowOpacity: 0.44,
//                 // shadowRadius: 10.32,

//                 // elevation: 16,

//             }}>
//                 <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: -40 }}>
//                     <View style={{ flex: 2.5, alignItems: 'flex-end' }}>
//                         <TouchableOpacity
//                             style={{
//                                 width: 105, height: 105, borderRadius: 100, backgroundColor: '#9DA5D3', borderWidth: 5, borderColor: 'white',
//                                 justifyContent: 'center', alignItems: 'center'
//                             }}
//                             onPress={() => bottomRef.current.open()}>

//                             {
//                                 showImage === '' ?
//                                     <Text style={{ fontWeight: '400', fontSize: Platform.OS === 'ios' ? 16 : 17, paddingTop: 3, }}>avatar</Text>
//                                     : <SvgImage
//                                         source={{ uri: showImage }}
//                                         style={{ width: 105, height: 105, borderRadius: 100 }}
//                                     />
//                             }
//                         </TouchableOpacity>
//                     </View>
//                     <View style={{ flex: 1, paddingRight: 30, alignItems: 'flex-end' }}>

//                         {/* <SvgImage
//                             source={Editicon}
//                             style={{ width: 35, height: 36, marginBottom: 20 }}
//                         /> */}


//                     </View>
//                 </View>
//                 {TextFields()}
//                 <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }} >
//                     <TouchableOpacity
//                         onPress={btnActionUpdateProfile}
//                         style={{ backgroundColor: '#FFA500', borderRadius: 10, }} >
//                         <Text style={{ paddingHorizontal: 30, paddingVertical: 10, color: colors.black }} >
//                             Update
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         )
//     }
//     const TextFields = () => {
//         return (
//             <View style={{ paddingHorizontal: 20 }}>
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                     <View style={{ flex: 1.5 }}>

//                         <Text style={{ color: '#9DA5D3', fontSize: 20, paddingTop: 3, }}>Name</Text>
//                     </View>
//                     <View style={{
//                         flex: 3,
//                         paddingVertical: Platform.OS === 'ios' ? 20 : 0,
//                     }}>
//                         <TextInput
//                             ref={Naemref}
//                             placeholder='Enter Name'
//                             style={{ color: '#FC6262' }}
//                             value={name}
//                             onChangeText={(text) => setName(text)}
//                         />
//                     </View>
//                     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                         <TouchableOpacity onPress={() => Naemref.current.focus()}>
//                             {/* <SvgImage
//                                 source={Editicon}
//                                 style={{ width: 22, height: 16, }}
//                             /> */}
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 {Lastname()}
//                 {Email()}
//                 {Country()}
//                 {AddressView()}
//                 {Age()}
//                 {Gender()}
//             </View>
//         )
//     }
//     const Lastname = () => {
//         return (

//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                 <View style={{ flex: 1.5 }}>

//                     <Text style={{ color: '#9DA5D3', fontSize: 18, paddingTop: 3, }}>Lastname</Text>
//                 </View>
//                 <View style={{
//                     flex: 3,
//                     paddingVertical: Platform.OS === 'ios' ? 20 : 0,
//                 }}>
//                     <TextInput
//                         ref={TextInputref}
//                         // autoFocus={focus}
//                         placeholder='Enter Lastname'
//                         style={{ color: '#FC6262' }}
//                         value={lastName}

//                         onChangeText={(text) => setLastName(text)}


//                     />
//                 </View>
//                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                     <TouchableOpacity onPress={() => TextInputref.current.focus()}>
//                         {/* <SvgImage
//                             source={Editicon}
//                             style={{ width: 22, height: 16, }}
//                         /> */}
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         )

//     }
//     const Email = () => {

//         return (

//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                 <View style={{ flex: 1.5 }}>

//                     <Text style={{ color: '#9DA5D3', fontSize: 20, paddingTop: 3, }}>Email</Text>
//                 </View>
//                 <View style={{
//                     flex: 4,
//                     paddingVertical: Platform.OS === 'ios' ? 20 : 0,
//                 }}>
//                     <TextInput
//                         placeholder='Enter Email'
//                         style={{ color: '#FC6262' }}
//                         value={email}
//                         onChangeText={(text) => setEmail(text)}
//                         editable={email && email !== '' && email !== undefined && email !== null ? false : true}
//                     />
//                 </View>

//             </View>
//         )

//     }

//     const Country = () => {

//         return (
//             <View>
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                     <View style={{ flex: 1.5 }}>

//                         <Text style={{ color: '#9DA5D3', fontSize: 20, paddingTop: 3, }}>City</Text>
//                     </View>
//                     <View style={{
//                         flex: 3,
//                         paddingVertical: Platform.OS === 'ios' ? 20 : 0,
//                     }}>
//                         <TextInput
//                             placeholder='Islamabad'
//                             style={{ color: '#FC6262' }}

//                             value={country}
//                             onChangeText={onChangeTextCountry}
//                         />
//                     </View>
//                     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                         <TouchableOpacity
//                             onPress={onPressDropdown}
//                         >
//                             {/* <SvgImage
//                                 source={DropDownIcon}
//                                 style={{ width: 22, height: 16, }}
//                             /> */}
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 {
//                     coutriesArray.length > 0 ?

//                         <FlatList
//                             nestedScrollEnabled
//                             style={{ backgroundColor: '#DDCBE5', borderRadius: 20, paddingTop: 5, maxHeight: 150 }}
//                             data={coutriesArray}
//                             renderItem={({ item }) => {
//                                 return (<TouchableOpacity
//                                     onPress={() => onSelectCountry(item)}
//                                     style={{ paddingBottom: 3, marginBottom: 2 }}
//                                 >
//                                     <Text style={{ color: '#FC6262', marginStart: '10%', fontSize: 20, paddingTop: 3, }} >
//                                         {item.Name}
//                                     </Text>
//                                 </TouchableOpacity>
//                                 )
//                             }}
//                         />
//                         :
//                         null
//                 }
//             </View>
//         )

//     }
//     const AddressView = () => {

//         return (
//             <View>
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                     <View style={{ flex: 1.5 }}>

//                         <Text style={{ color: '#9DA5D3', fontSize: 20, paddingTop: 3, }}>Address</Text>
//                     </View>
//                     <View style={{
//                         flex: 3,
//                         paddingVertical: Platform.OS === 'ios' ? 20 : 0,
//                     }}>
//                         <TextInput
//                             placeholder='address'
//                             style={{ color: '#FC6262' }}

//                             value={userAddress}
//                             onChangeText={(text) => setUserAddress(text)}
//                         />
//                     </View>
//                     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                         <TouchableOpacity
//                             onPress={onPressDropdown}
//                         >
//                             {/* <SvgImage
//                                 source={DropDownIcon}
//                                 style={{ width: 22, height: 16, }}
//                             /> */}
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 {
//                     coutriesArray.length > 0 ?

//                         <FlatList
//                             nestedScrollEnabled
//                             style={{ backgroundColor: '#DDCBE5', borderRadius: 20, paddingTop: 5, maxHeight: 150 }}
//                             data={coutriesArray}
//                             renderItem={({ item }) => {
//                                 return (<TouchableOpacity
//                                     onPress={() => onSelectCountry(item)}
//                                     style={{ paddingBottom: 3, marginBottom: 2 }}
//                                 >
//                                     <Text style={{ color: '#FC6262', marginStart: '10%', fontSize: 20, paddingTop: 3, }} >
//                                         {item.Name}
//                                     </Text>
//                                 </TouchableOpacity>
//                                 )
//                             }}
//                         />
//                         :
//                         null
//                 }
//             </View>
//         )

//     }

//     const Age = () => {
//         return (

//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                 <View style={{ flex: 1.5 }}>

//                     <Text style={{ color: '#9DA5D3', fontSize: 20, paddingTop: 3, }}>Age</Text>
//                 </View>
//                 <View style={{
//                     flex: 3,
//                     paddingVertical: Platform.OS === 'ios' ? 20 : 0,
//                 }}>
//                     <TextInput
//                         ref={AgetInput}
//                         // autoFocus={focus}
//                         placeholder='Enter Age'
//                         style={{ color: '#FC6262' }}

//                         value={age}
//                         onChangeText={(text) => setAge(text)}
//                     />
//                 </View>
//                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                     <TouchableOpacity onPress={() => AgetInput.current.focus()}>
//                         {/* <SvgImage
//                             source={Editicon}
//                             style={{ width: 22, height: 16, }}
//                         /> */}
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         )

//     }
//     const Gender = () => {


//         return (



//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                 <View style={{ flex: 1.5 }}>

//                     <Text style={{ color: '#9DA5D3', fontSize: 20, paddingTop: 3, }}>Gender</Text>
//                 </View>
//                 <View style={{ flex: 3 }}>
//                     <Picker
//                         ref={genderref}
//                         selectedValue={selectedValue}
//                         style={{ height: 50, width: 150 }}
//                         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//                         mode='dropdown'
//                         dropdownIconColor='white'
//                         color='red'
//                     >
//                         <Picker.Item label="Boy" value="Boy" style={{ color: 'red' }} />
//                         <Picker.Item label="Girl" value="Girl" style={{ color: 'red' }} />
//                     </Picker>
//                 </View>
//                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                     <TouchableOpacity onPress={() => genderref.current.focus()}>
//                         <SvgImage
//                             source={DropDownIcon}
//                             style={{ width: 22, height: 16, }}
//                         />
//                     </TouchableOpacity>
//                 </View>
//             </View>



//         )


//     }
//     const renderPicture = () => {

//         return (
//             <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                 <TouchableOpacity onPress={() => takeCameraPicture()}>
//                     <View style={{
//                         shadowColor: "#000",
//                         shadowOffset: {
//                             width: 0,
//                             height: 2,
//                         },
//                         shadowOpacity: 0.25,
//                         shadowRadius: 3.84,

//                         elevation: 5, padding: 20, paddingHorizontal: 30, borderRadius: 30, backgroundColor: '#FF6160'
//                     }}>
//                         <Text style={{ fontSize: 24, color: 'white', fontWeight: '600', paddingTop: 3, }}>Camera</Text>
//                     </View>
//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={() => takeGalleryPicture()}>
//                     <View style={{
//                         shadowColor: "#000",
//                         shadowOffset: {
//                             width: 0,
//                             height: 2,
//                         },
//                         shadowOpacity: 0.25,
//                         shadowRadius: 3.84,

//                         elevation: 5, padding: 20, paddingHorizontal: 40, borderRadius: 30, backgroundColor: '#2D8BBE'
//                     }}>
//                         <Text style={{ fontSize: 24, color: 'white', fontWeight: '600', paddingTop: 3, }}>Gallery</Text>

//                     </View>
//                 </TouchableOpacity>

//             </View>
//         )

//     }

//     const MainView = () => {
//         return (
//             <View style={{ flex: 1, backgroundColor: '#DDCBE5' }}>
//                 {Header()}

//                 {ProfileDetail()}


//                 <SimpleBottomSheet
//                     title={true}
//                     ref={bottomRef}
//                     sheetData={renderPicture}
//                 />
//             </View>
//         )
//     }
//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <ScrollView style={{ flex: 1, backgroundColor: colors.white }} >
//                 <View style={{ flex: 1 }}>
//                     <CustomActivityIndicator
//                         isLoading={isLoading}
//                     />
//                     {MainView()}
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };


// export default ProfileEditScreenComponent;