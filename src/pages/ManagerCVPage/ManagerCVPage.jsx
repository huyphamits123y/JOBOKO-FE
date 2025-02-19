import React, { useState } from "react";
import {
    Container,
    Header,
    Button,
    CVList,
    CVItem,
    CVTitle,
    CVLink,
    CVActions,
    UploadForm,
    Input,
    Label,
    Modal,
    Overlay,
    SupportContainer,
    TitleOptions,
    Description,
    SupportOptions,
    SupportButton,
} from "./styled";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { TiPhoneOutline } from "react-icons/ti";
import { GoMail } from "react-icons/go";
import background1 from '../../components/Assets/background1.png';
const ManagerCVPage = () => {
    const [cvList, setCvList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCvTitle, setNewCvTitle] = useState("");
    const [newCvFile, setNewCvFile] = useState(null);

    const handleFileUpload = (e) => {
        setNewCvFile(e.target.files[0]);
    };

    const handleAddCv = () => {
        if (newCvTitle && newCvFile) {
            const newCv = {
                id: cvList.length + 1,
                title: newCvTitle,
                fileUrl: URL.createObjectURL(newCvFile),
                uploadTime: new Date().toLocaleString(),
            };
            setCvList([...cvList, newCv]);
            setNewCvTitle("");
            setNewCvFile(null);
            setIsModalOpen(false);
        }
    };

    return (
        <div>
            <HeaderComponent />
            <SearchComponent />
            <Container>
                <Header>
                    <h2>DANH SÁCH CV</h2>
                    <Button onClick={() => setIsModalOpen(true)}>TẠO CV</Button>
                </Header>
                <CVList>
                    {cvList.map((cv) => (
                        <CVItem key={cv.id}>
                            <div>
                                <CVTitle>{cv.title}</CVTitle>
                                <CVLink href={cv.fileUrl} target="_blank">
                                    {cv.fileUrl}
                                </CVLink>
                                <p>{cv.uploadTime}</p>
                            </div>
                            <CVActions>
                                <button>Đặt CV chính</button>
                                <a href={cv.fileUrl} target="_blank" rel="noopener noreferrer">
                                    Xem
                                </a>
                                <a href={cv.fileUrl} download>
                                    Tải xuống
                                </a>
                                <button
                                    onClick={() => setCvList(cvList.filter((item) => item.id !== cv.id))}
                                >
                                    Xóa
                                </button>
                            </CVActions>
                        </CVItem>
                    ))}
                </CVList>

                {isModalOpen && (
                    <Overlay>
                        <Modal>
                            <h3>Tạo CV Mới</h3>
                            <UploadForm>
                                <Label>
                                    Tiêu đề CV
                                    <Input
                                        type="text"
                                        value={newCvTitle}
                                        onChange={(e) => setNewCvTitle(e.target.value)}
                                        placeholder="Nhập tiêu đề CV..."
                                    />
                                </Label>
                                <Label>
                                    Tải lên file PDF
                                    <Input type="file" accept="application/pdf" onChange={handleFileUpload} />
                                </Label>
                                <Button onClick={handleAddCv}>Lưu</Button>
                                <Button onClick={() => setIsModalOpen(false)}>Hủy</Button>
                            </UploadForm>
                        </Modal>
                    </Overlay>
                )}
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

export default ManagerCVPage;
