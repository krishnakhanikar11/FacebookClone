import Image from 'next/image';

function StoryCard({name,src,profile}) {
    return (
        <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-36 cursor-pointer overflow-x p-3  hover:scale-110 motion-reduce:transform-none hover:opacity-80">
            <Image src={profile} width={40} height={40} layout="fixed" objectFit="cover" className="absolute opacity-0 md:opacity-100 rounded-full z-20 top-10 cursor-pointer"/>
            <Image src={src} layout="fill" className="object-cover filter brightness-75 rounded-full md:rounded-3xl "/>
            <p className="absolute opacity-0 md:opacity-100  z-20 bottom-5 text-white ">{name}</p>
        </div>
    )
}

export default StoryCard
