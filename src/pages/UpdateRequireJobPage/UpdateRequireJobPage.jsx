import React, { useState } from "react";
import { Container, Description, FormField, FormFieldd, Header, SaveButton, SubTitle, SupportButton, SupportContainer, SupportOptions, Title, TitleOptions } from "./style";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import background1 from '../../components/Assets/background1.png';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import Select from 'react-select';
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { TiPhoneOutline } from "react-icons/ti";
import { GoMail } from "react-icons/go";

import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";
const UpdateRequireJobPage = () => {

    const [activeTab, setActiveTab] = useState('desires');
    const user = useSelector((state) => state?.user);
    const [industry, setIndustry] = useState(user?.industry ? { value: user.industry, label: user.industry } : null);
    const [title, setTitle] = useState(user?.title ? { value: user.title, label: user.title } : null);
    const [location, setLocation] = useState(user?.location ? { value: user.location, label: user.location } : null);
    const [salaryto, setsalaryto] = useState(user?.salaryto || 0);
    const [salaryfrom, setsalaryfrom] = useState(user?.salaryfrom || 0);
    const [desire, setdesire] = useState(user?.desire || '');
    const dispatch = useDispatch();
    const industries = [
        { value: 'IT / Phần mềm / IOT / Điện tử viễn thông', label: 'IT / Phần mềm / IOT / Điện tử viễn thông' },
        { value: 'Corder', label: 'Coder' },
        { value: 'Marketing', label: 'Marketing' },
        // Add more options here
    ];

    const jobTitles = [
        { value: 'Thực tập sinh lập trình', label: 'Thực tập sinh lập trình' },
        { value: 'senior NodeJS', label: 'senior NodeJS' },
        { value: 'junior Angular', label: 'junior Angular' },
        // Add more options here
    ];

    const locations = [
        { value: 'Hồ Chí Minh', label: 'Hồ Chí Minh' },
        { value: 'Hà Nội', label: 'Hà Nội' },
        { value: 'Hải Phòng', label: 'Hải Phòng' },
        // Add more options here
    ];
    const onChangeSalaryFrom = (e) => {
        setsalaryfrom(e.target.value)
    }
    const onChangeSalaryTo = (e) => {
        setsalaryto(e.target.value)
    }
    const onChangeDesire = (e) => {
        setdesire(e.target.value)
    }
    const handleUpdateProfile = () => {
        dispatch(updateUser({ ...user, industry: industry?.value, location: location?.value, title: title?.value, salaryto: salaryto, salaryfrom: salaryfrom, desire: desire }))
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


                {/* Save Button */}
                <SaveButton onClick={handleUpdateProfile}>LƯU THÔNG TIN</SaveButton>
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
export default UpdateRequireJobPage