import Button from '../components/button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';


function ButtonPage() {

    
    return <div>
            <div><Button primary className="mb-5">Click here <GoBell/> </Button></div>
            <div><Button secondary outline>Welcome <GoCloudDownload/> </Button></div>
            <div><Button warning>Thank you <GoDatabase/></Button></div>
            <div><Button danger>Hi</Button></div>
            <div><Button success rounded outline>yh</Button></div>
            App
            </div>;
}

export default ButtonPage;