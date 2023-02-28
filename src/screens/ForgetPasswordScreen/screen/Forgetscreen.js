import React from 'react';



import ForgetPasswordServiceComponent from '../service/index.service.js';
//import ForgetPasswordComponent from '../components/index.js';




class ForgetPasswordScreen extends React.Component {
    //created separate component for business logic and view
    render() {
        return (
            <ForgetPasswordServiceComponent {...this.props}>
                {
                    props => (
                        <ForgetPasswordComponent
                            {...props}
                        />
                    )
                }
            </ForgetPasswordServiceComponent>
        );
    };
};

export default ForgetPasswordScreen;