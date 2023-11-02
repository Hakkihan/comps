
import Accordion from '../components/accordion';


function AccordionPage() {
    const items = [
        {
            id: '1',
            label: 'hi 1',
            content: 'bye 1'
        },
        {
            id: '2',
            label: 'hi 2',
            content: 'bye 2'
        },
        {
            id: '3',
            label: 'hi 3',
            content: 'bye3'
        }

    ]

   return <Accordion items={items} />;
}

export default AccordionPage;