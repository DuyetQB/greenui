import React from 'react'
import Image from "next/image"
import Title from './Title'
import { MaxContainer } from './Layout'
export default function Activities() {

    const subSection = [
        {
            id: 1,
            title: 'Trải nghiệm thiên nhiên Sơn Trà',
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/08/DSC_0819-scaled-e1598517739941.jpg',
        },
        {
            id: 2,
            title: 'Nghiên cứu động thực vật',
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/08/anh97-1-e1598517903752.jpg',
        },
        {
            id: 3,
            title: 'Giáo dục cho học sinh',
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/08/DSC09546-2048x1363.jpg',
        },
        {
            id: 4,
            title: 'Tổ chức hội thảo',
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/08/anh80-e1596812929763.png',
        },
        {
            id: 5,
            title: 'Tập huấn năng lực',
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/08/anh72-e1596811037699.jpg',
        },
        {
            id: 6,
            title: 'Tổ chức hoạt động môi trường',
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/08/anh22.jpg',
        },
        {
            id: 7,
            title: 'Nâng cao nhận thức thanh niên',
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/07/anh7-e1598518941741.png',
        },
        {
            id: 8,
            title: 'Tổ chức hoạt động trồng cây',
            imageUrl: 'https://greenviet.org/wp-content/uploads/2020/08/20200629_080958-2048x1152.jpg',
        },

    ]

    const mainSection = {
        title: 'Những hoạt động tại Greenviet',
        description: 'Trung tâm GreenViet đã có 10 năm kinh nghiệm hoạt động trong lĩnh vực bảo tồn Đa dạng Sinh học. Với mục tiêu và sứ mệnh rõ ràng, Trong suốt thời gian qua Trung tâm đã vận động được sự tham gia nhiệt tình của cộng đồng, Tình nguyện viên, nhà báo, nhà khoa học, vận động chính quyền,… để thúc đẩy công tác bảo tồn ở khu vực miền Trung – Tây Nguyên mạnh mẽ hơn.',
        imageUrl: 'https://greenviet.org/wp-content/uploads/2020/05/dscn5281-3-fotor-1489190745649.jpg',
        subSection: subSection
    }

    return (
        <section className='bg-[#fff]'>
            <div className="flex flex-col text-white justify-center items-center gap-3 py-6">
                <Title title='Các Hoạt Động Tại Greenviet' subTitle='Chúng Ta Làm Gì' />
                <MaxContainer>
                    <div className="flex max-[600px]:flex-wrap py-[50px] text-black">
                        <div className='flex-1 text-justify p-5'>
                            <h3 className='text-[1.5rem] font-[500] py-3'>{mainSection.title}</h3>
                            <p>{mainSection.description}</p>
                        </div>
                        <div className='flex-2 p-2'>
                            <img src={mainSection.imageUrl} alt="image" className='w-full' />
                        </div>
                    </div>
                    <div className=' grid grid-cols-4 gap-4 px-2 max-[600px]:grid max-[600px]:grid-cols-2'>
                        {mainSection.subSection.map((rc) => (
                            <div className={'w-full relative text-center'} key={rc.id}>
                                <div className="w-full h-full flex  justify-center items-center bg-lightgrey absolute left-0 right-0 top-0">
                                </div>
                                <img src={rc.imageUrl} alt="" className='w-full h-full object-cover' />
                                <div className='text-center absolute bottom-[20%] left-0 right-0'>
                                    <p className='text-[0.75em]'>{rc.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-3 py-[60px] flex-col'>
                        <h3 className='text-[20px] font-bold text-[#646464]'>Follow us</h3>
                        <div className="text-center flex justify-center gap-4" >
                            <a href="https://www.facebook.com/greenvietcenter" target="_blank" data-label="Facebook" rel="noopener noreferrer nofollow" className="
                            bg-[#0000ff] w-[50px] h-[50px] rounded-full flex justify-center items-center 
                            ">
                                <Image alt="" width={24} height={24} src="/facebook.svg" />
                            </a>
                            <a href="mailto:admin@greenviet.org" data-label="E-mail" rel="nofollow" className="bg-[#000] w-[50px] h-[50px] rounded-full flex justify-center items-center ">
                                <Image alt="" width={24} height={24} src="/envelope.svg" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCfe2iaaWNC7-_BmIe-qP6UA" target="_blank" rel="noopener noreferrer nofollow" data-label="YouTube" className="bg-[#c33223] w-[50px] h-[50px] rounded-full flex justify-center items-center ">
                                <Image alt="" width={24} height={24} src="/youtube.svg" />
                            </a>
                        </div>
                    </div>
                </MaxContainer>

            </div>
        </section>
    )
}
