import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Discountbox from "../components/Discountbox";

const Discount = ()=>{
    return(
        <>
            <div className="flex h-auto sm:h-auto md:h-auto lg:h-screen xl:h-screen bg-gray-100">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5">
                    <Topbar text={'Discount'} />
                    <div className="flex flex-wrap justify-evenly">
                        <Discountbox />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discount;