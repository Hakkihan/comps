// import Link from './components/Link';
import Sidebar from './components/sidebar';
import Route from './components/route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';


function App() {
    return ( <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
                {/* <Link to='/accordion'>Go to Accordion</Link>
                <Link to='/dropdown'>Go to Dropdown</Link> */}
                <Sidebar/>
                <div className="col-span-5">
                    <Route path="/accordion">
                        <AccordionPage></AccordionPage>
                    </Route>
                    <Route path="/">
                        <DropdownPage></DropdownPage>
                    </Route>
                    <Route path="/dropdown">
                        <DropdownPage></DropdownPage>
                    </Route>
                    <Route path="/button">
                        <ButtonPage></ButtonPage>
                    </Route>
                    <Route path="/modal">
                        <ModalPage></ModalPage>
                    </Route>
                    <Route path="/table">
                        <TablePage></TablePage>
                    </Route>
                    <Route path="/counter">
                        <CounterPage initialCount={10}></CounterPage>
                    </Route>
            
                </div>
            </div>);
}

export default App;