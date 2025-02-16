import { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';
import {DataGraph} from '../src/constant/DataGraphic.js'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Graph = () => {
    useEffect(() => {
        getDataGraph()
    }, []);  
    const [labelChart, setlabelChart] = useState([]);
    const [datasetChart, setdatasetChart] = useState([]);
    const getDataGraph = () => {
        let listData = []
        let listLabels = []
        let bgColor = []
        let brColor = []
        DataGraph?.map((row, indexRow) => {
            let rndomColor1 = Math.floor(Math.random()*255)
            let rndomColor2 = Math.floor(Math.random()*255)
            let rndomColor3 = Math.floor(Math.random()*255)
            listLabels.push(row.year.toString())
            listData.push(row.total)
            bgColor.push(`rgba(${rndomColor1}, ${rndomColor2}, ${rndomColor3}, 0.5)`)
            brColor.push(`rgba(${rndomColor1}, ${rndomColor2}, ${rndomColor3})`)
        })
        setlabelChart(listLabels)
        setdatasetChart([{
            label: 'Jumlah Penduduk Indonesia (jiwa)',
            backgroundColor: bgColor,
            borderColor: brColor,
            data: listData,
        }])
        barData()
    }
    const barData = () => {
        let barr = {
            labels: labelChart,
            datasets: datasetChart
        }
        return barr
    }
    const options = {
        responsive: true,
        maintainAspectRatio: false, // This allows you to control height/width
        plugins: {
          legend: {
            position: 'top',
          }
        }
      };
    
    return (
        <CDBContainer style={{ 
            width: '900px',     // Set specific width
            height: '400px',    // Set specific height
            margin: '0 auto'    // Center the chart
        }}>
          <h3 className="mt-n1">Jumlah Penduduk Indonesia</h3>
          <Bar data={barData()} options={options} />
        </CDBContainer>
    );
}

export default Graph
