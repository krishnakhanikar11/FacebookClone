
import { BellIcon,CalendarIcon,ChatIcon,ChevronDownIcon,DesktopComputerIcon,HomeIcon,ShoppingBagIcon,UserGroupIcon,UserIcon,UsersIcon,ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon,PlayIcon,FlagIcon,ShoppingCartIcon } from '@heroicons/react/outline';
import {useSession} from 'next-auth/client'
import SideBarRow from './SideBarRow'




function SideBar() {
    const [session] = useSession();
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:max-w-[300px]  ">
            <SideBarRow src={session.user.image} Title={session.user.name } />
            <SideBarRow Icon={UsersIcon} Title="Friends" />
            <SideBarRow Icon={UserGroupIcon} Title="Groups" />
            <SideBarRow Icon={ShoppingBagIcon} Title="Marketplace" />
            <SideBarRow Icon={DesktopComputerIcon} Title="Watch" />
            <SideBarRow Icon={CalendarIcon} Title="Events" />
            <SideBarRow Icon={ChevronDownIcon} Title="See More"  />
        </div>
    )
}

export default SideBar
