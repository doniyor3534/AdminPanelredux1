import React from 'react';
import { useSelector } from 'react-redux';
import CircleIcon from '@mui/icons-material/Circle';
import { Button, Drawer, Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import { useState } from 'react';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { TicketingSaitbar } from './ALL';






const Ticketing = () => {
    const { tickeding, comments } = useSelector(state => state)
    const originData = [];
    comments.map((val, i) => (
        originData.push({
            key: i.toString(),
            opp: <ImportExportIcon />,
            name: val.name,
            address: `-$${val.narx}`,
        })
    ))
    // const handleChange = (value) => {
    //     console.log(`selected ${value}`);
    // };
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            age: '',
            address: '',
            ...record,
        });
        setEditingKey(record.key);
    }
    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };
    const cancel = () => {
        setEditingKey('');
    };
    const columns = [
        {
            title: 'opp',
            dataIndex: 'opp',
            width: '25%',
            editable: true,
        },
        {
            title: 'name',
            dataIndex: 'name',
            width: '15%',
            editable: true,
        },
        {
            title: 'address',
            dataIndex: 'address',
            width: '40%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a href='.'>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        rules={[
                            {
                                required: true,
                                message: `Please Input ${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };
    // //////////////////////////
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
        <div className='TTicketing'>
            <div className="dashboardhed">
                <h1 className='h1'>Ticketing</h1>
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
                     <TicketingSaitbar />
                </Drawer>
            </div>
            <div className="tcketingPage">
                <div className="ticketingLeft">
                    <div className="ticketingLeftHead">
                        {
                            tickeding.map((val) => (
                                <div className="ticketingCard" key={val.id}>
                                    <p><CircleIcon style={{ color: `${val.rangi}` }} />   {val.name}</p>
                                    <h4>{val.soni}</h4>
                                </div>
                            ))
                        }
                    </div>
                    <div className="ticketingBody">
                        <Table
                            components={{
                                body: {
                                    cell: EditableCell,
                                },
                            }}
                            bordered
                            dataSource={data}
                            columns={mergedColumns}
                            rowClassName="editable-row"
                            pagination={{
                                onChange: cancel,
                            }}
                        />
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default Ticketing;