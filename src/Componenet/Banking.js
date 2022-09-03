import React, { useState } from 'react';
import { BankingSaitbar } from './ALL';
import { Select, Button, Drawer } from 'antd';
import { BidirectionalBar } from '@ant-design/plots';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { EnhancedTable } from './Tablee';





const DemoBidirectionalBar = () => {
    const data = [
        {
            country: 'Yanvar',
            '2016年耕地总面积': 13.4,
            '2016年转基因种植面积': 12.3,
        },
        {
            country: 'Febral',
            '2016年耕地总面积': 14.4,
            '2016年转基因种植面积': 6.3,
        },
        {
            country: 'Mart',
            '2016年耕地总面积': 18.4,
            '2016年转基因种植面积': 8.3,
        },
        {
            country: 'Aprel',
            '2016年耕地总面积': 34.4,
            '2016年转基因种植面积': 13.8,
        },
        {
            country: 'May',
            '2016年耕地总面积': 44.4,
            '2016年转基因种植面积': 19.5,
        },
        {
            country: 'Iyun',
            '2016年耕地总面积': 24.4,
            '2016年转基因种植面积': 18.8,
        },
        {
            country: 'Iyul',
            '2016年耕地总面积': 54.4,
            '2016年转基因种植面积': 24.7,
        },
        {
            country: 'Avgust',
            '2016年耕地总面积': 104.4,
            '2016年转基因种植面积': 5.3,
        },
        {
            country: 'Sentyabr',
            '2016年耕地总面积': 165.2,
            '2016年转基因种植面积': 72.9,
        },
    ];
    const config = {
        data,
        theme: 'dark',
        layout: 'vertical',
        xField: 'country',
        yField: ['2016年耕地总面积', '2016年转基因种植面积'],
        yAxis: {
            '2016年耕地总面积': {
                nice: true,
            },
            '2016年转基因种植面积': {
                min: 0,
                max: 100,
            },
        },
        tooltip: {
            shared: true,
            showMarkers: false,
        },
    };
    return <BidirectionalBar {...config} />;
};
// /////////////////////////////////////////////////////////////////////////////
const Banking = () => {


    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const { Option } = Select;
    ;


    // ///////////table

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
        <div className='banking'>
            <div className="dashboardhed">
                <h1 className='h1'>Banking</h1>
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
                      <BankingSaitbar />
                </Drawer>
            </div>
            <div className="bankingPage">
                <div className="bankingLeft">
                    <div className="profit">
                        <div className="proftiTitle">
                            <h5>Profit</h5>
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                        <div className="proftiTitleBody">
                            <DemoBidirectionalBar />
                        </div>
                    </div>
                    <div className="lesttest">
                        <div className="lestestTitle">
                            <h5>Lastest Transaction</h5>
                            <div className="lestBtnGroup">
                                <Button  > Newest  <ArrowDropDownIcon /> </Button>
                                <Button  > <LocalPrintshopIcon /> </Button>
                                <Button  > <FileDownloadIcon /> </Button>
                            </div>
                        </div>
                        <div className="lestestBody">
                            <div style={{ height: 400, width: '100%' }}>
                                <EnhancedTable />
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default Banking;