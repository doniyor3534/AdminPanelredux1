import { Link, NavLink } from 'react-router-dom'
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import ArticleIcon from '@mui/icons-material/Article';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import StarIcon from '@mui/icons-material/Star';
import ReportIcon from '@mui/icons-material/Report';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CollectionsIcon from '@mui/icons-material/Collections';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import SendIcon from '@mui/icons-material/Send';
import { Select, Button, Progress, Calendar, AutoComplete, Input } from 'antd';
import { Gauge, Liquid } from '@ant-design/plots';
import React, { useEffect, useRef, useState } from 'react';
import { DollarCircleOutlined, EuroCircleOutlined, PayCircleOutlined, PoundOutlined } from '@ant-design/icons';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Statistic, Avatar, Tooltip } from 'antd';
import { red, green } from '@ant-design/colors';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SSelect from '@mui/material/Select';
import { Collapse, Navbar, NavbarToggler,  Nav } from 'reactstrap';





export const Navbarpage = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const [UZ, setUZ] = React.useState('');
    const handleChange = (event) => {
        setUZ(event.target.value);
    };
    const [ setVisible] = useState(false);
    // const [placement, setPlacement] = useState('left');
    const showDrawer = () => {
        setVisible(true);
    };
    // const onClose = () => {
    //     setVisible(false);
    // };
    // const onChange = (e) => {
    //     setPlacement(e.target.value);
    // };
    // const [top, setTop] = useState(10);
    // const [bottom, setBottom] = useState(10);
    // const drownclik = () => {
    //     setTop(top + 10)
    //     showDrawer()
    // }
    // /////////search//
    const renderTitle = (title) => (
        <span>
            {title}
            <a
                style={{
                    float: 'right',
                }}
                href="https://www.google.com/search?q=antd"
                target="_blank"
                rel="noopener noreferrer"
            >
                more
            </a>
        </span>
    );
    const renderItem = (title, count) => ({
        value: title,
        label: (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {title}
                <span>
                    <UserOutlined /> {count}
                </span>
            </div>
        ),
    });

    const options = [
        {
            label: renderTitle('Dashboard'),
            options: [renderItem('Dashboard', 10000), renderItem('Contact', 10600)],
        },
        {
            label: renderTitle('Emaiclpage'),
            options: [renderItem('Emaiclpage', 60100), renderItem('Crypto', 30010)],
        },
        {
            label: renderTitle('Invoice'),
            options: [renderItem('Invoice', 100000)],
        },
    ];
    return (
        //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <div class="container-fluid">
        //     <div className="navleft">
        //             <div className="btn-group">
        //                 <button ><SearchIcon /></button>
        //                 <input type="search" placeholder='search here....' />
        //             </div>
        //         </div>
        //       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon "></span>
        //       </button>
        //       <div class="collapse navbar-collapse" id="navbarNav">
        //       <div className="navright">
        //             <Button type="primary" style={{ background: 'white', boxShadow: 'none', border: 'none' }} onClick={showDrawer}>
        //                 <TextsmsIcon />
        //             </Button>
        //             <Button type="primary" style={{ background: 'white', boxShadow: 'none', border: 'none' }} onClick={showDrawer}>
        //                 <NotificationsActiveIcon />
        //             </Button>

        //             <FormControl sx={{ m: 1, minWidth: 80 }}>
        //                 <InputLabel id="demo-select-small">UZB</InputLabel>
        //                 <SSelect
        //                     labelId="demo-select-small"
        //                     id="demo-select-small"
        //                     value={UZ}
        //                     onChange={handleChange}
        //                     autoWidth
        //                     label="UZ"
        //                     size='small'
        //                     style={{height:'40px'}}
        //                 >
        //                     <MenuItem value="">
        //                         <em>None</em>
        //                     </MenuItem>
        //                     <MenuItem value={10}>UZB</MenuItem>
        //                     <MenuItem value={21}>RUS</MenuItem>
        //                     <MenuItem value={22}>Eng</MenuItem>
        //                 </SSelect>
        //             </FormControl>
        //         </div>
        //         <Drawer
        //             title="Basic Drawer"
        //             placement={placement}
        //             closable={false}
        //             onClose={onClose}
        //             visible={visible}
        //             key={placement}
        //         >
        //             <p>Some contents...</p>
        //             <p>Some contents...</p>
        //             <p>Some contents...</p>
        //         </Drawer>
        //       </div>
        //     </div>
        //   </nav>

        <Navbar color="faded" light className='navabr navbar-expand-lg'>

            <div href="" className="me-auto d-flex align-items-center ">
                <div className="btn-group">
                    <AutoComplete
                        dropdownClassName="certain-category-search-dropdown"
                        dropdownMatchSelectWidth={500}
                        style={{
                            width: 200,
                        }}
                        options={options}
                    >
                        <Input size="small" style={{background:'transparent'}} placeholder="input here" />
                    </AutoComplete>
                </div>
            </div>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav className="navright">
                    <Button type="primary" style={{ background: 'white', boxShadow: 'none', border: 'none' }} onClick={showDrawer}>
                        <TextsmsIcon />
                    </Button>
                    <Button type="primary" style={{ background: 'white', boxShadow: 'none', border: 'none' }} onClick={showDrawer}>
                        <NotificationsActiveIcon />
                    </Button>

                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-select-small">UZB</InputLabel>
                        <SSelect
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={UZ}
                            onChange={handleChange}
                            autoWidth
                            label="UZ"
                            size='small'
                            style={{ height: '40px' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>UZB</MenuItem>
                            <MenuItem value={21}>RUS</MenuItem>
                            <MenuItem value={22}>Eng</MenuItem>
                        </SSelect>
                    </FormControl>

                </Nav>

            </Collapse>
        </Navbar>

    )
}
// ////////////
export const Saitbar = () => {
    return (
        <div className="saitbar">
            <Link to='/' ><img src="./img/images.jfif" alt="" className='logo' /></Link>
            <ul>
                <NavLink activeclassname='active' to='/'> <HomeIcon />  Dashboard</NavLink>
                <NavLink activeclassname='active' to='/email'> <EmailIcon />  Email</NavLink>
                <NavLink activeclassname='active' to='/contact'> <PermContactCalendarIcon />  Contact</NavLink>
                <NavLink activeclassname='active' to='/crypto'> <CurrencyExchangeIcon />  Crypto</NavLink>
                <NavLink activeclassname='active' to='/kanban'> <ViewCompactIcon />  Kanban</NavLink>
                <NavLink activeclassname='active' to='/invoice'> <ArticleIcon />  Invoice</NavLink>
                <NavLink activeclassname='active' to='/banking'> <AccountBalanceWalletIcon />  Banking</NavLink>
                <NavLink activeclassname='active' to='/ticketing'> <CreditCardIcon />   Ticketing</NavLink>
            </ul>
        </div>
    )
}
// /////////
const DemoLiquid = () => {
    const config = {
        percent: 0.25,
        outline: {
            border: 4,
            distance: 8,
        },
        wave: {
            length: 128,
        },
    };
    return <Liquid {...config} />;
};
export const Saitbarrightdashboard = () => {
    const { comments, resentActiv } = useSelector(state => state)
    return (
        <div className=" saitbarright">
            <div className="serverStatus">
                <DemoLiquid />
            </div>
            <h3>User Ravies</h3>
            <div className="userravieCards">
                {
                    comments.map((val) => (
                        <div className="userraviesCard" key={val.id}>
                            <div className="userraviesCardHead">
                                <img src={val.img} alt="rasm" />
                                <div className="reytincard">
                                    <h6>{val.name}</h6>
                                    ******
                                </div>
                            </div>
                            <div className="userraviesCardBody">
                                <p>{val.comment}</p>
                            </div>
                            <div className="userraviesCardFooter">
                                <button className="archive">Archive</button>
                                <button className="accert">Accert</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="resentActive">

                <h6>Recent Activity</h6>
                <div className="resentcards">
                    {
                        resentActiv.map((val) => (
                            <div className="resentcard" key={val.id}>
                                <div className="resentcardHead">
                                    <h6>{val.name}</h6>
                                    <p>{val.title} </p>
                                </div>
                                <p>{new Date().getDay()}.{new Date().getMonth()}.{new Date().getFullYear()}</p>
                                <span style={{ border: `3px solid ${val.rangi} ` }}></span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
// /////////
export const SaitbarrightEmail = () => {
    return (
        <div className=" saitbarrightEmail">
            <div className="serverStatus">
                <h3>Preview</h3>
                <div className="praviewbtngroup">
                    <button><DeleteIcon /></button>
                    <button><OpenInFullIcon /></button>
                    <button><HighlightOffIcon /></button>
                </div>
            </div>
            <div className="wekiy">
                <div className="wekiyLeft">
                    <h3>Weekly Meeting Report</h3>
                    <p>Today, March 30th 2021  04:45 PM</p>
                </div>
                <div className="praviewbtngroup">
                    <button><StarIcon /></button>
                    <button><ReportIcon /></button>
                </div>
            </div>
            <div className="KarenHope">
                <h6>Karen Hope</h6>
                <p>soap@mail.com</p>
            </div>
            <p>Hi Madison, <br />

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                Regards,
                Nadila</p>
            <div className="prewievCards">
                <div className="prewievCard">
                    <div className="prewievcardHead"></div>
                    <div className="prewievcardbody">
                        <AttachFileIcon />    Details.pdf
                    </div>
                </div>
                <div className="prewievCard">
                    <div className="prewievcardHead"></div>
                    <div className="prewievcardbody">
                        <AttachFileIcon />    IMG_001.jpg
                    </div>
                </div>
            </div>
            <div className="massegeCard">
                <div className="massegeCardhead">
                    <p>Write your message here...</p>
                </div>
                <div className="massegeCardbody">
                    <img src="./img/text.png" alt="" />
                </div>
            </div>
            <div className="priwievFooter">
                <AttachFileIcon />
                <CollectionsIcon />
                <LinearScaleIcon />
                <button>Send <SendIcon /></button>
            </div>
        </div>
    )
}
// /////////
export const DemoGauge = () => {
    const ticks = [0, 1 / 3, 2 / 3, 1];
    const color = ['#F4664A', '#FAAD14', '#30BF78'];
    const graphRef = useRef(null);
    const config = {
        percent: 0,
        innerRadius: 0.75,
        type: 'meter',
        // 自定义 meter 总步数 以及 step 占比
        meter: {
            steps: 50,
            stepRatio: 0.6,
        },
        range: {
            ticks: [0, 1],
            color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
        },
        indicator: {
            pointer: {
                style: {
                    stroke: '#D0D0D0',
                },
            },
            pin: {
                style: {
                    stroke: '#D0D0D0',
                },
            },
        },
        statistic: {
            title: {
                formatter: ({ percent }) => {
                    if (percent < ticks[1]) {
                        return 'A';
                    }

                    if (percent < ticks[2]) {
                        return 'B';
                    }

                    return 'D';
                },
                style: ({ percent }) => {
                    return {
                        fontSize: '36px',
                        lineHeight: 1,
                        color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],
                    };
                },
            },
            content: {
                offsetY: 36,
                style: {
                    fontSize: '24px',
                    color: '#4B535E',
                },
                formatter: () => 'Bomba',
            },
        },
        onReady: (plot) => {
            graphRef.current = plot;
        },
    };
    useEffect(() => {
        if (graphRef.current) {
            let data = 0.7;
            const interval = setInterval(() => {
                if (data >= 1.5) {
                    clearInterval(interval);
                }

                data += 0.005;
                graphRef.current.changeData(data > 1 ? data - 1 : data);
            }, 100);
        }
    }, [graphRef]);

    return <Gauge {...config} />;
};

export const CryptoSaitbar = () => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };
    const { Option } = Select;

    return (
        <div className="cryptoSaitbar">
            <div className="cryptosaitbarhead">
                <h2>Market Activity</h2>
                <Select
                    height={100}
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </div>
            <div className="cryptochartdacchik">
                <DemoGauge />
            </div>
            <h4>Recent Trading</h4>
            <div className="bitcoincards">
                <div className="bitcoincard">
                    <DollarCircleOutlined />
                    <div className="bitcoinname">
                        <h6>Bitcoin</h6>
                        <p>BTC</p>
                    </div>
                    <div className="narx">
                        <h6>$13.90</h6>
                        <p>Today, 12:30 AM</p>
                    </div>
                </div>
                <div className="bitcoincard">
                    <EuroCircleOutlined />
                    <div className="bitcoinname">
                        <h6>Bitcoin</h6>
                        <p>BTC</p>
                    </div>
                    <div className="narx">
                        <h6>$13.90</h6>
                        <p>Today, 12:30 AM</p>
                    </div>
                </div>
                <div className="bitcoincard">
                    <PoundOutlined />
                    <div className="bitcoinname">
                        <h6>Bitcoin</h6>
                        <p>BTC</p>
                    </div>
                    <div className="narx">
                        <h6>$13.90</h6>
                        <p>Today, 12:30 AM</p>
                    </div>
                </div>
                <div className="bitcoincard">
                    <PayCircleOutlined />
                    <div className="bitcoinname">
                        <h6>Bitcoin</h6>
                        <p>BTC</p>
                    </div>
                    <div className="narx">
                        <h6>$13.90</h6>
                        <p>Today, 12:30 AM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
// /////////
export const InvoiceSaitbar = () => {
    const { comments } = useSelector(state => state)
    return (
        <div className="invoiceSaitbar">
            <h1>Lastest Invoice</h1>
            <div className="invoiceSaitbarhead">
                <p>invoice ID</p>
                <p>Status</p>
                <p></p>
            </div>
            <div className="invoiceSaitbarBody">
                {
                    comments.map((val) => (
                        <div className="invoiceSaitbarCard" key={val.id}>
                            <div>
                                <h6>#id {val.id}</h6>
                                <p>{val.name}</p>
                            </div>
                            {
                                val.status === 'active' ?
                                    <Button type="danger" danger ghost><CancelIcon className='colorRed' /> UnPaid </Button>
                                    : <Button type="primary" ghost ><CheckCircleIcon className='colorgreen' /> Paid </Button>

                            }
                            <div className="invoiceSaitbarCardBtn">
                                <LinearScaleIcon />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
// /////////
export const BankingSaitbar = () => {
    const { Countdown } = Statistic;
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK


    const onFinish = () => {
        console.log('finished!');
    };


    return (
        <div className="bankingSaitber">
            <div className="bankingSaitbarCard">
                <img src="./img/creditcard.png" alt="" />
            </div>
            <div className="sevinges">
                <h4>Savings</h4>
                <div className="site-statistic-demo-card">
                    <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
                    <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                </div>
                <Progress percent={50} steps={3} />
                <br />
                <Progress percent={30} steps={5} />
                <br />
                <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
                <br />
                <Progress percent={60} steps={5} strokeColor={[green[6], green[6], red[5]]} />
            </div>
        </div>
    )
}
// /////////
export const TicketingSaitbar = () => {
    const { tickeding } = useSelector(state => state)
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    return (
        <div className="tickeingSaitbar">
            <h1 className="h1">Calendar</h1>
            <div className="site-calendar-customize-header-wrapper">
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
            <div className="Today">
                <h1 className="h1 today">Today</h1>
                {
                    tickeding.map((val) => (
                        <div className="todaycard" key={val.id}>
                            <div className="cardborder" style={{ background: `${val.rangi} ` }} ></div>
                            <div className="cardCenter">
                                <p>{new Date().getDay()} /{new Date().getMonth()} /{new Date().getFullYear()} </p>
                                <h6>{val.name}</h6>
                            </div>
                            <div className="cardright">
                                <Avatar.Group>
                                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                                    <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                    <Tooltip title="Ant User" placement="top">
                                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                    </Tooltip>
                                    <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                                </Avatar.Group>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
// /////////
// /////////
// /////////
// /////////


