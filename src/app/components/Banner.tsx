import React from 'react'
import { MaxContainer } from './Layout'

export default function Banner() {
  return (
    <section className="relative flex w-full items-center justify-center">
        {/* background */}
        <div
          className="w-full h-full bg-[url('https://greenviet.org/wp-content/uploads/2020/05/bg-ve-chung-toi.jpg')] bg-cover bg-center py-[200px]">
          <div className="w-full h-full flex  justify-center items-center bg-backdrop absolute left-0 right-0 top-0">
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col text-white justify-center items-center gap-3 py-5 absolute">
        <MaxContainer>
          <div className="flex flex-col gap-[15px]">
            <p>Trang chủ</p>
            <h3 className="text-[40px] font-bold">GIỚI THIỆU</h3>
            <hr className="opacity-25" />
            <p>GreenViet tên đầy đủ là Trung tâm Bảo tồn Đa dạng Sinh học Nước Việt Xanh, thành lập vào tháng 10 năm 2012. Trung tâm hoạt động trong lĩnh vực Bảo tồn Đa dạng Sinh học khu vực miền Trung – Tây Nguyên</p>
          </div>
          </MaxContainer>
        </div>
      </section>
  )
}
