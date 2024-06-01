
export const MaxContainer = ({ children }:{ children :React.ReactNode}) =>{
    return (
        <div className='max-w-[1170px] w-full text-center'>
            {children}
        </div>
    )
}