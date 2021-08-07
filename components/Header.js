import Image from 'next/image';
import { BellIcon,ChatIcon,ChevronDownIcon,HomeIcon,UserGroupIcon,ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon,PlayIcon,FlagIcon,ShoppingCartIcon } from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon'
import {signOut, useSession} from 'next-auth/client'


function Header() {
    const [session] = useSession();

    return (
        <div className="sticky top-0 z-50 bg-white flex  items-center  p-1 shadow-md max-w-full">

        
        {/*left */}
            <div className="flex items-center p-3">
                <img src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'  width={50} height={50} layout="fixed"></img>
                <div className="flex items-center ml-2 rounded-full bg-gray-100 p-2 ">
                    <SearchIcon className="h-6 w-6 text-gray-600"/>
                    <input type='text' placeholder='Search Facebook' className="inputplace" />
                </div>
            </div>

        {/*center */}
            <div className="flex items-center justify-center flex-grow  ">
                <div className="flex  space-x-6 md:space-x-2">
                <HeaderIcon active Icon={HomeIcon}/>
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>

            {/*right */}
            <div className="flex items-center sm:space-x-2 justify-end pr-3">
                <img src={session.user.image} onClick={signOut} width={40} height={40} layout="fixed" className="rounded-full cursor-pointer"/>
                <p className="hidden sm:inline-flex font-semibold pr-3 whitespace-nowrap">{session.user.name}</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    )
}

export default Header


//_rfce
