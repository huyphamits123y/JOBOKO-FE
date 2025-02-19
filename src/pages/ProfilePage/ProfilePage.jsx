import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Container, FormContainer, FormField, FormFieldd, FormGroup, Input, InputGroup, Label, RadioGroup, RadioInput, RadioLabel, SaveButton, Section, Tab, Textarea, TextArea, Title, ToggleContainer, ToggleLabel } from "./style";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import background1 from '../../components/Assets/background1.png';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";
const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('desires');
    const user = useSelector((state) => state?.user);
    const [industry, setIndustry] = useState(user?.industry ? { value: user.industry, label: user.industry } : null);
    const [title, setTitle] = useState(user?.title ? { value: user.title, label: user.title } : null);
    const [location, setLocation] = useState(user?.location ? { value: user.location, label: user.location } : null);
    const [salaryto, setsalaryto] = useState(user?.salaryto || 0);
    const [salaryfrom, setsalaryfrom] = useState(user?.salaryfrom || 0);
    const [desire, setdesire] = useState(user?.desire || '');
    const [name, setName] = useState(user?.name || '')
    const [email, setEmail] = useState(user?.email || '');
    const [phone, setPhone] = useState(user?.phone || '');
    const [address, setAddress] = useState(user?.address || '');
    const [dateofbirth, setDateofbirth] = useState(user?.dateofbirth || '');
    const [gender, setGender] = useState(user?.gender ? { value: user.gender, label: user.gender } : null);
    const [materialstatus, setMaterialstatus] = useState(user?.materialstatus ? { value: user.materialstatus, label: user.materialstatus } : null);



    const dispatch = useDispatch();

    console.log('data user', user)

    const industries = [
        { value: 'IT / Phần mềm / IOT / Điện tử viễn thông', label: 'IT / Phần mềm / IOT / Điện tử viễn thông' },
        { value: 'Corder', label: 'Coder' },
        { value: 'Marketing', label: 'Marketing' },
        // Add more options here
    ];
    const onChangeSalaryFrom = (e) => {
        setsalaryfrom(e.target.value)
    }
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
   

    const onChangeSalaryTo = (e) => {
        setsalaryto(e.target.value)
    }
    const onChangeDesire = (e) => {
        setdesire(e.target.value)
    }
    const handleUpdateProfile = () => {
        dispatch(updateUser({ ...user, industry: industry?.value, location: location?.value, title: title?.value, salaryto: salaryto, salaryfrom: salaryfrom, desire: desire, name: name, phone: phone, address: address, email: email, dateofbirth: dateofbirth, gender: gender?.value, materialstatus: materialstatus?.value }))
    }

    const jobTitles = [
        { value: 'Thực tập sinh lập trình', label: 'Thực tập sinh lập trình' },
        { value: 'Senior NodeJS', label: 'Senior NodeJS' },
        { value: 'junior Angular', label: 'junior Angular' },
        // Add more options here
    ];

    const locations = [
        { value: 'Hồ Chí Minh', label: 'Hồ Chí Minh' },
        { value: 'Hà Nội', label: 'Hà Nội' },
        { value: 'Hải Phòng', label: 'Hải Phòng' },
        // Add more options here
    ];
    const genders = [
        { value: 'Nam', label: 'Nam' },
        { value: 'Nữ', label: 'Nữ' },

    ]
    const MaterialStatus = [
        { value: 'Độc thân', label: 'Độc thân' },
        { value: 'Đã kết hôn', label: 'Đã kết hôn' },

    ]
    useEffect(() => {
        console.log('industry', industry?.value);
        console.log('title', title?.value);
        console.log('location', location?.value);
        console.log('salaryfrom', salaryfrom + ' ');
        console.log('salaryto', salaryto + ' ');
        console.log('desire', desire)

    }, [industry, title, location, salaryfrom, salaryto, desire])
    return (
        <div>
            <HeaderComponent />
            <Container>

                <Tab>
                    <button className={activeTab === 'desires' ? 'active' : ''} onClick={() => setActiveTab('desires')}>
                        Mong muốn của bạn
                    </button>
                    <button className={activeTab === 'personal' ? 'active' : ''} onClick={() => setActiveTab('personal')}>
                        Cập nhật thông tin cá nhân
                    </button>
                </Tab>

                {/* Mong muốn của bạn Section */}
                <Section isActive={activeTab === 'desires'}>
                    <FormFieldd>
                        <label>Ngành nghề</label>
                        <Select
                            options={industries}
                            value={industry}
                            onChange={setIndustry}
                            placeholder="Chọn ngành nghề"
                        />
                        {/* <input type="text" placeholder="IT / Phần mềm / IOT / Điện tử viễn thông" /> */}
                    </FormFieldd>

                    <FormFieldd>
                        <label>Chức danh</label>
                        <Select
                            options={jobTitles}
                            value={title}
                            onChange={setTitle}
                            placeholder="Chọn chức danh"
                        />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Địa điểm làm việc</label>
                        <Select
                            options={locations}
                            value={location}
                            onChange={setLocation}
                            placeholder="Chọn địa điểm làm việc"
                        />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Mức lương (VND)</label>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <input type="number" placeholder="Từ" value={salaryfrom} onChange={onChangeSalaryFrom} />
                            <input type="number" placeholder="Đến" value={salaryto} onChange={onChangeSalaryTo} />
                        </div>
                    </FormFieldd>

                    <FormFieldd>
                        <label>Mong muốn của bạn</label>
                        <textarea placeholder="Thông tin thêm về công việc bạn mong muốn tìm và ứng tuyển..." rows="4" onChange={onChangeDesire} value={desire} />
                    </FormFieldd>

                    <SaveButton onClick={handleUpdateProfile}>Lưu</SaveButton>
                </Section>

                {/* Cập nhật thông tin cá nhân Section */}
                <Section isActive={activeTab === 'personal'}>
                    <FormFieldd>
                        <label>Họ và tên *</label>
                        <input type="text" placeholder="Nhập họ tên" value={name} onChange={onChangeName} />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Email *</label>
                        <input type="email" placeholder="Nhập email" value={email} onChange={onChangeEmail} />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Điện thoại *</label>
                        <input type="text" placeholder="Nhập số điện thoại" value={phone} onChange={onChangePhone} />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Địa chỉ *</label>
                        <textarea placeholder="Nhập địa chỉ" rows="3" value={address} onChange={onChangeAddress} />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Ngày sinh *</label>
                        <input type="date" value={dateofbirth} onChange={onChangeDateOfBirth} />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Giới tính *</label>
                        <Select
                            options={genders}
                            value={gender}
                            onChange={setGender}
                            placeholder="Chọn giới tính"
                        />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Tình trạng hôn nhân</label>
                        <Select
                            options={MaterialStatus}
                            value={materialstatus}
                            onChange={setMaterialstatus}
                            placeholder="Tình trạng hôn nhân"
                        />
                    </FormFieldd>

                    <SaveButton onClick={handleUpdateProfile}>Lưu</SaveButton>
                </Section>
            </Container>
            <div style={{ marginTop: '20px' }} >
                <img style={{ width: '100%' }} src={background1} alt="background"></img>
            </div>
            <FooterComponent />
        </div>
    );
}
export default ProfilePage