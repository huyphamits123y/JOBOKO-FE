import React, { useState } from 'react';
import styled from 'styled-components';
import { ApplyButton, Company, Container, Container1, Container2, Container3, JobCard, JobList, JobTitle, Link1, Location, PageButton, PageInfo, Pagination, Salary, Title, Title1 } from './style';

import slider1 from '../Assets/slider1.png';
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import toolcheck from '../Assets/toolcheck.png';
const FindJobComponent = () => {
    const ITEMS_PER_PAGE = 6;
    const data = [
        // Danh sách các công việc (thay thế bằng dữ liệu thực tế)
        { id: 1, title: "Academic Coordinator / Nhân Viên Học Vụ", company: "EMG EDUCATION", location: "Hồ Chí Minh", salary: "Thỏa thuận" },
        { id: 2, title: "Chuyên viên Phát triển Kinh doanh", company: "CÔNG TY CỔ PHẦN JOBOKO TOÀN CẦU", location: "Hà Nội", salary: "13 - 20 triệu VND/tháng" },
        { id: 3, title: "[AEON Xuân Thủy] Nhân Viên Siêu Thị", company: "CÔNG TY TNHH AEON VIỆT NAM", location: "Hà Nội", salary: "Thỏa thuận" },
        { id: 4, title: "Telesale / Chăm sóc Khách hàng", company: "TỔNG CÔNG TY CỔ PHẦN BẢO HIỂM", location: "Hà Nội", salary: "8 - 12 triệu VND/tháng" },
        { id: 5, title: "Kỹ Sư Shopdrawing", company: "CÔNG TY CỔ PHẦN XÂY DỰNG ALPHACO HÀ NỘI", location: "Hà Nội", salary: "Thỏa thuận" },
        { id: 6, title: "Quản Lý Bán Hàng Khu Vực", company: "CÔNG TY CỔ PHẦN LIÊN DOANH KANGAROO QUỐC TẾ", location: "Hà Nội", salary: "Thỏa thuận" },
        { id: 7, title: "Quản Lý Bán Hàng Khu Vực", company: "CÔNG TY CỔ PHẦN LIÊN DOANH KANGAROO QUỐC TẾ", location: "Hà Nội", salary: "Thỏa thuận" },
        { id: 8, title: "Quản Lý Bán Hàng Khu Vực", company: "CÔNG TY CỔ PHẦN LIÊN DOANH KANGAROO QUỐC TẾ", location: "Hà Nội", salary: "Thỏa thuận" },
        { id: 9, title: "Quản Lý Bán Hàng Khu Vực", company: "CÔNG TY CỔ PHẦN LIÊN DOANH KANGAROO QUỐC TẾ", location: "Hà Nội", salary: "Thỏa thuận" },
        // Thêm các item khác
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return data.slice(startIndex, endIndex);
    };
    const navigate = useNavigate();

    return (
        <Container1>
            <Container>
                <Title>Việc làm tốt nhất</Title>
                <JobList>
                    {getCurrentPageData().map((job) => (
                        <JobCard key={job.id} style={{ display: 'flex' }} onClick={() => navigate("/jobdetails")}>
                            <div>
                                <img key={slider1} src={slider1} alt="slider" width="70px" height="70px" />
                            </div>
                            <div>
                                <div>
                                    <JobTitle>{job.title}</JobTitle>
                                    <Company>{job.company}</Company>
                                    <Location>{job.location}</Location>
                                    <Salary>{job.salary}</Salary>
                                </div>


                                {/* <JobTitle>{job.title}</JobTitle>
                            <Company>{job.company}</Company>
                            <Location>{job.location}</Location>
                            <Salary>{job.salary}</Salary>
                            <ApplyButton style={{ marginTop: 'auto', marginBottom: '10px' }}>Nộp đơn</ApplyButton> */}


                            </div>
                        </JobCard>
                    ))}
                </JobList>
                <Pagination>
                    <PageButton onClick={handlePrevPage} disabled={currentPage === 1}>
                        Trang Trước
                    </PageButton>
                    <PageInfo>Trang {currentPage} / {totalPages}</PageInfo>
                    <PageButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Trang Sau
                    </PageButton>
                </Pagination>
            </Container>
            <div>
                <Container2>
                    <Title1>Việc làm theo khu vực</Title1>
                    <Link1 href="/searchjob">Tại Hà Nội</Link1>
                    <Link1 href="/searchjob">Tại Hồ Chí Minh</Link1>
                    <Link1 href="/searchjob">Tại Đà Nẵng</Link1>
                    <Link1 href="/searchjob">Tại Bình Dương</Link1>
                    <Link1 href="/jobbyprovincepage"> Xem thêm</Link1>
                </Container2>
                <Container3>
                    <img src={toolcheck} alt="toolcheck" width="200px" height="200px" />
                </Container3>
            </div>
        </Container1>
    );
};
export default FindJobComponent