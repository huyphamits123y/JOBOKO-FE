// import React from "react";
// import { Card, Container, Icon, JobCount, SliderContainer, Title, TitleText } from "./styled";
// import SliderComponent from "../../components/SliderComponent/SliderComponent";
// import Slider from "react-slick";
// import toolcheck from '../../components/Assets/toolcheck.png';
// const ProfessionPage = () => {
//     const jobs = [
//         {
//             icon: toolcheck,
//             title: "Kinh doanh / Bán hàng",
//             count: "+31,328 việc làm",
//         },
//         {
//             icon: toolcheck,
//             title: "Tài chính / Kế toán",
//             count: "+9,050 việc làm",
//         },
//         {
//             icon: toolcheck,
//             title: "Hành chính / Nhân sự",
//             count: "+13,292 việc làm",
//         },
//         {
//             icon: toolcheck,
//             title: "Marketing / Truyền thông",
//             count: "+11,979 việc làm",
//         },
//         {
//             icon: toolcheck,
//             title: "Cơ khí chế tạo",
//             count: "+7,237 việc làm",
//         },
//         {
//             icon: toolcheck,
//             title: "IT / Phần mềm",
//             count: "+6,193 việc làm",
//         },
//         {
//             icon: toolcheck,
//             title: "Giáo dục / Đào tạo",
//             count: "+3,485 việc làm",
//         },
//         {
//             icon: toolcheck,
//             title: "Y tế / Sức khỏe",
//             count: "+6,305 việc làm",
//         },
//     ];
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };
//     return (
//         <Container>
//             <Title>NGÀNH NGHỀ HOT</Title>
//             <SliderContainer>
//                 <Slider {...settings}>
//                     {jobs.map((job, index) => (
//                         <Card key={index}>
//                             <Icon src={job.icon} alt={job.title} />
//                             <TitleText>{job.title}</TitleText>
//                             <JobCount>{job.count}</JobCount>
//                         </Card>
//                     ))}
//                 </Slider>
//             </SliderContainer>
//         </Container>
//     )
// }
// export default ProfessionPage


import React, { useState } from "react";
import { Card, Container, Description, GridContainer, Icon, JobCount, Pagination, SupportButton, SupportContainer, SupportOptions, Title, TitleOptions, TitleText } from "./styled";
import toolcheck from '../../components/Assets/toolcheck.png';
import logistic4 from '../../components/Assets/logistic4.png';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { TiPhoneOutline } from "react-icons/ti";
import { GoMail } from "react-icons/go";
import background1 from '../../components/Assets/background1.png';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
const ProfessionPage = () => {
    const jobs = [
        { icon: logistic4, title: "Kinh doanh / Bán hàng", count: "+31,328 việc làm" },
        { icon: toolcheck, title: "Tài chính / Kế toán", count: "+9,050 việc làm" },
        { icon: toolcheck, title: "Hành chính / Nhân sự", count: "+13,292 việc làm" },
        { icon: toolcheck, title: "Marketing / Truyền thông", count: "+11,979 việc làm" },
        { icon: toolcheck, title: "Cơ khí chế tạo", count: "+7,237 việc làm" },
        { icon: toolcheck, title: "IT / Phần mềm", count: "+6,193 việc làm" },
        { icon: toolcheck, title: "Giáo dục / Đào tạo", count: "+3,485 việc làm" },
        { icon: toolcheck, title: "Y tế / Sức khỏe", count: "+6,305 việc làm" },
        { icon: toolcheck, title: "Thiết kế đồ họa", count: "+4,150 việc làm" },
        { icon: toolcheck, title: "Bất động sản", count: "+2,350 việc làm" },
        { icon: toolcheck, title: "Cơ khí chế tạo", count: "+7,237 việc làm" },
        { icon: toolcheck, title: "IT / Phần mềm", count: "+6,193 việc làm" },
        { icon: toolcheck, title: "Giáo dục / Đào tạo", count: "+3,485 việc làm" },
        { icon: toolcheck, title: "Y tế / Sức khỏe", count: "+6,305 việc làm" },
        { icon: toolcheck, title: "Thiết kế đồ họa", count: "+4,150 việc làm" },
        { icon: toolcheck, title: "Bất động sản", count: "+2,350 việc làm" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Tính toán các sản phẩm hiển thị
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentJobs = jobs.slice(startIndex, endIndex);

    // Tính tổng số trang
    const totalPages = Math.ceil(jobs.length / itemsPerPage);

    return (
        <div>
            <HeaderComponent />
            <SearchComponent />
            <Container>

                <Title>NGÀNH NGHỀ HOT</Title>
                <GridContainer>
                    {currentJobs.map((job, index) => (
                        <Card key={index}>
                            <Icon src={job.icon} alt={job.title} />
                            <TitleText>{job.title}</TitleText>
                            <JobCount>{job.count}</JobCount>
                        </Card>
                    ))}
                </GridContainer>
                <Pagination>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Trước
                    </button>
                    <span>{`Trang ${currentPage} / ${totalPages}`}</span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Tiếp
                    </button>
                </Pagination>
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

    );
};

export default ProfessionPage;
