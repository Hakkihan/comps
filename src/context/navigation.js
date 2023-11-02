import { createContext, useState, useEffect} from 'react';


//Create a context, and a Provider. And then the Provider will be passed onto other components. More specifically,
//the Provider will pass on **two** props: the {currentPath} prop and the {navigate} proo.
//
const NavigationContext = createContext();

function NavigationProvider({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    //we need to listen out for the popstate event, and rerender (*NOT Refresh*, but rerender). The useEffect arrow function here 
    //is an effect which is doing that for us (or else we won't see any re-render).
    //btw, this stuff is handling when we use pushState via the medium of listening to popstate, but not when we are redirecting with external links (etc involving a refresh)
    useEffect(() => {
        const handler = () => {
            //the only reason why the next line is here is to cause rerender (but not refresh)
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);

        //unlikely, but when the navigationprovider component is about to be removed from the screen, 
        //we want to clear the event listener
        return () => {
            window.removeEventListener('popstate', handler);
        }
        
    //we only want to call the useEffect arrow function once, hence the [] in the next line
    }, []); 



    //navigate is needed because pushstate only adds an entry to the active history, but doesn't trigger popstate (remember that the
    // forward/back buttons on the browser end up triggering the popstate when the active history changes).
    //Therefore, setCurrentPath ends up updating currentPath which fires a popstate event.
    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);

    };


    return <NavigationContext.Provider value={{ currentPath, navigate}}>                
                {children}
            </NavigationContext.Provider>
};


export {NavigationProvider};
export default NavigationContext;