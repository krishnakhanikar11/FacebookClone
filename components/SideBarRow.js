import Image from 'next/image';

function SideBarRow({Icon,Title,src}) {
    return (
        <div className="flex align-center space-x-2 hover:bg-gray-200 rounded-xl cursor-pointer p-4">
            {src &&(
                <img src= {src} width={30} height={30} layout="fixed" className="rounded-full cursor-pointer"/>
            )}

            {Icon &&(
                <Icon className="h-7 w-7 text-blue-500 md:hover:text-blue-400" />
            )}
            <p className="hidden sm:inline-flex text-gray-500 pl-3 font-medium">{Title}</p>
            
            
        </div>
    )
}

export default SideBarRow
