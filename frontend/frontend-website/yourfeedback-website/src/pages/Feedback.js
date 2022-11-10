import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";

const Feedback = ()=>{
    return(
        <>
            <div className="flex h-full bg-gray-100">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5">
                    <Topbar text={'Feedback'} />
                    <div className="flex flex-wrap justify-evenly">
                        <Card />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback;