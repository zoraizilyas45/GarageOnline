import React, { useEffect, useState, useRef } from 'react';
import { showToast, validateUserEmail } from '../../../Helpers/Utils';
import auth from '@react-native-firebase/auth';
import ScreenNames from '../../../Helpers/ScreenNames';

const ForgetPasswordServiceComponent = ({ children, navigation, }) => {
    const [isLinkSent, setisLinkSent] = useState(true)
    const [eMail, setEMail] = useState('')



    const forgotPassword = () => {
        if (isLinkSent) {
            if (eMail === '') {
                showToast('Email is required!')
            }
            else if (!validateUserEmail(eMail)) {
                showToast('Enter Valid Email!')
            }
            else {
                auth().sendPasswordResetEmail(eMail)
                    .then((user) => {
                        // alert('Please check your email...')
                        showToast('Please check your email...')
                        setisLinkSent(false)

                    }).catch((e) => {
                        console.log(e)
                    })
            }
        }
        else {
            navigation.navigate(ScreenNames.SignIn)
        }
    }


    return children({
        navigation,
        isLinkSent,
        eMail,
        setEMail,
        forgotPassword,
    });

}

export default ForgetPasswordServiceComponent;
