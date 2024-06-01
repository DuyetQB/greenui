import React from 'react'
import { MaxContainer } from './Layout'


export default function Mission() {
    const missionData = [
        {
            id: 1,
            title: 'TẦM NHÌN',
            description: 'Cộng đồng người Việt chủ động tham gia bảo tồn đa dạng sinh học Việt Nam',
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/08/logo01.3-400x400.png',
        },
        {
            id: 2,
            title: 'SỨ MỆNH',
            description: 'Bảo tồn hệ sinh thái và các loài động thực vật hoang dã nguy cấp tại Việt Nam thông qua nghiên cứu khoa học, hoạt động bảo tồn, giáo dục, truyền thông, vận động chính sách và truyền cảm hứng bảo tồn cho cộng đồng',
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/08/logo03.3-400x400.png',
        },
        {
            id: 3,
            title: 'GIÁ TRỊ CỐT LÕI',
            description: `<strong>Chính trực và có trách nhiệm:</strong> Chúng tôi chú trọng vào kết quả, trung thực về cả thành công và thất bại; trách nhiệm và uy tín với công việc, cộng đồng, đối tác và đồng nghiệp

            <strong>Học hỏi, đổi mới và sáng tạo:</strong> Chúng tôi tích cực học hỏi, đổi mới để tăng cường hiệu quả hoạt động, đề cao tính sáng tạo
            
            <strong>Tôn trọng sự khác biệt:</strong> Sự khác biệt mỗi cá nhân về tính cách, giới tính, độ tuổi, tư tưởng, văn hóa, tín ngưỡng
            
            <strong>Hợp tác:</strong> Chúng tôi tôn trọng tinh thần đồng đội, đối thoại đảm bảo ai cũng có cơ hội đóng góp cho sứ mệnh; khuyến khích nhân viên, đối tác phối hợp hướng tới giải pháp và sự hiệu quả
            
           <strong>Hạnh phúc:</strong>  Chúng tôi xây dựng một tổ chức trên cơ sở hướng tới hạnh phúc của nhân viên và đối tác
            
            <strong>Truyền cảm hứng:</strong> Chúng tôi hành động để truyền được cảm hứng cho cộng đồng chung tay bảo tồn đa dạng sinh học Việt Nam`,
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/08/logo04.3-400x400.png',
        },
        {
            id: 4,
            title: 'PHƯƠNG PHÁP TIẾP CẬN',
            description: `
            Chúng tôi làm việc trên thực địa để trực tiếp làm công tác bảo tồn và giải quyết việc mất môi trường sống và các loài động thực vật hoang dã

Chúng tôi hỗ trợ các sáng kiến về bảo tồn của cộng đồng để đảm bảo hiệu quả lâu dài khi áp dụng phương pháp tiếp cận và phát triển cộng đồng dựa vào nội lực (ABCD)

Chúng tôi tham gia vào quá trình vận động chính sách tại địa phương về những mục tiêu phù hợp với chuyên môn nhằm bổ sung thông tin và tác động đến những quyết định để đạt được các kết quả tích cực cho bảo tồn
            `,
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/08/logo02.3-2-400x400.png',
        },

    ]


    return (
        <section className="relative flex w-full items-center justify-center my-6 bg-[#fff]">
            {/* background */}
            <div
                className="w-full h-full bg-[url('https://greenviet.org/wp-content/uploads/2020/08/2573735-scaled-e1597837187301.jpg')] bg-cover bg-center py-6">
                <div className="w-full h-full flex  justify-center items-center bg-lightgrey absolute left-0 right-0 top-0 zIndex-[-1]">
                </div>
                 {/* content */}
            <div className="flex flex-col text-white justify-center items-center gap-3 py-5 zIndex-[10] relative">
                <MaxContainer>
                    <div className="grid grid-cols-2 gap-8 max-[600px]:grid-cols-1">
                        {missionData.map((rc) => (
                            <div className='flex items-start p-3'>
                                <img src={rc.imageUrl} alt="" width={100} height={100} className='object-contain' />
                                <div className='text-justify'>

                                    <h3 className='text-[1.5em] font-[500] py-3'>{rc.title}</h3>
                                    <p className='whitespace-pre-line' dangerouslySetInnerHTML={{ __html: rc.description }}></p>
                                </div>
                            </div>
                        ))}

                    </div>
                </MaxContainer>
            </div>
            </div>
           
        </section>
    )
}
