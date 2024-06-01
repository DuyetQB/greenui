import React from 'react'
import Title from './Title'
import { MaxContainer } from './Layout'

export default function HistoryCreation() {
    return (
        <section className='bg-[#fff]'>
            <div className="flex flex-col text-white justify-center items-center gap-3 py-5">
                <Title title='Lịch sử thành lập' />
                <MaxContainer>
                    <div className="flex gap-[30px] max-[600px]:flex-wrap max-[600px]:flex-col max-[600px]:p-4 py-[50px]">
                        {/* images */}
                        <div className='flex-1 w-full'>

                            <div className='flex py-5'>
                                <img src="https://greenviet.org/wp-content/uploads/2020/08/GreenViet-team-2-e1598499474918.png" alt=""
                                    className='w-[50%]'
                                />
                                <img src="https://greenviet.org/wp-content/uploads/2020/08/logo-ko%C2%B4-slogan-800x800.png" alt=""
                                    className='w-[50%]' />

                            </div>

                            <img src="https://greenviet.org/wp-content/uploads/2020/08/GreenViet-team-5-e1598499374783.png" alt="" />

                        </div>
                        {/* content */}
                        <div className='flex-1'>
                            <p className='text-black text-justify'>Ý tưởng thành lập tổ chức phi chính phủ có tên GreenViet bắt nguồn từ tiến sĩ Hà Thăng Long và nhóm nghiên cứu trẻ làm công tác nghiên cứu và bảo tồn đa dạng sinh học ở vườn quốc gia Kon Ka Kinh, tỉnh Gia Lai từ năm 2006. Những người sáng lập mong muốn xây dựng Trung Tâm GreenViet là nơi tập hợp những con người tâm huyết có cùng mong muốn tìm hiểu, nghiên cứu, phổ biến các giá trị của đa dạng sinh học đến cộng đồng người dân Việt Nam nhằm nâng cao hiểu biết, thúc đẩy hành động của cộng đồng trong việc bảo tồn đa dạng sinh học và ứng xử thân thiện với môi trường, sử dụng một cách bền vững tài nguyên đa dạng sinh học của Việt Nam.</p>
                            <h3 className='text-green text-justify text-[1.75rem] font-[500] my-5'>Khởi đầu</h3>
                            <p className='text-black text-justify'>GreenViet bắt đầu chỉ có 4 người là tiến sĩ Hà Thăng Long, Trần Hữu Vỹ, Nguyễn Thị Tịnh, Lãnh Tuấn Bảo khi cùng tham gia chương trình nghiên cứu tập tính sinh thái loài Chà vá chân xám ở Vườn quốc gia Kon Ka Kinh, Gia Lai. Những ý tưởng ban đầu hình thành rõ nét hơn cùng những chuyến nghiên cứu thực địa mà cả nhóm thực hiện từ năm 2006 – 2008.</p>
                            <h3 className='text-green text-justify text-[1.75rem] font-[500] my-5'>Thành lập</h3>
                            <p className='text-black text-justify'>Tháng 9 năm 2011, các hoạt động đặt nền móng cho quá trình xây dựng tổ chức như thảo luận phương hướng, tạo dựng mạng lưới, xúc tiến thủ tục cho việc thành lập trung tâm được thực hiện. Ngày 04 tháng 10 năm 2012, Trung tâm GreenViet chính thức được thành lập theo quyết định số 44/QĐ-LHH của Liên hiệp các Hội khoa học và kỹ thuật thành phố Đà Nẵng (tên gọi tắt là GreenViet). Sở Khoa học và Công nghệ thành phố Đà Nẵng cấp giấy phép hoạt động số 14 vào ngày 23 tháng 10 năm 2012.</p>
                        
                        </div>

                    </div>
                </MaxContainer>


            </div>
        </section>
    )
}
