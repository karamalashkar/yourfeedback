import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Box from "../components/Box";
import Chart from "../components/Chart";

const Home = ()=>{
    return(
        <>
            <div className="flex h-auto lg:h-screen bg-gray-100">
                <div className="w-1/5">
                    <Sidebar />
                </div>    
                <div className="w-4/5">
                    <Topbar text={'Home'} />
                    <div className="flex flex-col items-center lg:flex-row justify-evenly">
                        <Box />
                        <Box />
                        <Box />
                    </div>
                    <div className="flex flex-col items-center my-12 h-auto w-2/4 lg:flex-row">
                        <Chart />   
                        <Chart />
                    </div>    
                </div>
            </div>
        </>
    )
}

export default Home;