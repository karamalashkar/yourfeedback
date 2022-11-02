import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Button from "../components/Button";

const Profile = ()=>{
    return(
        <>
            <div className="flex h-auto lg:h-screen bg-gray-100">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5">
                    <Topbar text={'Profile'} />
                    <div className="flex flex-col items-center lg:flex-row my-12">
                        <div className="flex justify-center w-full xl:w-2/4">
                            <img src='market.jpg' alt='profile picture' className="w-3/4 h-96 rounded-xl shadow-2xl" />
                        </div>
                        <div className="flex-col items-start w-3/4 mt-4 xl:w-2/4">
                            <h1 className="text-4xl font-bold">Market Name</h1>
                            <p className="mt-8 max-w-md h-auto text-lg">Bio</p>
                            <h2 className='my-8 text-lg'>Feedback Code: <span className="font-bold">Code</span></h2>
                            <Button text={'Edit Profile'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;