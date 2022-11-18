import { StackNavigation } from "./StackNavigation";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { useSelector } from 'react-redux';

const StackSwitcher =()=> {
    const user=useSelector((state)=>state.token);
    return user? <BottomTabNavigation /> : <StackNavigation />
}

export default StackSwitcher;