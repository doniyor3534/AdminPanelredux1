import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SendIcon from '@mui/icons-material/Send';
import { InvoiceSaitbar } from './ALL';
import { Column, Line } from '@ant-design/plots';
import { Button, Drawer, Dropdown, Menu } from 'antd';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DoneAllIcon from '@mui/icons-material/DoneAll';




const DemoColumn = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    console.log(data);
    const config = {
        data,
        theme: 'dark',
        xField: '城市',
        yField: '销售额',
        xAxis: {
            label: {
                autoRotate: false,
            },
        },
        slider: {
            start: 0.1,
            end: 0.2,
        },
    };

    return <Column {...config} />;
};

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        2nd menu item
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        3rd menu item
                    </a>
                ),
            },
        ]}
    />
);

const DemoLine = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',

        slider: {
            start: 0.1,
            end: 0.5,
        },
    };

    return <Line {...config} />;
};


const Invoice = () => {
    const [visible, setVisible] = useState(false);
    const [placement] = useState('right');
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    // const onChange = (e) => {
    //     setPlacement(e.target.value);
    // };
    return (
        <div className='invoice'>
            <div className="invoiceLeft">
                <div className="dashboardhed">
                    <h1 className='h1'>Invoice</h1>
                    <Button type="primary" style={{ marginRight: '30px' }} onClick={showDrawer}>
                        ....
                    </Button>
                    <Drawer
                        title="Basic Drawer"
                        placement={placement}
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                        key={placement}
                    >
                        <InvoiceSaitbar />
                    </Drawer>
                </div>
                <div className="invoiceLeftPage">
                    <div className="invoiceLeftPageHead">
                        <div className="yourbalanse">
                            <p>Your Balance</p>
                            <h1>$12,890,00</h1>
                        </div>
                        <div className="income">
                            <p>Income</p>
                            <h5>$4345,00</h5>
                            <p><ExpandLessIcon />  +15%</p>
                        </div>
                        <div className="expanse">
                            <p>Expense</p>
                            <h5>$2890,00</h5>
                            <p><ExpandMoreIcon />  -10%</p>
                        </div>
                        <div className="withdrav">
                            <button className='withdravbtn' >Withdraw <SendIcon /> </button>
                        </div>
                    </div>
                    <div className="invoiceLeftBody">
                        <div className="invoiceLeftPageleft">
                            <div className="demochart">
                                <DemoColumn />
                            </div>
                            <h3 className='sendivoicetitle'>Send Invoices</h3>
                            <div className="sendVoci">
                                <div className="sendvociLeft">
                                    <p>Recipient</p>
                                    <Dropdown overlay={menu} placement="top" arrow={{ pointAtCenter: true }}>
                                        <Button>Select from list</Button>
                                    </Dropdown>
                                    <p>Amount</p>
                                    <button className='senvoicebtn'><MonetizationOnIcon />  Insert amount</button>
                                </div>
                                <div className="sendvociRight">
                                    <p>Recent Contact</p>
                                    <div className='bntgroup'>
                                        <Button type="primary" shape="circle"> A </Button>
                                        <Button type="primary" shape="circle"> A </Button>
                                        <Button type="primary" shape="circle"> A </Button>
                                        <Button type="primary" shape="circle"> A </Button>
                                    </div>
                                    <p>Reference</p>
                                    <button className='senvoicebtn'>Enter reference here    </button>
                                </div>
                            </div>
                            <button className='sendBtn' >Send  <SendIcon /> </button>
                        </div>
                        <div className="invoiceLeftPageRight">
                            <div className="invoiceNatija">
                                <button><DoneAllIcon /></button>
                                <span>
                                    <p>Invoice Completed</p>
                                    <h6>2.678</h6>
                                </span>
                                <div className="invoiceNatijaChart">
                                    <DemoLine />
                                </div>
                            </div>
                            <div className="invoiceNatija">
                                <button><DoneAllIcon /></button>
                                <span>
                                    <p>Invoice Completed</p>
                                    <h6>2.678</h6>
                                </span>
                                <div className="invoiceNatijaChart">
                                    <DemoLine />
                                </div>
                            </div>
                            <div className="invoiceNatija">
                                <button><DoneAllIcon /></button>
                                <span>
                                    <p>Invoice Completed</p>
                                    <h6>2.678</h6>
                                </span>
                                <div className="invoiceNatijaChart">
                                    <DemoLine />
                                </div>
                            </div>
                            <div className="invoiceNatija">
                                <button><DoneAllIcon /></button>
                                <span>
                                    <p>Invoice Completed</p>
                                    <h6>2.678</h6>
                                </span>
                                <div className="invoiceNatijaChart">
                                    <DemoLine />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Invoice;