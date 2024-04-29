import { useEffect, useState } from "react";
import Menu from "../Basic Components/Menu";
import Header from "../Basic Components/Header";
function Notifications() {
  const [notifications, setNotification] = useState([
    {
      message: "Pending Task",
      detail: "You are going to kashmir",
      dateTime: "2024-04-28T10:30:00Z",
    },
    {
      message: "Due Task Date",
      detail: "Please do the work",
      dateTime: "2024-04-27T12:30:00Z",
    },
    {
      message: "Pending Task",
      detail: "You have to submit the task",
      dateTime: "2024-04-29T10:00:00Z",
    },
    {
      message: "Task completed",
      detail: "You have completed the task",
      dateTime: "2024-02-29T10:00:00Z",
    },
  ]);

  const [todayNotifications, setTodayNotifications] = useState([]);
  const [yesterdayNotifications, setYesterdayNotifications] = useState([]);
  const [restNotifications, setRestNotifications] = useState([]);

  useEffect(() => {
    sortNotification();
  }, []);

  const sortNotification = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const todayNotifications = notifications.filter((notification) => {
      const notificationDate = new Date(notification.dateTime);
      return notificationDate >= today;
    });

    const yesterdayNotifications = notifications.filter((notification) => {
      const notificationDate = new Date(notification.dateTime);
      return notificationDate >= yesterday && notificationDate < today;
    });

    const restNotifications = notifications.filter((notification) => {
      const notificationDate = new Date(notification.dateTime);
      return notificationDate < yesterday;
    });
    setTodayNotifications(todayNotifications);
    setYesterdayNotifications(yesterdayNotifications);
    setRestNotifications(restNotifications);
  };

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
        <Header name="Notifications" ></Header>
        <div className="ml-16 mt-7 w-[600px] h-[620px] ">
          <h1 className="text-[#445862] font-semibold text-2xl">
            Notification
          </h1>
          <p className="text-sm text-[#37474F]">
            you have 2 unread notification
          </p>

          <div>
            <h1 className="mt-5 text-[#9A9EA5] text-2xl">Today</h1>
            <div>
              {todayNotifications.map((notification, index) => {
                return (
                  <div key={index} className="mt-3 ml-3 flex gap-x-3">
                    <svg
                      className="mt-5"
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.80249"
                        width="8.9374"
                        height="8.9374"
                        rx="4.4687"
                        fill="#FF0000"
                      />
                    </svg>

                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 68 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.874802"
                        y="0.536133"
                        width="67.0305"
                        height="67.0305"
                        rx="13.4061"
                        fill="#EBEBEB"
                      />
                      <g>
                        <path
                          d="M50.1069 42.2843C48.8569 41.2297 47.8523 39.9146 47.1637 38.4311C46.4751 36.9476 46.119 35.3316 46.1203 33.696V29.024C46.1203 23.127 41.7399 18.2455 36.0657 17.4277V15.6179C36.0657 15.1735 35.8892 14.7472 35.5749 14.433C35.2607 14.1187 34.8344 13.9421 34.39 13.9421C33.9455 13.9421 33.5193 14.1187 33.205 14.433C32.8908 14.7472 32.7142 15.1735 32.7142 15.6179V17.4277C27.0384 18.2455 22.6596 23.127 22.6596 29.024V33.696C22.6603 35.3349 22.3024 36.954 21.6111 38.4399C20.9199 39.9258 19.9119 41.2425 18.6579 42.2977C18.2047 42.6884 17.8817 43.2082 17.7321 43.7875C17.5826 44.3669 17.6136 44.9781 17.821 45.5393C18.0284 46.1005 18.4024 46.585 18.8928 46.9278C19.3832 47.2706 19.9666 47.4554 20.5649 47.4574H48.215C49.8321 47.4574 51.1476 46.1419 51.1476 44.5248C51.1476 43.6668 50.7739 42.8557 50.1069 42.2843ZM34.39 54.1604C35.8379 54.1585 37.2408 53.6574 38.3623 52.7416C39.4838 51.8258 40.2553 50.5514 40.5467 49.1332H28.2332C28.5247 50.5514 29.2961 51.8258 30.4176 52.7416C31.5391 53.6574 32.9421 54.1585 34.39 54.1604Z"
                          fill="#4BCBEB"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_10_4930">
                          <rect
                            width="40.2183"
                            height="40.2183"
                            fill="white"
                            transform="translate(14.2807 13.9421)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="mb-3">
                      <p className="font-semibold text-[#445862] text-xl">
                        {notification.message}
                      </p>
                      <p className=" text-[#445862] text-sm">
                        {notification.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <h1 className="mt-5 text-[#9A9EA5] text-2xl">Yesterday</h1>
            <div>
              {yesterdayNotifications.map((notification, index) => {
                return (
                  <div key={index} className=" mt-3 ml-8 flex gap-x-3">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 68 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.874802"
                        y="0.536133"
                        width="67.0305"
                        height="67.0305"
                        rx="13.4061"
                        fill="#EBEBEB"
                      />
                      <g>
                        <path
                          d="M50.1069 42.2843C48.8569 41.2297 47.8523 39.9146 47.1637 38.4311C46.4751 36.9476 46.119 35.3316 46.1203 33.696V29.024C46.1203 23.127 41.7399 18.2455 36.0657 17.4277V15.6179C36.0657 15.1735 35.8892 14.7472 35.5749 14.433C35.2607 14.1187 34.8344 13.9421 34.39 13.9421C33.9455 13.9421 33.5193 14.1187 33.205 14.433C32.8908 14.7472 32.7142 15.1735 32.7142 15.6179V17.4277C27.0384 18.2455 22.6596 23.127 22.6596 29.024V33.696C22.6603 35.3349 22.3024 36.954 21.6111 38.4399C20.9199 39.9258 19.9119 41.2425 18.6579 42.2977C18.2047 42.6884 17.8817 43.2082 17.7321 43.7875C17.5826 44.3669 17.6136 44.9781 17.821 45.5393C18.0284 46.1005 18.4024 46.585 18.8928 46.9278C19.3832 47.2706 19.9666 47.4554 20.5649 47.4574H48.215C49.8321 47.4574 51.1476 46.1419 51.1476 44.5248C51.1476 43.6668 50.7739 42.8557 50.1069 42.2843ZM34.39 54.1604C35.8379 54.1585 37.2408 53.6574 38.3623 52.7416C39.4838 51.8258 40.2553 50.5514 40.5467 49.1332H28.2332C28.5247 50.5514 29.2961 51.8258 30.4176 52.7416C31.5391 53.6574 32.9421 54.1585 34.39 54.1604Z"
                          fill="#4BCBEB"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_10_4930">
                          <rect
                            width="40.2183"
                            height="40.2183"
                            fill="white"
                            transform="translate(14.2807 13.9421)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="mb-3">
                      <p className="font-semibold text-[#445862] text-xl">
                        {notification.message}
                      </p>
                      <p className=" text-[#445862] text-sm">
                        {notification.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <h1 className="mt-5 text-[#9A9EA5] text-2xl">Rest</h1>
            <div>
              {restNotifications.map((notification, index) => {
                return (
                  <div key={index} className="mt-3 ml-8 flex gap-x-3">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 68 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.874802"
                        y="0.536133"
                        width="67.0305"
                        height="67.0305"
                        rx="13.4061"
                        fill="#EBEBEB"
                      />
                      <g>
                        <path
                          d="M50.1069 42.2843C48.8569 41.2297 47.8523 39.9146 47.1637 38.4311C46.4751 36.9476 46.119 35.3316 46.1203 33.696V29.024C46.1203 23.127 41.7399 18.2455 36.0657 17.4277V15.6179C36.0657 15.1735 35.8892 14.7472 35.5749 14.433C35.2607 14.1187 34.8344 13.9421 34.39 13.9421C33.9455 13.9421 33.5193 14.1187 33.205 14.433C32.8908 14.7472 32.7142 15.1735 32.7142 15.6179V17.4277C27.0384 18.2455 22.6596 23.127 22.6596 29.024V33.696C22.6603 35.3349 22.3024 36.954 21.6111 38.4399C20.9199 39.9258 19.9119 41.2425 18.6579 42.2977C18.2047 42.6884 17.8817 43.2082 17.7321 43.7875C17.5826 44.3669 17.6136 44.9781 17.821 45.5393C18.0284 46.1005 18.4024 46.585 18.8928 46.9278C19.3832 47.2706 19.9666 47.4554 20.5649 47.4574H48.215C49.8321 47.4574 51.1476 46.1419 51.1476 44.5248C51.1476 43.6668 50.7739 42.8557 50.1069 42.2843ZM34.39 54.1604C35.8379 54.1585 37.2408 53.6574 38.3623 52.7416C39.4838 51.8258 40.2553 50.5514 40.5467 49.1332H28.2332C28.5247 50.5514 29.2961 51.8258 30.4176 52.7416C31.5391 53.6574 32.9421 54.1585 34.39 54.1604Z"
                          fill="#4BCBEB"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_10_4930">
                          <rect
                            width="40.2183"
                            height="40.2183"
                            fill="white"
                            transform="translate(14.2807 13.9421)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="mb-3">
                      <p className="font-semibold text-[#445862] text-xl">
                        {notification.message}
                      </p>
                      <p className=" text-[#445862] text-sm">
                        {notification.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Notifications;
