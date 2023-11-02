//The purpose of this file is to save having to write out useNavigationContext and the imports in files which use the navigationContext 
import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigation() {
    return useContext(NavigationContext);
    
}

export default useNavigation;