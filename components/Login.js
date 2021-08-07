import {signIn} from 'next-auth/client'

function Login() {
    return (
        <div className="h-screen bg-blue-500 flex justify-center items-center" >
            <div className=" bg-white rounded-2xl shadow-md" >
                <div className="p-10 flex flex-col space-y-6 ">
                    <img src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'  width={150} height={150} objectFit="contain" ></img>
                    <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full text-center text-white md:hover:bg-blue-600 cursor-pointer">Login with Facebook</h1>
                 </div>   
            </div>
        </div>
    )
}

export default Login

