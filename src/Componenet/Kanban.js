import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Button, Tabs, Progress, Badge, Empty } from 'antd';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactlessIcon from '@mui/icons-material/Contactless';
import MessageIcon from '@mui/icons-material/Message';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';


export const onMenuClick = (e) => {
    console.log('click', e);
};

// const menu = (
//     <Menu
//         onClick={onMenuClick}
//         items={[
//             {
//                 key: '1',
//                 label: '1st item',
//             },
//             {
//                 key: '2',
//                 label: '2nd item',
//             },
//             {
//                 key: '3',
//                 label: '3rd item',
//             },
//         ]}
//     />
// );

const { TabPane } = Tabs;



export const Tab1 = () => {
    const { comments } = useSelector(state => state)
    console.log(comments);
    return (
        <div className="tab1">
            <div className="tab1Cards">
                {
                    comments.length > 0 ?
                        comments.map((val) => (
                            <Card className="tab1Card" key={val.id}>
                                <CardActionArea>
                                    <img src={val.img} alt="rasm" />
                                    <CardContent>
                                        <h5>{val.name}</h5>
                                        <p>{val.comment}</p>
                                        <div style={{ width: '100%' }} className="tab1cardRange">
                                            <Progress percent={val.foiz} size="small" status={val.status} />
                                        </div>
                                        <div className="tab1CardFooter">
                                            <Badge count={99} offset={[30, 0]} style={{ backgroundColor: '#52c41a' }}>
                                                <button><GroupsIcon /></button>
                                            </Badge>
                                            <Badge count={100} offset={[30, 0]} style={{ backgroundColor: 'grey' }} >
                                                <button><ContactlessIcon /></button>
                                            </Badge>
                                            <Badge count={100} offset={[30, 0]} style={{ backgroundColor: 'blue' }}>
                                                <button><MessageIcon /></button>
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))
                        : <Empty />
                }
            </div>
        </div>
    )
}
export const Tab2 = () => {
    return (
        <div className="tab1">
            <Empty />
        </div>
    )
}
export const Tab3 = () => {
    return (
        <div className="tab1">
            <Empty />
        </div>
    )
}



const Kanban = () => {
    return (
        <div className='kanban'>
            <h1 className='h1'>Kanban</h1>
            <div className="kanbanHead">
                <div className="kanbanHeadLeft">
                    <h6>Project #1  Board</h6>
                    <StarIcon />
                    <Button type="primary">Private</Button>
                    <Button type="primary">Invite People</Button>
                    <Button>Edit</Button>
                </div>
                <div className="kanbanHeadRight">
                    <button className="newProject">New Project +</button>
                </div>
            </div>
            <div className="tabsCards">
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="All" key="1">
                        <Tab1 />
                    </TabPane>
                    <TabPane tab="To-do" key="2">
                        <Tab2 />
                    </TabPane>
                    <TabPane tab="On Progress" key="3">
                        <Tab3 />
                    </TabPane>
                    <TabPane tab="Completed" key="4">
                        <Tab3 />
                    </TabPane>
                    <TabPane tab="On review" key="5">
                        <Tab3 />
                    </TabPane>
                    <TabPane tab="Revised" key="6">
                        <Tab3 />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default Kanban;