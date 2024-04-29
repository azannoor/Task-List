import { Link } from "react-router-dom";
import Menu from "../Basic Components/Menu";
import Header from "../Basic Components/Header";
function Users() {
  const data = [
    {
      CustomerName: "Azaan Noor",
      ProjectName: "Mars",
      startDate: "01-02-24",
      endDate: "01-03-24",
      overDue: "2 days",
    },
    {
      CustomerName: "Hammad Khalil",
      ProjectName: "Chupi",
      startDate: "01-04-24",
      endDate: "01-05-24",
      overDue: "3 days",
    },
    {
      CustomerName: "Hamza Khalid",
      ProjectName: "Pluto",
      startDate: "03-06-24",
      endDate: "01-07-24",
      overDue: "4 days",
    },
    {
      CustomerName: "Azaan Noor",
      ProjectName: "Mars",
      startDate: "01-02-24",
      endDate: "01-03-24",
      overDue: "2 days",
    },
    {
      CustomerName: "Hammad Khalil",
      ProjectName: "Chupi",
      startDate: "01-04-24",
      endDate: "01-05-24",
      overDue: "3 days",
    },
    {
      CustomerName: "Hamza Khalid",
      ProjectName: "Pluto",
      startDate: "03-06-24",
      endDate: "01-07-24",
      overDue: "4 days",
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="h-screen w-64 ">
        <Menu></Menu>

        <div className="flex mt-3 ml-6 py-3 px-3 h-11 w-52">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3167 10.201C15.7244 9.17434 16.6411 7.51283 16.6411 5.64102C16.6411 2.53056 14.1105 0 11.0001 0C7.88959 0 5.35904 2.53056 5.35904 5.64102C5.35904 7.51283 6.27569 9.17434 7.68343 10.201C4.18405 11.5401 1.69238 14.933 1.69238 18.8974C1.69238 20.6082 3.08418 22 4.79494 22H17.2052C18.9159 22 20.3077 20.6082 20.3077 18.8974C20.3077 14.933 17.8161 11.5401 14.3167 10.201ZM7.05136 5.64102C7.05136 3.46371 8.82275 1.69232 11.0001 1.69232C13.1774 1.69232 14.9488 3.46371 14.9488 5.64102C14.9488 7.81834 13.1774 9.58977 11.0001 9.58977C8.82275 9.58977 7.05136 7.81834 7.05136 5.64102ZM17.2052 20.3077H4.79494C4.01734 20.3077 3.38471 19.675 3.38471 18.8974C3.38471 14.6982 6.8009 11.282 11.0001 11.282C15.1993 11.282 18.6155 14.6982 18.6155 18.8974C18.6155 19.675 17.9828 20.3077 17.2052 20.3077Z"
              fill="#64748B"
            />
          </svg>

          <p className=" px-2 font-medium text-sm text-[#64748B]">Users</p>
        </div>
      </div>

      <div className="pl-[2px] w-10/12 bg-[#F6F8FA]">
        <Header name="Users"></Header>
        <div className=" mt-11 ml-11 w-[1150px] h-[600px] bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md truncate">
          <h1 className="m-5 font-bold text-2xl">Online User</h1>

          <div className="ml-5 mb-5 flex space-x-32">
            <h1 className="text-lg font-medium">Customer Name</h1>
            <h1 className="text-lg font-medium">Project Name</h1>
            <h1 className="text-lg font-medium">Start Date</h1>
            <h1 className="text-lg font-medium">End Date</h1>
            <h1 className="text-lg font-medium">OverDue day</h1>
          </div>
          {data.map((item, index) => {
            return (
              <div key={index} className="mb-3 py-3 flex border-b space-x-28">
                <div className="ml-5 w-32 text-[#0B3B95]">
                  {item.CustomerName}
                </div>
                <div className="px-5 w-32">{item.ProjectName}</div>
                <div className="px-5 w-30">{item.startDate}</div>
                <div className="px-5 w-30">{item.endDate}</div>
                <div className="w-32 flex">
                  {item.overDue}
                  <svg
                    className="ml-5"
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 16C13 17.654 14.346 19 16 19C17.654 19 19 17.654 19 16C19 14.346 17.654 13 16 13C14.346 13 13 14.346 13 16ZM13 26C13 27.654 14.346 29 16 29C17.654 29 19 27.654 19 26C19 24.346 17.654 23 16 23C14.346 23 13 24.346 13 26ZM13 6C13 7.654 14.346 9 16 9C17.654 9 19 7.654 19 6C19 4.346 17.654 3 16 3C14.346 3 13 4.346 13 6Z"
                      fill="#4BCBEB"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Users;
