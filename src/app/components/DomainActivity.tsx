import React from 'react'
import Image from "next/image"
import Title from './Title'
import { MaxContainer } from './Layout'
export default function DomainActivity() {

    const domainActivityData = [
        {
            id: 1,
            title: 'Nghiên cứu',
            description: 'Nghiên cứu về đa dạng sinh học nhằm thiết lập cơ sở dữ liệu khoa học phục vụ hoạt động bảo tồn ở miền Trung – Tây Nguyên',
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/08/LOGOtree-400x400.png',
        },
        {
            id: 2,
            title: 'Truyền thông giáo dục',
            description: 'Truyền thông và giáo dục nâng cao nhận thức của cộng đồng về Bảo tồn Đa dạng sinh học',
            imageUrl: '	https://greenviet.org/wp-content/uploads/2020/08/LOGOtree2-400x400.png',
        },
        {
            id: 3,
            title: 'Chính sách',
            description: 'Cung cấp thông tin cho cơ quan nhà nước, báo chí, các tổ chức liên quan với mục tiêu huy động sự tham gia của cả cộng đồng vào hoạt động bảo tồn.',
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/08/LOGOtree3-400x400.png',
        },

    ]

    return (
        <section className='bg-[#fff]'>
            <div className="flex flex-col text-white justify-center items-center gap-3 py-5">
                <Title title='Lĩnh vực hoạt động'/>
                <MaxContainer>
                <div className="flex max-[600px]:flex-col py-[50px]">
                    {domainActivityData.map((rc) => (
                        <div className="text-black flex flex-col gap-[15px] items-center justify-start px-3 py-3 flex-1" key={rc.id}>
                            <Image src={rc.imageUrl} alt="image" width={100} height={100} />
                            <h3 className="text-[28px] font-bold">{rc.title}</h3>
                            <p>{rc.description}</p>
                        </div>
                    ))}
                </div>
                </MaxContainer>

            </div>
        </section>
    )
}
