import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import axios from 'axios'
import Menu from "../Basic Components/Menu";
import Header from "../Basic Components/Header";
import Analytics from "../svg components/Analytics";
import Caldendar from "../Basic Components/Calendar";
import { useState, useEffect } from "react";

const chartConfig = {
  type: "line",
  
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
  },
};

function Dashboard() {
  const [totalTasks, setTotalTasks] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [declinedTasks, setDeclinedTasks] = useState(0);
  const [chartData, setChartData] = useState({
    series: [],
    options: {},
  });

  const processDataForChart = (tasks) => {
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const totalTasksData = months.map(() => 0);
    const declinedTasksData = months.map(() => 0);

    tasks.forEach(task => {
      const month = new Date(task.endDate).getMonth();
      totalTasksData[month]++;
      if (new Date(task.endDate) < new Date()) {
        declinedTasksData[month]++;
      }
    });

    const seriesData = [
      {
        name: "Total Tasks",
        data: totalTasksData,
        color: "#4BCBEB",
      },
      {
        name: "Declined Tasks",
        data: declinedTasksData,
        color: "#FF0000",
      },
    ];

    const updatedOptions = {
      ...chartConfig.options,
      xaxis: {
        ...chartConfig.options.xaxis,
        categories: months.map(month => new Date(0, month - 1).toLocaleString('default', { month: 'short' })),
      },
    };

    return { series: seriesData, options: updatedOptions };
  };

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
        const taskData = processDataForChart(fetchedTasks);
        setChartData(taskData);
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
  const completedTask = 0
  const pendingTask = 0

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-64 ">
        <Menu />
      </div>

      <div className="w-full px-4 md:px-0 flex-grow bg-[#F6F8FA]">
        <Header name="Dashboard" />
        <div className="mt-11 mx-4 md:mx-0 md:w-full md:max-w-[calc(100%-64px)] md:mx-auto h-auto md:h-[600px] bg-white rounded-xl border-[1.45px] border-[#4BCBEB] shadow-md">

          <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-6">
            <p className="font-bold text-2xl text-black">Analytics</p>
            <svg
              className="h-6 w-6 text-[#64748B] cursor-pointer"
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
          <hr className="mx-4 md:mx-6 mb-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4 px-4 md:px-6 ">
            <div className="block w-full h-[148px] bg-[#F4F2FF] rounded-xl">
              <div className="px-4 pt-4 font-bold">Total Tasks</div>
              <div className="px-4 font-bold text-[#64748B] text-xl">{totalTasks}</div>
              <div className="px-4 pb-4 mt-4">
                <div className="w-full bg-gray-300 rounded-sm overflow-hidden">
                  <div className="bg-[#4BCBEB]" style={{ width: `${totalTasks}%`, height: '19px' }}></div>
                </div>
              </div>
            </div>
            <div className="block w-full h-[148px] bg-[#DCDCDC] rounded-xl">
              <div className="px-4 pt-4 font-bold">Completed Tasks</div>
              <div className="px-4 font-bold text-[#64748B] text-xl">0/{totalTasks}</div>
              <div className="px-4 pb-4 mt-4">
                <div className="w-full bg-gray-300 rounded-sm overflow-hidden">
                  <div className="bg-[#5CB85C]" style={{ width: `${totalTasks}%`, height: '19px' }}></div>
                </div>
              </div>
            </div>
          
            
            <div className="block w-full  h-[148px] bg-[#FBEDD2] rounded-xl">
              <div className="px-4 pt-4 font-bold">Pending Tasks</div>
              <div className="px-4 font-bold text-[#64748B] text-xl">0/{totalTasks}</div>
              <div className="px-4 pb-4 mt-4">
                <div className="w-full bg-gray-300 rounded-sm overflow-hidden">
                  <div className="bg-[#F0AD4E]" style={{ width: `${totalTasks}%`, height: '19px' }}></div>
                </div>
              </div>
            </div>
            
            <div className="w-full h-[148px]  bg-[#E0F6F4] rounded-xl">
              <div className="px-4 pt-4 font-bold">Decline Task</div>
              <div className="px-4 font-bold text-[#64748B] text-xl">{declinedTasks}/{totalTasks}</div>
              <div className="px-4 pb-4 mt-4">
              <div className="w-full mt-4 bg-gray-300 rounded-sm overflow-hidden">
                <div className="bg-[#4BCBEB]" style={{ width: `${completionPercentage}%`, height: '19px' }}></div>
              </div>
              </div>
            </div>
          </div>
          <div className="mt-6 mx-5 md:mx-6  md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-40 ">
            <Card className="shadow-none">
              <h1 className="px-4 pt-4 font-bold text-xl">Total Task Ratio</h1>
              <CardBody className="p-0">
                <Chart {...chartData} height={240} />
              </CardBody>
            </Card>
            <div className="w-full md:pl-20">
              <Caldendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
