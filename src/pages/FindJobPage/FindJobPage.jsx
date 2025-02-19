import React from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import MainContentComponent from "../../components/MainContentComponent/MainContentComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import JobFilterComponent from "../../components/JobFilterComponent/JobFilterComponent";
import ButtonFilerComponent from "../../components/ButtonFilterComponent/ButtonFilterComponent";
import JobListDetailsComponent from "../../components/JobListDetailsComponent/JobListDetailsComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import background1 from '../../components/Assets/background1.png';
import toolcheck from '../../components/Assets/toolcheck.png';
import FindJobComponent from "../../components/FindJobComponent/FindJobComponent";

const FindJobPage = () => {
    const jobs = [
        { id: 1, isHot: true, title: "Thực tập sinh Marketing", company: "Joboko", location: "Hà Nội" },
        { id: 2, isHot: true, title: "Nhân viên Siêu thị", company: "Aeon Việt Nam", location: "Hà Nội" },
        // Thêm các công việc khác...
    ];
    return (
        <div>

            <HeaderComponent></HeaderComponent>
            <div>
                <SearchComponent />
                <ButtonFilerComponent />
            </div>
            <FindJobComponent />


            <div >
                <img style={{ width: '100%', marginTop: '10px' }} src={background1} alt="background"></img>
            </div>
            <FooterComponent />
        </div>
    )
}
export default FindJobPage