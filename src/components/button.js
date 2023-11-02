// import PropTypes from 'prop-types';
import className from 'classnames';
// import Button from './components/button';
// import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function Button({children, primary, secondary, success, warning, danger, outline, rounded, ...rest}) {
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary === true,
        'border-gray-900 bg-gray-900 text-white': secondary === true,
        'border-green-500 bg-green-500 text-white': success === true,
        'border-yellow-400 bg-yellow-400 text-white': warning === true,
        'border-red-500 bg-red-500 text-white': danger === true,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger

    });
    return <button {...rest} className={classes}> {children}</button>
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        // console.log(props);
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);

        if( count > 1) {
            return new Error('Multiple props (primary, secondary, success, warning, danger) provided.');
        }

        
    }
}

export default Button;