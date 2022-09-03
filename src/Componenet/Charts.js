import React from 'react';



import DonutChart from "react-donut-chart";

const reactDonutChartdata = [
  {
    label: "Invoices ",
    value: 19,
    color: "blue"
  },
  {
    label: "Njksjsj",
    value: 81,
    color: "grey"
  },
 
];
const reactDonutChartdata2 = [
  {
    label: "Clients ",
    value: 78,
    color: "yellow"
  },
  {
    label: "Njksjsj",
    value: 22,
    color: "grey"
  },
 
];
const reactDonutChartdata3 = [
  {
    label: "Projects ",
    value: 65,
    color: "red"
  },
  {
    label: "Njksjsj",
    value: 35,
    color: "grey"
  },
 
];
const reactDonutChartBackgroundColor = [
  'blue',
  '#f57b9e',
 
];
const reactDonutChartInnerRadius = 0.5;
const reactDonutChartSelectedOffset = 0.04;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  const color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

export const Chartsccc=()=>{
    return (
        <div className="chartscircle">
          <DonutChart
            width={300}
            height={200}
            onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
            strokeColor={reactDonutChartStrokeColor}
            data={reactDonutChartdata}
            colors={reactDonutChartBackgroundColor}
            innerRadius={reactDonutChartInnerRadius}
            selectedOffset={reactDonutChartSelectedOffset}
            onMouseLeave={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
          />
          <DonutChart
            width={300}
            height={200}
            onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
            strokeColor={reactDonutChartStrokeColor}
            data={reactDonutChartdata2}
            colors={reactDonutChartBackgroundColor}
            innerRadius={reactDonutChartInnerRadius}
            selectedOffset={reactDonutChartSelectedOffset}
            onMouseLeave={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
          />
          <DonutChart
            width={300}
            height={200}
            onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
            strokeColor={reactDonutChartStrokeColor}
            data={reactDonutChartdata3}
            colors={reactDonutChartBackgroundColor}
            innerRadius={reactDonutChartInnerRadius}
            selectedOffset={reactDonutChartSelectedOffset}
            onMouseLeave={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
          />
        </div>
      );
}




     