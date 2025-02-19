import React, { useState } from "react";
import { Container, Description, FormField, Header, SaveButton, SubTitle, SupportButton, SupportContainer, SupportOptions, Title, TitleOptions } from "./style";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import background1 from '../../components/Assets/background1.png';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { GoMail } from "react-icons/go";
import { TiPhoneOutline } from "react-icons/ti";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import Select from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";
const UpdateProfilePage = () => {
    const user = useSelector((state) => state?.user);
    const [name, setName] = useState(user?.name || '')
    const [email, setEmail] = useState(user?.email || '');
    const [phone, setPhone] = useState(user?.phone || '');
    const [address, setAddress] = useState(user?.address || '');
    const [dateofbirth, setDateofbirth] = useState(user?.dateofbirth || '');
    const [gender, setGender] = useState(user?.gender ? { value: user.gender, label: user.gender } : null);
    const [materialstatus, setMaterialstatus] = useState(user?.materialstatus ? { value: user.materialstatus, label: user.materialstatus } : null);
    const dispatch = useDispatch();
    const genders = [
        { value: 'Nam', label: 'Nam' },
        { value: 'Nữ', label: 'Nữ' },

    ]
    const MaterialStatus = [
        { value: 'Độc thân', label: 'Độc thân' },
        { value: 'Đã kết hôn', label: 'Đã kết hôn' },

    ]

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value);
    }
    const onChangeAddress = (e) => {
        setAddress(e.target.value);

    }
    const onChangeDateOfBirth = (e) => {
        setDateofbirth(e.target.value);
    }



    const handleUpdateProfile = () => {
        dispatch(updateUser({ ...user, name: name, phone: phone, address: address, email: email, dateofbirth: dateofbirth, gender: gender?.value, materialstatus: materialstatus?.value }))
    }
    return (
        <div>
            <HeaderComponent />
            <SearchComponent />
            <Container style={{ marginTop: '10px' }}>
                <Header>
                    <h2>TẠI SAO NÊN CẬP NHẬT HỒ SƠ CÁ NHÂN?</h2>
                    <ul>
                        <li>Được nhà tuyển dụng chủ động săn đón.</li>
                        <li>Được gọi ý các cơ hội việc làm phù hợp.</li>
                    </ul>
                </Header>

                <Title>THÔNG TIN CƠ BẢN</Title>
                <SubTitle>Bạn vui lòng hoàn thiện các thông tin dưới đây (*) Các thông tin bắt buộc</SubTitle>

                {/* Form Fields */}
                <FormField>
                    <label>Họ và tên *</label>
                    <input type="text" placeholder="Nhập họ tên" value={name} onChange={onChangeName} />
                </FormField>

                <FormField>
                    <label>Email *</label>
                    <input type="email" placeholder="Nhập email" value={email} onChange={onChangeEmail} />
                </FormField>

                <FormField>
                    <label>Điện thoại *</label>
                    <input type="text" placeholder="Nhập số điện thoại" value={phone} onChange={onChangePhone} />
                </FormField>

                <FormField>
                    <label>Địa chỉ *</label>
                    <textarea placeholder="Nhập địa chỉ" rows="3" value={address} onChange={onChangeAddress} />
                </FormField>

                <FormField>
                    <label>Ngày sinh *</label>
                    <input type="date" value={dateofbirth} onChange={onChangeDateOfBirth} />
                </FormField>

                <FormField>
                    <label>Giới tính *</label>
                    <Select
                        options={genders}
                        value={gender}
                        onChange={setGender}
                        placeholder="Chọn giới tính"
                    />
                </FormField>

                <FormField>
                    <label>Tình trạng hôn nhân</label>
                    <Select
                        options={MaterialStatus}
                        value={materialstatus}
                        onChange={setMaterialstatus}
                        placeholder="Tình trạng hôn nhân"
                    />
                </FormField>

                <SaveButton onClick={handleUpdateProfile}>Lưu</SaveButton>


            </Container>
            <SupportContainer>
                <TitleOptions>HỖ TRỢ ỨNG VIÊN</TitleOptions>
                <Description>
                    Nếu gặp bất cứ vấn đề gì cần hỗ trợ, hãy gọi tới HOTLINE hoặc gửi thư về địa chỉ email bên dưới để được hỗ trợ.
                </Description>
                <SupportOptions>
                    <SupportButton href="tel:0349369139">
                        <TiPhoneOutline style={{ width: '50px', height: '50px' }} />
                        0349369139
                    </SupportButton>
                    <SupportButton href="mailto:hotro@joboko.com">
                        <GoMail style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                        huyzxv123@gmail.com
                    </SupportButton>
                </SupportOptions>
            </SupportContainer>
            <div >
                <img style={{ width: '100%' }} src={background1} alt="background"></img>
            </div>
            <FooterComponent />
        </div>
    )
}
export default UpdateProfilePage