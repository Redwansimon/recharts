import DataTable from 'react-data-table-component';
import { Planet } from 'react-planet';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Table = () => {
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                selectableRows
            />
            <Tabs className="m-4 rounded-lg bg-blue-700">
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <div className='p-6 text-white'><TabPanel>
                    <h2>Any content 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum incidunt illo mollitia explicabo fugit reprehenderit, ab quidem consectetur impedit provident veniam fuga inventore beatae ex atque esse iste similique doloribus.</h2>
                </TabPanel>
                    <TabPanel>
                        <h2>Any content 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aut unde. Nostrum fugiat provident nisi, labore expedita dolorum ipsa! Cum nisi rem voluptatum vel enim facilis officia hic neque quae.</h2>
                    </TabPanel></div>
            </Tabs>
       

        </div>
    );
};

export default Table;
