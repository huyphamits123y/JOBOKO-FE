import React from "react";
import { Content, JobColumn, JobItem, JobListContainer, ProvinceItem, ProvinceList, Title, TitleContent, Wrapper, WrapperContent } from "./styled";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import image3 from '../../components/Assets/image3.png';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
const JobByProvincePage = () => {
    const jobs = [
        // Danh sách công việc theo tỉnh thành
        'Việc làm tại Hà Nội',
        'Việc làm tại Hồ Chí Minh',
        'Việc làm tại Đà Nẵng',
        'Việc làm tại Hà Nội',
        'Việc làm tại Hồ Chí Minh',
        'Việc làm tại Đà Nẵng',
        'Việc làm tại Hà Nội',
        'Việc làm tại Hồ Chí Minh',
        'Việc làm tại Đà Nẵng',
        'Việc làm tại Hà Nội',
        'Việc làm tại Hồ Chí Minh',
        'Việc làm tại Đà Nẵng',
        'Việc làm tại Hà Nội',
        'Việc làm tại Hồ Chí Minh',
        'Việc làm tại Đà Nẵng',
        'Việc làm tại Hà Nội',
        'Việc làm tại Hồ Chí Minh',
        'Việc làm tại Đà Nẵng',
        'Việc làm tại Hà Nội',
        'Việc làm tại Hồ Chí Minh',
        'Việc làm tại Đà Nẵng',
        'Việc làm tại Hà Nội',
        'Việc làm tại Hồ Chí Minh',
        'Việc làm tại Đà Nẵng',
        // ... thêm dữ liệu tại đây
    ];
    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };
    const textParts = [
        "Các khu công nghiệp...công nhân sản xuất.",
        <br key="break1" />, // Key là bắt buộc khi map qua mảng các element
        "Ngoài ra, các địa điểm...các vị trí.",
    ];
    const content1 = [
        "Các khu công nghiệp sản xuất ở miền Bắc tập trung tại một số tỉnh như Bắc Ninh, Hải Phòng, Bắc Giang, Thái Nguyên... cung cấp nhiều cơ hội cho kỹ sư sản xuất, nhân viên quản lý chất lượng, nhân viên vận hành máy móc và công nhân sản xuất.",
        <br />,

        "Ngoài ra, các địa điểm du lịch nổi tiếng như Ninh Bình, Hà Giang, Quảng Ninh, Hà Nội... thúc đẩy ngành dịch vụ và du lịch phát triển, cung cấp nhiều cơ hội việc làm lễ tân khách sạn, hướng dẫn viên du lịch và nhân viên đặt phòng. Nhu cầu tìm việc làm ở Hà Nội vẫn là cao nhất khi có rất nhiều doanh nghiệp tuyển dụng đa dạng các vị trí."
    ]
    const content2 = [
        "Miền Trung với các thành phố trọng điểm về du lịch như Đà Nẵng, Huế và Quảng Nam, là nơi lý tưởng để phát triển sự nghiệp.",
        <br />,
        "Cơ hội việc làm theo tỉnh miền Trung: Hướng dẫn viên du lịch, Nhân viên lễ tân khách sạn, Nhân viên đặt phòng, Kiến trúc sư, Kỹ sư xây dựng, Quản lý dự án, Nông dân, Kỹ thuật viên nông nghiệp, Nhân viên chế biến thực phẩm, Lái xe, Quản lý logistic."
    ]
    const content3 = [
        "Miền Nam nổi tiếng với sự phát triển mạnh mẽ của nền kinh tế, trong đó thành phố Hồ Chí Minh, Bình Dương, Bình Phước, Đồng Nai, Bà Rịa - Vũng Tàu là những trung tâm kinh tế lớn nhất. Các ngành nghề như dịch vụ, công nghiệp và nông nghiệp đều phát triển mạnh.",
        <br />,
        "Cơ hội việc làm theo tỉnh miền Nam: Kỹ sư sản xuất, Nhân viên giao hàng, Chuyên viên quản lý chất lượng, Kỹ thuật viên, Nhân viên ngân hàng, Chuyên viên tư vấn tài chính, Nhân viên bảo hiểm, Nhân viên bán hàng, Quản lý cửa hàng, Chuyên viên tiếp thị, Nhân viên lễ tân khách sạn, Đầu bếp, Hướng dẫn viên du lịch."
    ]
    const content4 = [
        "Tin tuyển dụng việc làm theo tỉnh thành tổng hợp thông tin về thị trường lao động và các cơ hội việc làm cụ thể tại tỉnh thành đó, giúp ứng viên nhanh chóng tìm được công việc ưng ý, từ đó tạo CV và thư xin việc của mình sao cho phản ánh rõ kinh nghiệm, kỹ năng và mục tiêu nghề nghiệp phù hợp với đặc điểm địa phương và ngành nghề của tỉnh thành. Dưới đây là một số mẹo tìm việc làm theo tỉnh thành hiệu quả:",
        <br />,
        "- Sử dụng nền tảng tuyển dụng uy tín như TìmViệc.com.vn để tìm kiếm việc làm theo tỉnh bạn có thể lọc công việc theo địa điểm và tìm việc làm theo ngành nghề mong muốn.",
        <br />,
        "- Theo dõi trang web tuyển dụng chính thức của các công ty, tổ chức, doanh nghiệp.",
        <br />,
        "- Tham gia các sự kiện tuyển dụng tại địa phương, tận dụng các mối quan hệ cá nhân để kết nối cơ hội việc làm mong muốn.",
        <br />,
        "- Nhờ bạn bè, người thân giới thiệu việc làm.",
        <br />,
        "Như vậy, việc làm theo từng khu vực đều có những đặc trưng và cơ hội riêng, hiểu rõ về thị trường làm việc cụ thể sẽ giúp người tìm việc nắm bắt cơ hội tốt nhất."
    ]
    const jobChunks = chunkArray(jobs, Math.ceil(jobs.length / 3));
    return (
        <div>
            <HeaderComponent />


            <SearchComponent />
            <Wrapper>
                <Title>TÌM VIỆC LÀM THEO TỈNH THÀNH</Title>
                <JobListContainer>
                    {jobChunks.map((chunk, index) => (
                        <JobColumn key={index}>
                            {chunk.map((job, idx) => (
                                <JobItem key={idx}>{job}</JobItem>
                            ))}
                        </JobColumn>
                    ))}
                </JobListContainer>
            </Wrapper>
            <WrapperContent>
                <TitleContent>Nhu cầu tuyển dụng ở đâu cao nhất?</TitleContent>
                <Content>Nắm bắt xu hướng thị trường lao động tại một tỉnh thành cụ thể sẽ tạo điều kiện cho việc tìm kiếm việc làm một cách hiệu quả. Trước tiên, bạn hãy theo dõi xu hướng việc làm tại khu vực mình đang sinh sống để tối ưu hóa thời gian tìm được công việc phù hợp.</Content>
                <TitleContent>Xu hướng việc làm tại khu vực miền Bắc</TitleContent>
                <Content>{content1}</Content>
                <TitleContent>Việc làm khu vực miền Trung phổ biến nhất</TitleContent>
                <Content>{content2}</Content>
                <TitleContent>Việc làm khu vực miền Nam có nhu cầu tuyển dụng cao</TitleContent>
                <Content>{content3}</Content>
                <TitleContent>Cách tìm việc làm theo tỉnh thành hiệu quả</TitleContent>
                <Content>{content4}</Content>
                <div style={{ textAlign: 'center' }}>
                    <img src={image3} alt="image"></img>
                    <h4>Tuyển dụng việc làm trực tuyến tại 63 tỉnh thành trên JobOKO</h4>

                </div>
                <Content>JobOKO là giải pháp hiệu quả để ứng viên tìm kiếm việc làm theo tỉnh nhanh chóng. Với giao diện thân thiện và hàng ngàn công việc từ nhiều ngành nghề khác nhau, TìmViệc.com.vn giúp người tìm việc nắm bắt cơ hội tốt nhất và ứng tuyển một cách thuận lợi.</Content>

            </WrapperContent>
            <FooterComponent />
        </div>
    )
}
export default JobByProvincePage