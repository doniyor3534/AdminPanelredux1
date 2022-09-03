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
import { useSelector } from 'react-redux';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Button, Drawer, Empty } from 'antd';
import Card from '@mui/material/Card';
import { CardActionArea, CardContent, CardMedia } from '@mui/material';



const Email = () => {
    const { comments } = useSelector(state => state)
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
    return (
        <div className='emailpage'>
            <div className="emailcenterpage">

                <div className="dashboardhed">

                    <h1 className='h1'>Email</h1>
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
                        <button className='newmail'><ControlPointIcon />  </button>
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
                                                                <div className="bodycardTitle">
                                                                    <h2>{val.name}</h2>
                                                                    <p>{val.comment}</p>
                                                                    <h6 className='gery '>{val.email}</h6>
                                                                    <h6  className='gery'>{val.tel}</h6>
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
                                                                    <h6  className='gery'>{val.tel}</h6>
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
                                                                        <h6  className='gery'>{val.tel}</h6>
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
        </div>
    );
};

export default Email;