import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Line, Area } from '@ant-design/plots';
import { CryptoSaitbar } from './ALL';
import { Button, Drawer } from 'antd';



export const Page = () => {

  const data = [
    { year: '1991', value: 3, },
    { year: '1992', value: 4, },
    { year: '1993', value: 3.5, },
    { year: '1994', value: 5, },
    { year: '1995', value: 4.9, },
    { year: '1996', value: 6, },
    { year: '1997', value: 7, },
    { year: '1998', value: 9, },
    { year: '1999', value: 13, },
  ];

  const config = {
    data,
    height: 100,
    width: 150,
    xField: 'year',
    yField: 'value',
    point: {
      size: 0.5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};

export const DemoArea = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };

  return <Area {...config} />;
};


const Crypto = () => {
  const { cryptocardmass } = useSelector(state => state)
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
    <div className='cryptopage'>
      <div className="cryptoHome">
        <div className="dashboardhed">
          <h1 className='h1'>Crypto</h1>
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
            <CryptoSaitbar />
          </Drawer>
        </div>
        <div className="cryptocards">
          {
            cryptocardmass.map((val) => (
              <div className="cryptoCard" key={val.id} >
                <h6>{val.name}</h6>
                <div className="cryptocardbody">
                  <Page />
                  <div className="cryptocardbodyrigh">
                    <h6>{val.sena}</h6>
                    <p>{val.foiz}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="cryptokattachart">
          <DemoArea />
        </div>
      </div>
      
    </div>
  );
};

export default Crypto;