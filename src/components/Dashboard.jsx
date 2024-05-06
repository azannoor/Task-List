import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Chart from "react-apexcharts";

import Menu from "../Basic Components/Menu";
import Header from "../Basic Components/Header";
import Analytics from "../svg components/Analytics";
import Caldendar from '../Basic Components/Calendar';

const chartConfig = {
  type: "line",
  height: 240,
  width: 400,
  series: [
    {
      name: "Sales",
      data: [100, 500, 2000, 2500, 5000, 600],
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
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
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
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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
function Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="h-screen w-64 ">
        <Menu></Menu>
      </div>

      <div className="pl-[2px] w-10/12 bg-[#F6F8FA]">
        <Header name="Dashboard"></Header>
        <div className=" mt-11 ml-11 w-[1150px] h-[600px] bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md">
          <div className="flex h-[60px] w-full ">
            <p className="mt-[25.46px] pl-14 font-bold text-2xl text-black">
              Analytics
            </p>
            <svg
              className="ml-[940px] mt-[25.46px]"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2.25H2L8 9.345V14.25L11 15.75V9.345L17 2.25Z"
                stroke="#64748B"
              />
            </svg>
          </div>

          <svg
            className="ml-[55px] mt-2 bg-[#F1F5F9]"
            width="1080"
            height="2"
            viewBox="0 0 974 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <div className="ml-14 mr-14">
            <div className="ml-11 py-7 grid grid-cols-4 ">
              <div className="block w-[232px] h-[148px] bg-[#F4F2FF] rounded-xl ">
                <div className="mt-3 ml-3 font-bold">Total Task</div>
                <div className="mt-3 ml-3 font-bold text-xl text-[#64748B]">
                  90/100
                </div>
                <Analytics color="#4BCBEB"></Analytics>
              </div>
              <div className="w-[232px] h-[148px] bg-[#DCDCDC] rounded-xl">
                <div className="mt-3 ml-3 font-bold">Completed Task</div>
                <div className="mt-3 ml-3 font-bold text-xl text-[#64748B]">
                  80/100
                </div>
                <Analytics color="#5CB85C"></Analytics>
                
              </div>
              <div className="w-[232px] h-[148px] bg-[#FBEDD2] rounded-xl">
                <div className="mt-3 ml-3 font-bold">Pending Task</div>
                <div className="mt-3 ml-3 font-bold text-xl text-[#64748B]">
                  50/100
                </div>
                <Analytics color="#F0AD4E"></Analytics>
                
              </div>
              <div className="w-[232px] h-[148px] bg-[#E0F6F4] rounded-xl">
                <div className="mt-3 ml-3 font-bold">Decline Task</div>
                <div className="mt-3 ml-3 font-bold text-xl text-[#64748B]">
                  10/100
                </div>
                <svg
                  className="mt-3 ml-3"
                  width="201"
                  height="20"
                  viewBox="0 0 201 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" width="200" height="20" rx="4" fill="#DCDCDC" />
                  <rect x="1" width="20" height="20" rx="4" fill="#D9534F" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="ml-9 flex gap-60">
            
            <Card>
            <h1 className="ml-5 font-bold text-xl">Total Task Ratio</h1>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
              ></CardHeader>
              <CardBody className="px-2 pb-0">
                <Chart {...chartConfig} />
              </CardBody>
            </Card>
            <Caldendar/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;