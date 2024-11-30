import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
  import Chart from "react-apexcharts";
   
  import ListOrder from '../components/ListOrder';

   
  export default function Example() {

    

      const [allorder, setOrder] = useState([])
      const [allproducts, setAllproducts] = useState([])
      const [data, setData] = useState({
        total: [],
        date: []
      })
      const fetchInfo = async () => {
        await fetch('http://localhost:3000/allorder')
        .then((res) => res.json())
        .then((data) => {setOrder(data)})
    
        await fetch('http://localhost:3000/allproduct')
        .then((res) => res.json())
        .then((data) => {setAllproducts(data)})
      }
    
      useEffect(() => {
        fetchInfo()
        
      }, [])

      const getTotalCartAmount = () => {
        let total;
        for(let i of allorder){
          console.log(i.date.substring(5,10))
          console.log(i.total)
          let x = -1
          for(let j in data.date){
            if(i.date.substring(5,10) == data.date[j]){
              data.total[j] += i.total
              x = 1
            }
          }
          if(x == -1) {
            data.date.push(i.date.substring(5,10))
            data.total.push(i.total)
          }
        }
      }

      getTotalCartAmount()

      const chartConfig = {
        type: "bar",
        height: 240,
        series: [
          {
            name: "Sales",
            data: data.total,
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          title: {
            show: "",
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#020617"],
          plotOptions: {
            bar: {
              columnWidth: "40%",
              borderRadius: 2,
            },
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
              },
            },
            categories: data.date,
          },
          yaxis: {
            labels: {
              style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
              },
            },
          },
          grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            padding: {
              top: 5,
              right: 20,
            },
          },
          fill: {
            opacity: 0.8,
          },
          tooltip: {
            theme: "dark",
          },
        },
      };


    return (
      <div className="flex"> 
        <Card className="w-full mt-10">
            <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            >
                <Typography variant="h6" color="blue-gray" className="ml-10">
                Bar Chart
                </Typography>
            </CardHeader>
            <CardBody className="px-2 pb-0">
            <Chart {...chartConfig} />
            </CardBody>
        </Card>   
        <ListOrder />
      </div>
    );
  }