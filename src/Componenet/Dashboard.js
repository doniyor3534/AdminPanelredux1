
import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import { Chartsccc } from './Charts';
import { Example, Minichart } from './chartsss/lineChart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useDispatch, useSelector } from 'react-redux';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Olcham, Saitbarrightdashboard } from './ALL';
import { Drawer, Button, Modal, Empty } from 'antd';
import { ADD, Mailfun } from '../redux/action/Action';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';



export const datachart = [
    [
        "Month",
        "Last Year",
        "this Year",

    ],
    ["yanvar", 465, 338],
    ["febral", 135, 1120],
    ["mart", 157, 867],
    ["aprel", 139, 1110],
    ["may", 236, 691],
    ["iyun", 136, 691],
    ["iyul", 136, 691],
    ["avgust", 536, 691],
    ["sentyabr", 136, 1091],
    ["oktyabr", 1236, 691],
    ["noyabr", 136, 691],
    ["dekabr", 136, 691],
];
export const options = {
    vAxis: { title: "Cups" },
    hAxis: { title: "years" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
};
const Dashboard = () => {
    const { contacts, dashHedCardsMas, comments } = useSelector(state => state)
    const dispatch = useDispatch()
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

    // ///////////Alert/////

    const AlertOK = () => {
        toast.success('Yuklandi')
    }
    const Alerterr = () => {
        toast.error('Error')
    }
    // const AlertWar = () => {
    //     toast.warning('Delete')
    // }
    // ///////////Alert/////
    //////////////////modal tel//
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modaltel, setModaltel] = useState({ tel: '' });
    const showModal = (val) => {
        setIsModalVisible(true);
        setModaltel(val)
    };
    const showModalemail = (val) => {
        setIsModalVisible(true);
        setModaltel(val)
    };
    const showModalForm = () => {
        setIsModalVisible(true);
        setModaltel('modalform')
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // /////////////////
    const mailclick = (id) => {
        dispatch(Mailfun(id))
    }
    /////////////////////modal form///
    const [input, setInput] = useState({
        id: null,
        name: '',
        comment: '',
        email: '',
        foiz: '',
        img: '',
        narx: null,
        tel: null
    })
    const inputfun = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const inputfunImg = (e) => {
        setInput({ ...input, img: URL.createObjectURL(e.target.files[0]) })
    }
    const nameVAll = comments.find(val => val.name === input.name)
    const emailVAll = comments.find(val => val.email === input.email)
    const imgVAll = comments.find(val => val.img === input.img)
    const telVAll = comments.find(val => val.tel === input.tel)
    const send = () => {
        if (nameVAll) {
            toast.error('name err')
        }
        if (emailVAll) {
            toast.error('email err')
        }
        if (imgVAll) {
            toast.error('img err')
        }
        if (telVAll) {
            toast.error('tel err')
        }
        if (input.name && input.comment && input.email && input.img && input.narx && input.tel && !nameVAll && !emailVAll && !imgVAll && !telVAll) {
            dispatch(ADD({ ...input, id: new Date().getTime() }))
            AlertOK()
            console.log(nameVAll);
        } else {
            Alerterr()
        }
    }

    const { t } = useTranslation()

    return (
        <div className='dashboard'>
            <div className="dashboardleft">
                <div className="dashboardhed">
                    <h1 className='h1'>{t('Dashboard')}</h1>
                    <Button type="primary" style={{ marginRight: '30px' }} onClick={showDrawer}>
                        ....
                    </Button>
                </div>
                <div className="proect_cards">

                    {
                        dashHedCardsMas.map((val) => (
                            <div className=" carddash" key={val.id}>
                                <img src={val.img} alt="" />
                                <div className="body">
                                    <p>{val.name}</p>
                                    <h4>{val.korsatkich}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="activity">
                    <div className="activity_head">
                        <h3>Activity</h3>

                        {/* <p className='activity_p1'><span></span> Last Year</p>
                    <p className='activity_p2'><span></span> Last Year</p> */}
                    </div>
                    {/* <Chart
                        chartType="ComboChart"
                        // data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                        width="100%"
                        height="400px"
                        legendToggle
                        options={options}
                        data={datachart}
                    /> */}
                    <Olcham/>
                    <div className="pieChart">
                        <h3>Pie chart</h3>
                        <div className="pieChartcard">
                            <Chartsccc />
                            <div className="piechartleft">
                                <Example />
                            </div>
                        </div>
                    </div>
                    <div className="analizcards">
                        <div className="analizcard">
                            <button className='balans1btn'><MonetizationOnIcon /></button>
                            <div className='dcolumn'>
                                <p>Total Balance</p>
                                <h5>$ 40.123</h5>
                            </div>
                            {/* <div  className='dcolumn'>
                          <h5>Average from last month</h5>
                          <p><span>+0,5%</span> invoices sent</p>
                        </div> */}
                        </div>
                        <div className="analizcard">
                            <button className='balans2btn'><ExpandMoreIcon /></button>
                            <div className='dcolumn'>
                                <p>$120.455</p>
                                <h5>$ 40.123</h5>
                            </div>
                            <>
                                <Minichart />
                            </>
                        </div>
                        <div className="analizcard">
                            <button className='balans3btn'><KeyboardControlKeyIcon /></button>
                            <div className='dcolumn'>
                                <p>$86.455</p>
                                <h5>Expense</h5>
                            </div>
                            <>
                                <Minichart />
                            </>
                        </div>
                    </div>
                </div>
                <div className="dashboardBody">
                    <div className="contact">
                        <div className="cantactHead">
                            <div className="contactTitle">
                                <h5>Contacts</h5>
                                <h4>You have <b><sup style={{ color: 'green' }}>{contacts.length}</sup></b> contacts</h4>
                                <Button onClick={showModalForm} >+</Button>
                            </div>

                        </div>
                        {
                            comments.length > 0 ?
                                comments.map((val) => (
                                    <Card className="contactBody" key={val.id}>
                                        <img src={val.img} alt="rasm" />
                                        <CardActionArea >
                                            <CardContent>
                                                <div className="contactBodyTitle">
                                                    <h6>{val.name}</h6>
                                                    <p>{val.title}</p>
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                        <div className="contactBodyBtnGroup">
                                            <button onClick={() => showModal(val.tel)} ><LocalPhoneIcon /></button>
                                            <button onClick={() => showModalemail(val.email)}><EmailIcon /></button>
                                        </div>
                                    </Card>
                                ))
                                : <Empty />
                        }
                        <Button variant="outlined" style={{ width: '100%', marginTop: '20px' }}>View More</Button>
                    </div>
                    <div className="massege">
                        <div className="cantactHead">
                            <div className="contactTitle">
                                <h5>Contacts</h5>
                                <h4>You have <b><sup style={{ color: 'green' }}>{contacts.length}</sup></b> contacts</h4>
                            </div>

                        </div>
                        {
                            contacts.map((val) => (
                                <Card className="contactBody" key={val.id}>
                                    <img src={val.img} alt="rasm" />
                                    <CardActionArea>
                                        <CardContent>
                                            <div className="contactBodyTitle">
                                                <h6>{val.name}</h6>
                                                <p>{val.title}</p>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                    <div className="contactBodyBtnGroup">
                                        {
                                            val.messege ?
                                                <button><DoneAllIcon /></button>
                                                :
                                                <button onClick={() => mailclick(val)} ><EmailIcon /></button>
                                        }
                                    </div>
                                </Card>
                            ))
                        }
                        <Button variant="outlined" style={{ width: '100%', marginTop: '20px' }}>View More</Button>
                    </div>
                </div>
            </div>
            <Drawer
                title="Basic Drawer"
                placement={placement}
                closable={false}
                onClose={onClose}
                visible={visible}
                key={placement}
            >
                <Saitbarrightdashboard />
            </Drawer>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>tell ... / Massege...</p>
                {
                    modaltel === 'modalform' ?
                        <>
                            <form onSubmit={send} >
                                <label htmlFor="Name">Name</label>
                                <input type="text" style={nameVAll ? { border: '1px solid red' } : !input.name ? { border: '1px solid grey' } : { border: '1px solid green' }} className='form-control  my-2' placeholder='Name' name='name' onChange={inputfun} value={input.name} />
                                <label htmlFor="email">Email</label>
                                <input type="email" style={emailVAll ? { border: '1px solid red' } : !input.email ? { border: '1px solid grey' } : { border: '1px solid green' }} className='form-control  my-2' placeholder='Email' name='email' onChange={inputfun} value={input.email} />
                                <label htmlFor="comment" >Comment</label>
                                <input type="text" style={!input.comment ? { border: '1px solid grey' } : { border: '1px solid green' }} className='form-control  my-2' placeholder='comment' name='comment' onChange={inputfun} value={input.comment} />
                                <label htmlFor="Foiz">Foiz</label>
                                <input type="number" style={!input.foiz ? { border: '1px solid grey' } : { border: '1px solid green' }} className='form-control my-2' placeholder='...%' name='foiz' onChange={inputfun} value={input.foiz} />
                                <label htmlFor="img">Image</label>
                                <input type="file" style={imgVAll ? { border: '1px solid red' } : !input.img ? { border: '1px solid grey' } : { border: '1px solid green' }} className='form-control my-2' placeholder='img' name='img' onChange={inputfunImg} />
                                <label htmlFor="narx">Narx</label>
                                <input type="number" style={!input.narx ? { border: '1px solid grey' } : { border: '1px solid green' }} className='form-control my-2' placeholder='narx' name='narx' onChange={inputfun} value={input.narx} />
                                <label htmlFor="tel">Tel</label>
                                <input type="number" style={telVAll ? { border: '1px solid red' } : !input.tel ? { border: '1px solid grey' } : { border: '1px solid green' }} className='form-control my-2' placeholder='+998....' name='tel' onChange={inputfun} value={input.tel} />
                                <button className={input.name && input.comment && input.email && input.img && input.narx && input.tel ? 'btn btn-primary w-50 my-3' : 'btn btn-warning disabled w-50 my-3'}  >Add</button>
                            </form>
                        </>
                        :modaltel=== 'card' ?
                                    <h1>ggg</h1>
                        :<h1 className='tel'>{modaltel}</h1>
                }
            </Modal>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;