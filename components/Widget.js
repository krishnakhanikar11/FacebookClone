import Image from 'next/image';

function Widget({src,name}) {
    return (
        <div className="flex justify-start items-center mb-2 space-x-3 p-2 item-center relative cursor-pointer">
            
            <Image className=" rounded-full" width={40} height={40} src={src} objectFit="cover"/>
            <div><p>{name}</p></div>
        </div>
    )
}

export default Widget
