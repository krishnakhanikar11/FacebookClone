
import Image from 'next/image';
import { useSession} from 'next-auth/client'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import {useRef, useState} from 'react';
import {db, storage}  from '../firebase';
import firebase from 'firebase';


function InputBox() {
    const [session] = useSession();
    const inputRef = useRef(null)
    const filePickerRef = useRef(null)
    const [imageToPost, setImageToPost] = useState(null);



    const sendPost = (e) => {
        e.preventDefault();

        //not allowing users to send empty response
        if (!inputRef.current.value) return;

        //sending input value of user
        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then((doc) => {
            if (imageToPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost,
                    "data_url");
                
                removeImage()
                
                //listening to the change
                uploadTask.on(
                    "state_change",
                    null,
                    (error) => console.error(error),
                    () => {
                        //when upload completes, push data to db
                        storage
                            .ref("posts")
                            .child(doc.id)
                            .getDownloadURL()
                            .then((url) => {
                                db.collection("posts").doc(doc.id).set(
                                    {
                                        postImage: url
                                    },
                                    {merge: true}
                                );
                            });
                    }
                )
            }
        });
       
        //clearing the input field
        inputRef.current.value ='';
    } ;

    //We take the file when the user clicks and then read that file as a dataURL. 
    //Now when it comes back, it comes back a result
    const uploadImage = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        };
    
   

    };

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className="bg-white rounded-2xl shadow-md text-gray-500 font-medium p-2 mt-6 ">
            <div className="flex p-3 space-x-4 items-center mb-3 mt-3">
                <img src= {session.user.image} width={40} height={40} layout="fixed" className="rounded-full cursor-pointer"/>
                <form className="flex flex-1 ">
                    <input type='text' placeholder={`What's on your mind, ${session.user.name}?`} ref={inputRef} className="bg-gray-100 
                    flex-grow px-5 rounded-full h-12   outline-none placeholder-gray-500 " />
                    <button hidden type="submit" onClick={sendPost}>Submit</button>
                </form>

                
                {imageToPost && (
                    //if imageToPost state is true then show is div
                    <div onClick={() => {setImageToPost(null);}} className="flex flex-col filter hover:brightness-110 transition duration-150 transform 
                    hover:scale-105 cursor-pointer">
                        <img className="h-10 object-contain" src={imageToPost}/>
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}
            </div>

            <div className="flex justify-evenly border-t p-3">
                <div className="inputIcon">
                    <VideoCameraIcon className="text-red-500 h-7"/>
                    
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>

                </div>
                    
                <div onClick={ ()=> filePickerRef.current.click()} className="inputIcon">
                    <CameraIcon  className="text-green-400 h-7"/>
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                    <input onChange={uploadImage} ref={filePickerRef} hidden type="file"/>

                </div>

                <div className="inputIcon">
                    <EmojiHappyIcon className="text-yellow-300 h-7"/>
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>

                </div>

            </div>
            
        </div>
    )
}

export default InputBox
