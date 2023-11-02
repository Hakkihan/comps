//the whole purpose of this link function is to prevent a whole page refresh upon 
//clicking on an anchor element within our application


// import { useContext } from 'react';
// import NavigationContext from '../context/navigation';
import useNavigation from '../hooks/use-navigation';
import classNames from 'classnames';



function Link({to, children, className, activeClassName}) {

    // const {navigate} = useContext(NavigationContext);
    const {navigate, currentPath} = useNavigation();

    //remember the && operator returns the first falsy value or the last truthy value
    const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);


    const handleClick = (event) => {

        if(event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();

        navigate(to);

    }
    return <a href={to} className={classes} onClick={handleClick}>{children}</a>
}

export default Link;