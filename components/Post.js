import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import Image from 'next/image';


function Post({name,message,timestamp,postImage,email,image}) {
    return (
        <div className="flex flex-col">
            
            <div className="p-5 mt-5 bg-white shadow-sm rounded-t-2xl">
                <div className="flex items-center space-x-3">
                    <img className="rounded-full" src={image} width={40} height={40} />
                    <div >
                        <p className="font-medium">{name}</p>
                        <p className="font-xs text-gray-400">{new Date(timestamp?.toDate()).toLocaleString()}</p>
                    </div>  
                </div>
                <p className="p-4">{message}</p>
            </div>

                       
            {postImage && (
                <div className="flex justify-center relative h-56 md:h-96 bg-white ">
                    <Image src={postImage} objectFit="cover" layout="fill"/>
                </div>
            )}

            
            <div className="  p-5  bg-white shadow-sm rounded-bl-2xl rounded-br-2xl text-gray-400 border-t">
                <div className="flex  space-x-2">
                    <div className="inputIcon items-center">
                        <ThumbUpIcon className="h-4" />
                        <p className="text-xs sm:text-base">
                            Like
                        </p>
                    </div>
                    <div className="inputIcon items-center"> 
                        <ChatAltIcon className="h-4" />
                            <p className="text-xs sm:text-base">
                                Comment
                            </p>
                    </div>
                    <div className="inputIcon items-center">
                        <ShareIcon className="h-4" />
                            <p className="text-xs sm:text-base">
                                Share
                            </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Post



