import React from 'react'
import { MaxContainer } from './Layout';

type TitleProps = {
    title: string
    subTitle?: string
}

export default function Title({ ...props }: TitleProps) {
    const { title, subTitle } = props;

    return (
        <MaxContainer>
            {subTitle && <p className='my-2 text-[#646464] dark:text-white'>{subTitle}</p>}
            <h3 className="text-[#43a906] text-[2rem]">{title}</h3>
            <div className="text-center flex justify-center w-full max-w-[1170px]">
                <div className="max-w-[70px] bg-green bg-opacity-75 h-[3px] w-full"></div>
            </div>
        </MaxContainer>
    )
}
