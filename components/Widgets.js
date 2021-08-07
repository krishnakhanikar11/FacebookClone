import { CameraIcon, DotsHorizontalIcon, SearchIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Widget from "./Widget";

const content = [
    {src: "https://links.papareact.com/f0p" , name: "Jeff Bezoz"},
    {src: "https://links.papareact.com/kxk" , name: "Elon Musk"},
    {src: "https://links.papareact.com/snf" , name: "Mark Zuckerberg"},
    {src: "https://links.papareact.com/zvy" , name: "Bill Gates"},
    {src: "https://links.papareact.com/d0c" , name: "Harry Potter"},
    {src: "https://links.papareact.com/6gg" , name: "The Queen"},
    {src: "https://links.papareact.com/r57" , name: "James Bond"}
]

function Widgets() {
    return (
        <div className="hidden md:flex flex-col w-60 mt-5 mr-3">
            <div className="flex justify-between items-center text-gray-500 mb-5 ">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-3">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6"/>
                    <DotsHorizontalIcon className="h-6"/>
                </div> 
            </div>
            <div >
                {content.map((item) => (
                    <Widget src={item.src} name={item.name}/>
                )

                )}  
            </div>
            
        </div>
    )
}

export default Widgets
