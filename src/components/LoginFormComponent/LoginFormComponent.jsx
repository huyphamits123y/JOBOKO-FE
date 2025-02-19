import React, { useEffect, useState } from "react"
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import * as UserService from '../../services/UserService';
import { useLocation, useNavigate } from "react-router";
import { WrapperBody, WrapperButton, WrapperInputBox, WrapperLogin, WrapperRegister, WrapperRemember, WrapperTextLight } from "./style";
import InputForm from "../InputFormComponent/InputFormComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useMutationHooks } from "../../hooks/useMutationHook";
import login from '../../components/Assets/login.png';
import { Modal, Button } from "antd";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux'
import { updateUser } from "../../redux/slides/userSlide";
// Import CSS của antd
const LoginFormComponent = () => {
    const [email, setEmail] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const onChangeHandleEmail = (value) => {
        setEmail(value)
    }
    const location = useLocation()
    const navigate = useNavigate();
    const handleNavigateSignUp = () => {
        navigate('/sign-up')

    }


    const onChangeHandlePassword = (value) => {
        setPassword(value)
    }
    const mutation = useMutationHooks(
        async (data) => {
            const res = UserService.loginUser(data);
            return res
        }
    )
    const { data, isSuccess, isError, error } = mutation
    console.log('data huy', data?.accessToken)
    const handleGetDetailsUser = async (id, access_token) => {
        const user = await UserService.getDetailsUser(id, access_token)
        console.log('userr', user)
        dispatch(updateUser({ ...user?.data, access_token: access_token }))

    }
    useEffect(() => {
        // console.log('location', location)

        if (isSuccess && data?.status === 'OK') {
            console.log('isSucess', isSuccess)
            if (location?.state) {
                navigate(location?.state)
            } else {
                navigate('/')
            }
            console.log('data huy', data)
            localStorage.setItem('access_token', JSON.stringify(data?.access_token))

            if (data?.access_token) {
                const decoded = jwtDecode(data?.access_token)
                console.log('decoded', decoded)
                if (decoded?.id) {
                    handleGetDetailsUser(decoded?.id, data?.access_token);
                    console.log('decoded id', decoded?.id);
                    console.log('decoded token', decoded?.access_token)


                }
            }
        } else {
            navigate('/sign-in')
            setErrorMessage('Tài khoản hoặc mật khẩu không chính xác');
            setShowAlert(true);
            setShowMessage(true); // 

        }
    }, [isSuccess, isError])
    const handleSignin = () => {
        mutation.mutate({
            email,
            password,
        })
        console.log('sign-in', email, password)
    }
    const handleOk = () => {
        setIsModalVisible(false);
    };

    return (
        <WrapperBody>
            <img style={{ width: '280px', height: '404px' }} src={login} alt="login"></img>

            <WrapperLogin>
                <form action="">
                    <h1>Login</h1>
                    <WrapperInputBox>
                        <InputForm style={{ marginBottom: '10px', width: '400px', height: '10px' }} placeholder="Email" value={email} onChange={onChangeHandleEmail} />
                        <FaUserAlt className="icon" />

                    </WrapperInputBox>
                    <WrapperInputBox>
                        <InputForm placeholder="password" style={{ marginBottom: '10px', width: '400px', height: '10px' }} value={password} type="password" onChange={onChangeHandlePassword} />

                        <FaLock className="icon" />
                    </WrapperInputBox>
                    <WrapperRemember>
                        <label>
                            <input type="checkbox" />Remember me
                        </label>
                        <a href="#">Forgot password</a>
                    </WrapperRemember>

                    <ButtonComponent
                        disable={!email.length || !password.length}
                        onClick={handleSignin}
                        size={40}



                        textButton={'Login'}

                    ></ButtonComponent>
                    <WrapperRegister>
                        <p>Don't have an account<WrapperTextLight onClick={handleNavigateSignUp} style={{ cursor: 'pointer' }}> Register</WrapperTextLight></p>
                    </WrapperRegister>
                </form>
            </WrapperLogin>
            <Modal
                title="Login Failed"
                visible={isModalVisible}
                onOk={handleOk}


            >
                <p>{errorMessage}</p>
            </Modal>

        </WrapperBody>
    )
}
export default LoginFormComponent