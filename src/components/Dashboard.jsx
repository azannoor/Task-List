import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import axios from 'axios'
import Menu from "../Basic Components/Menu";
import Header from "../Basic Components/Header";
import Analytics from "../svg components/Analytics";
import Caldendar from "../Basic Components/Calendar";
import { useState,useEffect } from "react";

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

  const [totalTasks, setTotalTasks] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [declinedTasks, setDeclinedTasks] = useState(0);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    const token = localStorage.getItem('jsonwebtoken');
    if (!token) {
      console.error('No token found in local storage');
      return;
    }

    axios
      .get('http://localhost:3000/api/tasks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const fetchedTasks = response.data;
        setTasks(fetchedTasks);
        const currentDateTime = new Date();
        const declinedTasksCount = fetchedTasks.filter(
          (task) => new Date(task.endDate) < currentDateTime
        ).length;
        setDeclinedTasks(declinedTasksCount);
        setTotalTasks(fetchedTasks.length);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  };
  const completionPercentage = (declinedTasks / totalTasks) * 100;


  return (
    <div className="flex h-screen">
      <div className="h-screen w-64 ">
        <Menu></Menu>
      </div>

      <div className="pl-[2px] w-full md:w-10/12 bg-[#F6F8FA]">
        <Header name="Dashboard"></Header>
        <div className="mt-11 ml-11  w-full md:w-[1150px] h-auto md:h-[600px] bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md">
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
            <div className="ml-11 py-7 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="block w-[232px] h-[148px] bg-[#F4F2FF] rounded-xl ">
                <div className="mt-3 ml-3 font-bold">Total Tasks</div>
                <div className="mt-3 ml-3 font-bold text-xl text-[#64748B]">
                  {totalTasks}
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
                  {declinedTasks}/{totalTasks}
                </div>
                <svg
            width="201"
            height="20"
            viewBox="0 0 201 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="200" height="19" rx="4" fill="#DCDCDC" />
            <rect x="1" y="1" width={`${completionPercentage}%`} height="18" rx="4" fill="#4BCBEB" />
          </svg>
              </div>
            </div>
          </div>

          <div className="ml-9 flex flex-col md:flex-row gap-60">
            <Card className="shadow-none">
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
            <Caldendar />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
