import React, { useState } from 'react';
import { SaitbarrightEmail } from './ALL';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import DescriptionIcon from '@mui/icons-material/Description';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GroupsIcon from '@mui/icons-material/Groups';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Button, Drawer, Empty, Modal } from 'antd';
import Card from '@mui/material/Card';
import { CardActionArea, CardContent, CardMedia } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { ADD } from '../redux/action/Action';
import { useTranslation } from 'react-i18next';



const Email = () => {
    const { comments } = useSelector(state => state)
    const dispatch = useDispatch()
    const [emailpagenation, setEmailpagenation] = useState(1)
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
    // //////////////alert//
    const AlertOK = () => {
        toast.success('Yuklandi')
    }
    const Alerterr = () => {
        toast.error('Error')
    }
    // const AlertWar = () => {
    //     toast.warning('Warning')
    // }
    // ///////////Alert/////
    // //////////////alert//
    // ///////////////////////
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modaltel, setModaltel] = useState({ tel: '' });
    // const showModal = (val) => {
    //     setIsModalVisible(true);
    //     setModaltel(val)
    // };
    // const showModalemail = (val) => {
    //     setIsModalVisible(true);
    //     setModaltel(val)
    // };
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
    // ///////////////////////
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
    const nameVAll = comments.find(val => val.name===input.name)
    const emailVAll = comments.find(val => val.email===input.email)
    const imgVAll = comments.find(val => val.img===input.img)
    const telVAll = comments.find(val => val.tel===input.tel)
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
    // ///////////////////////
   const {t} = useTranslation()
    return (
        <div className='emailpage'>
            <div className="emailcenterpage">

                <div className="dashboardhed">

                    <h1 className='h1'>{t('Email')}</h1>
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
                        <SaitbarrightEmail />?
                    </Drawer>
                </div>
                <div className="emailBlock">
                    <div className="emailBlockleft">
                        <button className='newmail' onClick={showModalForm} ><ControlPointIcon />  </button>
                        <ul>
                            <li className='active'> <BrandingWatermarkIcon /> inbox 99</li>
                            <li> <SendIcon />Sent</li>
                            <li> <StarIcon />Favorite</li>
                            <li> <DescriptionIcon />Draft</li>
                            <li> <LabelImportantIcon />Important</li>
                            <li> <AccessTimeIcon />Scheduled</li>
                            <li> <KeyboardArrowDownIcon />More</li>
                        </ul>
                        <div className='labels'>
                            <p className="label">
                                Labels
                            </p>
                            <label htmlFor="work" className='work' >
                                <input type="checkbox" id='work' /> Work
                            </label>
                            <label htmlFor="SideProjects" className='SideProjects' >
                                <input type="checkbox" id='SideProjects' /> Side Projects
                            </label>
                            <label htmlFor="Offer" className='Offer' >
                                <input type="checkbox" id='Offer' /> Offer
                            </label>
                        </div>
                    </div>
                    <div className="emailBlockright">
                        <div className="head">
                            <h6 className={emailpagenation === 1 ? 'active' : ''} onClick={() => setEmailpagenation(1)}> <BrandingWatermarkIcon />Primary</h6>
                            <h6 className={emailpagenation === 2 ? 'active' : ''} onClick={() => setEmailpagenation(2)}> <GroupsIcon /> Social</h6>
                            <h6 className={emailpagenation === 3 ? 'active' : ''} onClick={() => setEmailpagenation(3)}>  <CreditCardIcon />Promotion</h6>
                        </div>
                        <div className="body">
                            {
                                comments.length > 0 ?
                                    <>
                                        {
                                            emailpagenation === 1 ?
                                                comments.map((val) => (
                                                    <Card className="bodyCard" key={val.id}>
                                                        <CardActionArea className='bodyCard2'>
                                                            <CardMedia
                                                                component='img'
                                                                height="140"
                                                                image={val.img}
                                                                alt="green iguana"
                                                            />
                                                            {/* <img src={val.img} alt="rasm" /> */}
                                                            <CardContent>
                                                                <div className="bodycardTitle ">
                                                                    <h2>{val.name}</h2>
                                                                    <p>{val.comment}</p>
                                                                    <h6 className='gery '>{val.email}</h6>
                                                                    <h6 className='gery'>{val.tel}</h6>
                                                                </div>
                                                            </CardContent>
                                                            <div className="bodycardright">
                                                                <p>1h</p>
                                                                <div className="bodycardrightBtnGroup">
                                                                    <StarIcon />
                                                                    <AttachFileIcon />
                                                                </div>
                                                            </div>
                                                        </CardActionArea>
                                                    </Card>
                                                ))
                                                : emailpagenation === 2 ?
                                                    comments.map((val) => (
                                                        <Card className="bodyCard" key={val.id}>
                                                            <CardActionArea className='bodyCard2'>
                                                                <CardMedia
                                                                    component='img'
                                                                    height="140"
                                                                    image={val.img}
                                                                    alt="green iguana"
                                                                />
                                                                {/* <img src={val.img} alt="rasm" /> */}
                                                                <CardContent>
                                                                    <div className="bodycardTitle">
                                                                        <h2>{val.name}</h2>
                                                                        <p>{val.comment}</p>
                                                                        <h6 className='gery '>{val.email}</h6>
                                                                        <h6 className='gery'>{val.tel}</h6>
                                                                    </div>
                                                                </CardContent>
                                                                <div className="bodycardright">
                                                                    <p>1h</p>
                                                                    <div className="bodycardrightBtnGroup">
                                                                        <StarIcon />
                                                                        <AttachFileIcon />
                                                                    </div>
                                                                </div>
                                                            </CardActionArea>
                                                        </Card>
                                                    ))
                                                    : emailpagenation === 3 ?
                                                        comments.map((val) => (
                                                            <Card className="bodyCard" key={val.id}>
                                                                <CardActionArea className='bodyCard2'>
                                                                    <CardMedia
                                                                        component='img'
                                                                        height="140"
                                                                        image={val.img}
                                                                        alt="green iguana"
                                                                    />
                                                                    {/* <img src={val.img} alt="rasm" /> */}
                                                                    <CardContent>
                                                                        <div className="bodycardTitle">
                                                                            <h2>{val.name}</h2>
                                                                            <p>{val.comment}</p>
                                                                            <h6 className='gery '>{val.email}</h6>
                                                                            <h6 className='gery'>{val.tel}</h6>
                                                                        </div>
                                                                    </CardContent>
                                                                    <div className="bodycardright">
                                                                        <p>1h</p>
                                                                        <div className="bodycardrightBtnGroup">
                                                                            <StarIcon />
                                                                            <AttachFileIcon />
                                                                        </div>
                                                                    </div>
                                                                </CardActionArea>
                                                            </Card>
                                                        ))
                                                        : 'ddddddd'
                                        }
                                    </>
                                    : <Empty />
                            }
                        </div>
                        <div className="footer">
                            <button><KeyboardArrowLeftIcon /></button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button><KeyboardArrowRightIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
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
                        : <h1 className='tel'>{modaltel}</h1>
                }
            </Modal>
            <ToastContainer />
        </div>
    );
};

export default Email;