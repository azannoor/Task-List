import { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import imageOne from "../assets/images/one.png";
import { Link } from "react-router-dom";
import Menu from "../Basic Components/Menu";
import axios from 'axios'
import Modal from "../Basic Components/Modal";

function Tasks() {
  const [submittedData, setSubmittedData] = useState([]);
  let [showModal, setShowModal] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500'];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  function handleClick() {
    setShowImage(!showImage);
  }

  function display() {
    setShowModal(!showModal);
    console.log(showModal);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  function fetchTasks() {
    axios.get('http://localhost:3000/api/tasks')
      .then(response => {
        setSubmittedData(response.data); // Assuming the response data is an array of tasks
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }

  function handleModalSubmit(data) {
    data.preventDefault()
    axios.post('http://localhost:3000/api/tasks/addTasks', data)
      .then(response => {
        setSubmittedData([...submittedData, data]); // Update frontend state with the new task
        console.log(response)
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error adding task:', error);
      });
  }

  return (
    <div className="flex h-screen">
      <div className="h-screen w-64 ">
        <Menu></Menu>
      </div>

      <div className="pl-[1px] w-10/12 overflow-auto bg-[#F6F8FA]">
        <div className="flex h-16 bg-white">
          <p className="px-16 py-3 font-extrabold text-2xl text-black">Task</p>
          <svg
            className="ml-[800px] mt-3"
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3333 10.6667C17.3333 9.95942 17.6143 9.28115 18.1144 8.78105C18.6145 8.28095 19.2927 8 20 8C20.7072 8 21.3855 8.28095 21.8856 8.78105C22.3857 9.28115 22.6666 9.95942 22.6666 10.6667C24.1979 11.3907 25.5032 12.5178 26.4427 13.9271C27.3822 15.3364 27.9206 16.9748 28 18.6667V22.6667C28.1003 23.4956 28.3939 24.2894 28.8571 24.9842C29.3202 25.6789 29.9401 26.2552 30.6666 26.6667H9.33331C10.0599 26.2552 10.6797 25.6789 11.1429 24.9842C11.6061 24.2894 11.8996 23.4956 12 22.6667V18.6667C12.0794 16.9748 12.6177 15.3364 13.5572 13.9271C14.4968 12.5178 15.8021 11.3907 17.3333 10.6667"
              stroke="#64748B"
            />
            <path
              d="M16 26.6667V28.0001C16 29.0609 16.4214 30.0784 17.1716 30.8285C17.9217 31.5787 18.9391 32.0001 20 32.0001C21.0609 32.0001 22.0783 31.5787 22.8284 30.8285C23.5786 30.0784 24 29.0609 24 28.0001V26.6667"
              stroke="#64748B"
            />
            <circle cx="29" cy="11" r="4.5" fill="#2AC171" stroke="white" />
          </svg>
          <svg
            className="ml-4 mt-2"
            width="150"
            height="44"
            viewBox="0 0 191 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M14.0475 33.3601L8.07999 36.6152C7.73674 36.8066 7.41556 37.0351 7.12225 37.2967C10.7225 40.3398 15.2859 42.0065 20 42.0001C24.8709 42.0001 29.3336 40.2567 32.803 37.3631C32.4818 37.0869 32.1286 36.8502 31.7509 36.6582L25.3607 33.4635C24.956 33.2611 24.6155 32.95 24.3776 32.565C24.1396 32.18 24.0136 31.7364 24.0136 31.2839V28.7767C24.1932 28.5722 24.3985 28.3095 24.6181 27.9993C25.4803 26.774 26.1502 25.4241 26.6045 23.9963C27.4241 23.7435 28.0279 22.9865 28.0279 22.0869V19.4106C28.0279 18.822 27.766 18.2959 27.3592 17.9276V14.059C27.3592 14.059 28.154 8.03857 20.0007 8.03857C11.8475 8.03857 12.6423 14.059 12.6423 14.059V17.9276C12.4329 18.114 12.2651 18.3424 12.1499 18.5979C12.0347 18.8534 11.9746 19.1304 11.9736 19.4106V22.0869C11.9736 22.7918 12.3441 23.4122 12.8989 23.7707C13.5675 26.6816 15.3185 28.7767 15.3185 28.7767V31.222C15.3179 31.6596 15.1996 32.089 14.976 32.4652C14.7524 32.8414 14.4317 33.1505 14.0475 33.3601Z"
                fill="#F6F8FA"
              />
              <path
                d="M20.3418 2.00298C9.29807 1.8143 0.191659 10.6143 0.00298021 21.6581C-0.10419 27.92 2.68675 33.5479 7.13053 37.2905C7.42109 37.0316 7.73922 36.8053 8.07921 36.6158L14.0468 33.3607C14.4311 33.151 14.7519 32.8417 14.9754 32.4652C15.1989 32.0887 15.3169 31.6589 15.3169 31.2211V28.7758C15.3169 28.7758 13.5652 26.6807 12.8973 23.7698C12.6146 23.5888 12.3818 23.3399 12.2202 23.0458C12.0585 22.7516 11.9732 22.4216 11.972 22.086V19.4098C11.972 18.8211 12.2339 18.2951 12.6407 17.9268V14.0581C12.6407 14.0581 11.846 8.03769 19.9992 8.03769C28.1524 8.03769 27.3577 14.0581 27.3577 14.0581V17.9268C27.7652 18.2951 28.0264 18.8211 28.0264 19.4098V22.086C28.0264 22.9856 27.4226 23.7426 26.603 23.9954C26.1487 25.4232 25.4788 26.7731 24.6166 27.9984C24.3969 28.3086 24.1917 28.5713 24.012 28.7758V31.283C24.012 32.206 24.5335 33.0505 25.3592 33.4626L31.7494 36.6573C32.1258 36.8493 32.4779 37.0854 32.7985 37.3607C37.1079 33.7668 39.892 28.3932 39.9954 22.3418C40.1856 11.2981 31.3864 2.19166 20.3418 2.00298Z"
                fill="#64748B"
              />
            </g>
            <path
              d="M59.174 6.31818H61.3267V12.9304C61.3267 13.6728 61.1494 14.3224 60.7947 14.8793C60.4434 15.4361 59.9512 15.8703 59.3182 16.1818C58.6851 16.4901 57.9477 16.6442 57.1058 16.6442C56.2607 16.6442 55.5215 16.4901 54.8885 16.1818C54.2554 15.8703 53.7633 15.4361 53.4119 14.8793C53.0606 14.3224 52.8849 13.6728 52.8849 12.9304V6.31818H55.0376V12.7464C55.0376 13.1342 55.1222 13.4789 55.2912 13.7805C55.4635 14.0821 55.7055 14.3191 56.017 14.4915C56.3286 14.6638 56.6915 14.75 57.1058 14.75C57.5234 14.75 57.8864 14.6638 58.1946 14.4915C58.5062 14.3191 58.7464 14.0821 58.9155 13.7805C59.0878 13.4789 59.174 13.1342 59.174 12.7464V6.31818ZM69.4118 11.0412L67.4728 11.1605C67.4397 10.9948 67.3684 10.8456 67.2591 10.7131C67.1497 10.5772 67.0055 10.4695 66.8265 10.3899C66.6509 10.3071 66.4404 10.2656 66.1951 10.2656C65.867 10.2656 65.5903 10.3352 65.3649 10.4744C65.1395 10.6103 65.0268 10.7926 65.0268 11.0213C65.0268 11.2036 65.0997 11.3577 65.2456 11.4837C65.3914 11.6096 65.6416 11.7107 65.9963 11.7869L67.3784 12.0653C68.1208 12.2178 68.6743 12.4631 69.0389 12.8011C69.4035 13.1392 69.5858 13.5833 69.5858 14.1335C69.5858 14.634 69.4383 15.0732 69.1433 15.451C68.8516 15.8288 68.4506 16.1238 67.9402 16.3359C67.4331 16.5447 66.8481 16.6491 66.1852 16.6491C65.1743 16.6491 64.3689 16.4387 63.769 16.0178C63.1724 15.5935 62.8227 15.0168 62.72 14.2876L64.8031 14.1783C64.8661 14.4865 65.0185 14.7218 65.2605 14.8842C65.5024 15.0433 65.8123 15.1229 66.1902 15.1229C66.5614 15.1229 66.8597 15.0516 67.085 14.9091C67.3137 14.7633 67.4297 14.576 67.4331 14.3473C67.4297 14.1551 67.3485 13.9976 67.1895 13.875C67.0304 13.7491 66.7851 13.6529 66.4537 13.5866L65.1312 13.3232C64.3855 13.174 63.8303 12.9155 63.4657 12.5476C63.1045 12.1797 62.9238 11.7107 62.9238 11.1406C62.9238 10.6501 63.0564 10.2275 63.3216 9.87287C63.59 9.51823 63.9662 9.24479 64.4501 9.05256C64.9373 8.86032 65.5074 8.7642 66.1603 8.7642C67.1248 8.7642 67.8838 8.96804 68.4373 9.37571C68.9941 9.78338 69.319 10.3385 69.4118 11.0412ZM70.9194 16.5V8.86364H72.9379V10.2109H73.0273C73.1864 9.76349 73.4516 9.41051 73.8228 9.15199C74.194 8.89347 74.6381 8.7642 75.1552 8.7642C75.6789 8.7642 76.1246 8.89512 76.4925 9.15696C76.8604 9.41548 77.1057 9.76681 77.2283 10.2109H77.3079C77.4637 9.77344 77.7454 9.42377 78.1531 9.16193C78.564 8.89678 79.0496 8.7642 79.6097 8.7642C80.3223 8.7642 80.9007 8.99124 81.3448 9.44531C81.7923 9.89607 82.016 10.5357 82.016 11.3643V16.5H79.9031V11.782C79.9031 11.3577 79.7904 11.0395 79.565 10.8274C79.3396 10.6153 79.0579 10.5092 78.7198 10.5092C78.3353 10.5092 78.0354 10.6319 77.82 10.8771C77.6045 11.1191 77.4968 11.4389 77.4968 11.8366V16.5H75.4435V11.7372C75.4435 11.3627 75.3358 11.0644 75.1204 10.8423C74.9083 10.6203 74.6282 10.5092 74.2802 10.5092C74.0449 10.5092 73.8327 10.5689 73.6438 10.6882C73.4582 10.8042 73.3107 10.9683 73.2013 11.1804C73.092 11.3892 73.0373 11.6345 73.0373 11.9162V16.5H70.9194ZM85.8665 16.6442C85.3793 16.6442 84.9451 16.5597 84.5639 16.3906C84.1828 16.2183 83.8812 15.9647 83.6591 15.63C83.4403 15.2919 83.331 14.871 83.331 14.3672C83.331 13.9429 83.4089 13.5866 83.5646 13.2983C83.7204 13.0099 83.9325 12.7779 84.201 12.6023C84.4695 12.4266 84.7744 12.294 85.1158 12.2045C85.4605 12.1151 85.8217 12.0521 86.1996 12.0156C86.6437 11.9692 87.0017 11.9261 87.2734 11.8864C87.5452 11.8433 87.7424 11.7803 87.8651 11.6974C87.9877 11.6146 88.049 11.492 88.049 11.3295V11.2997C88.049 10.9848 87.9496 10.7412 87.7507 10.5689C87.5552 10.3965 87.2768 10.3104 86.9155 10.3104C86.5343 10.3104 86.2311 10.3949 86.0057 10.5639C85.7803 10.7296 85.6312 10.9384 85.5582 11.1903L83.5994 11.0312C83.6989 10.5672 83.8944 10.1662 84.1861 9.82812C84.4777 9.48674 84.8539 9.2249 85.3146 9.04261C85.7786 8.85701 86.3156 8.7642 86.9254 8.7642C87.3497 8.7642 87.7557 8.81392 88.1435 8.91335C88.5346 9.01278 88.8809 9.1669 89.1825 9.37571C89.4875 9.58452 89.7277 9.85298 89.9034 10.1811C90.0791 10.5059 90.1669 10.8954 90.1669 11.3494V16.5H88.1584V15.4411H88.0987C87.9761 15.6797 87.812 15.8902 87.6065 16.0724C87.401 16.2514 87.1541 16.3923 86.8658 16.495C86.5774 16.5945 86.2443 16.6442 85.8665 16.6442ZM86.473 15.1825C86.7846 15.1825 87.0597 15.1212 87.2983 14.9986C87.5369 14.8726 87.7242 14.7036 87.8601 14.4915C87.996 14.2794 88.0639 14.0391 88.0639 13.7706V12.9602C87.9976 13.0033 87.9065 13.0431 87.7905 13.0795C87.6778 13.1127 87.5502 13.1442 87.4077 13.174C87.2652 13.2005 87.1226 13.2254 86.9801 13.2486C86.8376 13.2685 86.7083 13.2867 86.5923 13.3033C86.3438 13.3397 86.1267 13.3977 85.9411 13.4773C85.7554 13.5568 85.6113 13.6645 85.5085 13.8004C85.4058 13.933 85.3544 14.0987 85.3544 14.2976C85.3544 14.5859 85.4588 14.8063 85.6676 14.9588C85.8797 15.108 86.1482 15.1825 86.473 15.1825ZM93.9279 12.0852V16.5H91.81V8.86364H93.8285V10.2109H93.918C94.087 9.76681 94.3704 9.41548 94.7681 9.15696C95.1658 8.89512 95.6481 8.7642 96.2148 8.7642C96.7451 8.7642 97.2075 8.88021 97.6019 9.11222C97.9963 9.34422 98.3029 9.67566 98.5217 10.1065C98.7404 10.5341 98.8498 11.0445 98.8498 11.6378V16.5H96.7319V12.0156C96.7352 11.5483 96.6159 11.1837 96.3739 10.9219C96.132 10.6567 95.7989 10.5241 95.3746 10.5241C95.0896 10.5241 94.8377 10.5855 94.619 10.7081C94.4035 10.8307 94.2345 11.0097 94.1119 11.245C93.9925 11.477 93.9312 11.7571 93.9279 12.0852ZM109.322 9.24645C109.283 8.84541 109.112 8.53385 108.81 8.31179C108.509 8.08972 108.099 7.97869 107.582 7.97869C107.231 7.97869 106.934 8.02841 106.692 8.12784C106.451 8.22396 106.265 8.35819 106.136 8.53054C106.01 8.70289 105.947 8.89844 105.947 9.11719C105.94 9.29948 105.978 9.45857 106.061 9.59446C106.147 9.73035 106.265 9.84801 106.414 9.94744C106.563 10.0436 106.736 10.1281 106.931 10.201C107.127 10.2706 107.335 10.3303 107.558 10.38L108.472 10.5987C108.916 10.6982 109.324 10.8307 109.695 10.9964C110.067 11.1622 110.388 11.366 110.66 11.608C110.932 11.8499 111.142 12.1349 111.291 12.4631C111.444 12.7912 111.522 13.1674 111.525 13.5916C111.522 14.2147 111.362 14.755 111.048 15.2124C110.736 15.6664 110.285 16.0194 109.695 16.2713C109.109 16.5199 108.401 16.6442 107.572 16.6442C106.75 16.6442 106.035 16.5182 105.425 16.2663C104.818 16.0144 104.344 15.6416 104.003 15.1477C103.665 14.6506 103.487 14.0357 103.471 13.3033H105.554C105.577 13.6446 105.675 13.9297 105.847 14.1584C106.023 14.3838 106.257 14.5545 106.548 14.6705C106.843 14.7831 107.176 14.8395 107.548 14.8395C107.912 14.8395 108.229 14.7865 108.497 14.6804C108.769 14.5743 108.979 14.4268 109.129 14.2379C109.278 14.049 109.352 13.8319 109.352 13.5866C109.352 13.358 109.284 13.1657 109.148 13.0099C109.016 12.8542 108.82 12.7216 108.562 12.6122C108.307 12.5028 107.993 12.4034 107.622 12.3139L106.513 12.0355C105.655 11.8267 104.977 11.5002 104.48 11.0561C103.983 10.612 103.736 10.0137 103.739 9.26136C103.736 8.64489 103.9 8.1063 104.232 7.6456C104.566 7.1849 105.025 6.82528 105.609 6.56676C106.192 6.30824 106.855 6.17898 107.597 6.17898C108.353 6.17898 109.013 6.30824 109.576 6.56676C110.143 6.82528 110.584 7.1849 110.898 7.6456C111.213 8.1063 111.376 8.63991 111.386 9.24645H109.322ZM115.051 12.0852V16.5H112.933V6.31818H114.991V10.2109H115.081C115.253 9.76018 115.532 9.4072 115.916 9.15199C116.3 8.89347 116.783 8.7642 117.363 8.7642C117.893 8.7642 118.355 8.88021 118.75 9.11222C119.148 9.34091 119.456 9.67069 119.675 10.1016C119.897 10.5291 120.006 11.0412 120.003 11.6378V16.5H117.885V12.0156C117.888 11.545 117.769 11.1787 117.527 10.9169C117.288 10.6551 116.953 10.5241 116.523 10.5241C116.234 10.5241 115.979 10.5855 115.757 10.7081C115.538 10.8307 115.366 11.0097 115.24 11.245C115.117 11.477 115.054 11.7571 115.051 12.0852ZM123.847 16.6442C123.36 16.6442 122.926 16.5597 122.544 16.3906C122.163 16.2183 121.862 15.9647 121.64 15.63C121.421 15.2919 121.311 14.871 121.311 14.3672C121.311 13.9429 121.389 13.5866 121.545 13.2983C121.701 13.0099 121.913 12.7779 122.181 12.6023C122.45 12.4266 122.755 12.294 123.096 12.2045C123.441 12.1151 123.802 12.0521 124.18 12.0156C124.624 11.9692 124.982 11.9261 125.254 11.8864C125.526 11.8433 125.723 11.7803 125.846 11.6974C125.968 11.6146 126.029 11.492 126.029 11.3295V11.2997C126.029 10.9848 125.93 10.7412 125.731 10.5689C125.536 10.3965 125.257 10.3104 124.896 10.3104C124.515 10.3104 124.212 10.3949 123.986 10.5639C123.761 10.7296 123.612 10.9384 123.539 11.1903L121.58 11.0312C121.679 10.5672 121.875 10.1662 122.167 9.82812C122.458 9.48674 122.834 9.2249 123.295 9.04261C123.759 8.85701 124.296 8.7642 124.906 8.7642C125.33 8.7642 125.736 8.81392 126.124 8.91335C126.515 9.01278 126.861 9.1669 127.163 9.37571C127.468 9.58452 127.708 9.85298 127.884 10.1811C128.06 10.5059 128.147 10.8954 128.147 11.3494V16.5H126.139V15.4411H126.079C125.957 15.6797 125.792 15.8902 125.587 16.0724C125.382 16.2514 125.135 16.3923 124.846 16.495C124.558 16.5945 124.225 16.6442 123.847 16.6442ZM124.453 15.1825C124.765 15.1825 125.04 15.1212 125.279 14.9986C125.517 14.8726 125.705 14.7036 125.841 14.4915C125.976 14.2794 126.044 14.0391 126.044 13.7706V12.9602C125.978 13.0033 125.887 13.0431 125.771 13.0795C125.658 13.1127 125.531 13.1442 125.388 13.174C125.246 13.2005 125.103 13.2254 124.961 13.2486C124.818 13.2685 124.689 13.2867 124.573 13.3033C124.324 13.3397 124.107 13.3977 123.922 13.4773C123.736 13.5568 123.592 13.6645 123.489 13.8004C123.386 13.933 123.335 14.0987 123.335 14.2976C123.335 14.5859 123.439 14.8063 123.648 14.9588C123.86 15.108 124.129 15.1825 124.453 15.1825ZM131.908 12.0852V16.5H129.79V6.31818H131.849V10.2109H131.938C132.111 9.76018 132.389 9.4072 132.773 9.15199C133.158 8.89347 133.64 8.7642 134.22 8.7642C134.75 8.7642 135.213 8.88021 135.607 9.11222C136.005 9.34091 136.313 9.67069 136.532 10.1016C136.754 10.5291 136.863 11.0412 136.86 11.6378V16.5H134.742V12.0156C134.746 11.545 134.626 11.1787 134.384 10.9169C134.146 10.6551 133.811 10.5241 133.38 10.5241C133.092 10.5241 132.836 10.5855 132.614 10.7081C132.396 10.8307 132.223 11.0097 132.097 11.245C131.975 11.477 131.912 11.7571 131.908 12.0852ZM138.527 16.5V8.86364H140.645V16.5H138.527ZM139.591 7.87926C139.276 7.87926 139.006 7.77486 138.78 7.56605C138.558 7.35393 138.447 7.10038 138.447 6.8054C138.447 6.51373 138.558 6.26349 138.78 6.05469C139.006 5.84257 139.276 5.73651 139.591 5.73651C139.906 5.73651 140.174 5.84257 140.396 6.05469C140.622 6.26349 140.734 6.51373 140.734 6.8054C140.734 7.10038 140.622 7.35393 140.396 7.56605C140.174 7.77486 139.906 7.87926 139.591 7.87926ZM145.155 16.6243C144.575 16.6243 144.05 16.4751 143.579 16.1768C143.112 15.8752 142.741 15.4328 142.466 14.8494C142.194 14.2628 142.058 13.5436 142.058 12.6918C142.058 11.8168 142.199 11.0893 142.48 10.5092C142.762 9.9259 143.137 9.49006 143.604 9.2017C144.075 8.91004 144.59 8.7642 145.15 8.7642C145.578 8.7642 145.934 8.83712 146.219 8.98295C146.507 9.12547 146.739 9.30445 146.915 9.51989C147.094 9.73201 147.23 9.94081 147.323 10.1463H147.387V6.31818H149.5V16.5H147.412V15.277H147.323C147.223 15.4891 147.083 15.6996 146.9 15.9084C146.721 16.1139 146.488 16.2846 146.199 16.4205C145.914 16.5563 145.566 16.6243 145.155 16.6243ZM145.826 14.9389C146.168 14.9389 146.456 14.8461 146.691 14.6605C146.93 14.4716 147.112 14.2081 147.238 13.87C147.368 13.532 147.432 13.1359 147.432 12.6818C147.432 12.2277 147.369 11.8333 147.243 11.4986C147.117 11.1638 146.935 10.9053 146.696 10.723C146.458 10.5407 146.168 10.4496 145.826 10.4496C145.478 10.4496 145.185 10.544 144.946 10.733C144.708 10.9219 144.527 11.1837 144.404 11.5185C144.282 11.8532 144.221 12.241 144.221 12.6818C144.221 13.1259 144.282 13.5187 144.404 13.8601C144.53 14.1982 144.711 14.4633 144.946 14.6555C145.185 14.8445 145.478 14.9389 145.826 14.9389Z"
              fill="#0F172A"
            />
            <path
              d="M55.576 38.584C55.024 38.584 54.528 38.488 54.088 38.296C53.656 38.096 53.316 37.824 53.068 37.48C52.82 37.128 52.692 36.724 52.684 36.268H53.848C53.888 36.66 54.048 36.992 54.328 37.264C54.616 37.528 55.032 37.66 55.576 37.66C56.096 37.66 56.504 37.532 56.8 37.276C57.104 37.012 57.256 36.676 57.256 36.268C57.256 35.948 57.168 35.688 56.992 35.488C56.816 35.288 56.596 35.136 56.332 35.032C56.068 34.928 55.712 34.816 55.264 34.696C54.712 34.552 54.268 34.408 53.932 34.264C53.604 34.12 53.32 33.896 53.08 33.592C52.848 33.28 52.732 32.864 52.732 32.344C52.732 31.888 52.848 31.484 53.08 31.132C53.312 30.78 53.636 30.508 54.052 30.316C54.476 30.124 54.96 30.028 55.504 30.028C56.288 30.028 56.928 30.224 57.424 30.616C57.928 31.008 58.212 31.528 58.276 32.176H57.076C57.036 31.856 56.868 31.576 56.572 31.336C56.276 31.088 55.884 30.964 55.396 30.964C54.94 30.964 54.568 31.084 54.28 31.324C53.992 31.556 53.848 31.884 53.848 32.308C53.848 32.612 53.932 32.86 54.1 33.052C54.276 33.244 54.488 33.392 54.736 33.496C54.992 33.592 55.348 33.704 55.804 33.832C56.356 33.984 56.8 34.136 57.136 34.288C57.472 34.432 57.76 34.66 58 34.972C58.24 35.276 58.36 35.692 58.36 36.22C58.36 36.628 58.252 37.012 58.036 37.372C57.82 37.732 57.5 38.024 57.076 38.248C56.652 38.472 56.152 38.584 55.576 38.584ZM61.299 32.824V36.7C61.299 37.02 61.367 37.248 61.503 37.384C61.639 37.512 61.875 37.576 62.211 37.576H63.015V38.5H62.031C61.423 38.5 60.967 38.36 60.663 38.08C60.359 37.8 60.207 37.34 60.207 36.7V32.824H59.355V31.924H60.207V30.268H61.299V31.924H63.015V32.824H61.299ZM63.9301 35.188C63.9301 34.516 64.0661 33.928 64.3381 33.424C64.6101 32.912 64.9821 32.516 65.4541 32.236C65.9341 31.956 66.4661 31.816 67.0501 31.816C67.6261 31.816 68.1261 31.94 68.5501 32.188C68.9741 32.436 69.2901 32.748 69.4981 33.124V31.924H70.6021V38.5H69.4981V37.276C69.2821 37.66 68.9581 37.98 68.5261 38.236C68.1021 38.484 67.6061 38.608 67.0381 38.608C66.4541 38.608 65.9261 38.464 65.4541 38.176C64.9821 37.888 64.6101 37.484 64.3381 36.964C64.0661 36.444 63.9301 35.852 63.9301 35.188ZM69.4981 35.2C69.4981 34.704 69.3981 34.272 69.1981 33.904C68.9981 33.536 68.7261 33.256 68.3821 33.064C68.0461 32.864 67.6741 32.764 67.2661 32.764C66.8581 32.764 66.4861 32.86 66.1501 33.052C65.8141 33.244 65.5461 33.524 65.3461 33.892C65.1461 34.26 65.0461 34.692 65.0461 35.188C65.0461 35.692 65.1461 36.132 65.3461 36.508C65.5461 36.876 65.8141 37.16 66.1501 37.36C66.4861 37.552 66.8581 37.648 67.2661 37.648C67.6741 37.648 68.0461 37.552 68.3821 37.36C68.7261 37.16 68.9981 36.876 69.1981 36.508C69.3981 36.132 69.4981 35.696 69.4981 35.2ZM73.7794 32.824V36.7C73.7794 37.02 73.8474 37.248 73.9834 37.384C74.1194 37.512 74.3554 37.576 74.6914 37.576H75.4954V38.5H74.5114C73.9034 38.5 73.4474 38.36 73.1434 38.08C72.8394 37.8 72.6874 37.34 72.6874 36.7V32.824H71.8354V31.924H72.6874V30.268H73.7794V31.924H75.4954V32.824H73.7794ZM82.6505 31.924V38.5H81.5585V37.528C81.3505 37.864 81.0585 38.128 80.6825 38.32C80.3145 38.504 79.9065 38.596 79.4585 38.596C78.9465 38.596 78.4865 38.492 78.0785 38.284C77.6705 38.068 77.3465 37.748 77.1065 37.324C76.8745 36.9 76.7585 36.384 76.7585 35.776V31.924H77.8385V35.632C77.8385 36.28 78.0025 36.78 78.3305 37.132C78.6585 37.476 79.1065 37.648 79.6745 37.648C80.2585 37.648 80.7185 37.468 81.0545 37.108C81.3905 36.748 81.5585 36.224 81.5585 35.536V31.924H82.6505ZM86.8223 38.608C86.3183 38.608 85.8663 38.524 85.4663 38.356C85.0663 38.18 84.7503 37.94 84.5183 37.636C84.2863 37.324 84.1583 36.968 84.1343 36.568H85.2623C85.2943 36.896 85.4463 37.164 85.7183 37.372C85.9983 37.58 86.3623 37.684 86.8103 37.684C87.2263 37.684 87.5543 37.592 87.7943 37.408C88.0343 37.224 88.1543 36.992 88.1543 36.712C88.1543 36.424 88.0263 36.212 87.7703 36.076C87.5143 35.932 87.1183 35.792 86.5823 35.656C86.0943 35.528 85.6943 35.4 85.3823 35.272C85.0783 35.136 84.8143 34.94 84.5903 34.684C84.3743 34.42 84.2663 34.076 84.2663 33.652C84.2663 33.316 84.3663 33.008 84.5663 32.728C84.7663 32.448 85.0503 32.228 85.4183 32.068C85.7863 31.9 86.2063 31.816 86.6783 31.816C87.4063 31.816 87.9943 32 88.4423 32.368C88.8903 32.736 89.1303 33.24 89.1623 33.88H88.0703C88.0463 33.536 87.9063 33.26 87.6503 33.052C87.4023 32.844 87.0663 32.74 86.6423 32.74C86.2503 32.74 85.9383 32.824 85.7063 32.992C85.4743 33.16 85.3583 33.38 85.3583 33.652C85.3583 33.868 85.4263 34.048 85.5623 34.192C85.7063 34.328 85.8823 34.44 86.0903 34.528C86.3063 34.608 86.6023 34.7 86.9783 34.804C87.4503 34.932 87.8343 35.06 88.1303 35.188C88.4263 35.308 88.6783 35.492 88.8863 35.74C89.1023 35.988 89.2143 36.312 89.2223 36.712C89.2223 37.072 89.1223 37.396 88.9223 37.684C88.7223 37.972 88.4383 38.2 88.0703 38.368C87.7103 38.528 87.2943 38.608 86.8223 38.608ZM95.3238 33.64V34.564H90.5358V33.64H95.3238ZM97.0612 37.624C98.0772 36.808 98.8732 36.14 99.4492 35.62C100.025 35.092 100.509 34.544 100.901 33.976C101.301 33.4 101.501 32.836 101.501 32.284C101.501 31.764 101.373 31.356 101.117 31.06C100.869 30.756 100.465 30.604 99.9052 30.604C99.3612 30.604 98.9372 30.776 98.6332 31.12C98.3372 31.456 98.1772 31.908 98.1532 32.476H97.0972C97.1292 31.58 97.4012 30.888 97.9132 30.4C98.4252 29.912 99.0852 29.668 99.8932 29.668C100.717 29.668 101.369 29.896 101.849 30.352C102.337 30.808 102.581 31.436 102.581 32.236C102.581 32.9 102.381 33.548 101.981 34.18C101.589 34.804 101.141 35.356 100.637 35.836C100.133 36.308 99.4892 36.86 98.7052 37.492H102.833V38.404H97.0612V37.624ZM104.096 34.072C104.096 32.696 104.32 31.624 104.768 30.856C105.216 30.08 106 29.692 107.12 29.692C108.232 29.692 109.012 30.08 109.46 30.856C109.908 31.624 110.132 32.696 110.132 34.072C110.132 35.472 109.908 36.56 109.46 37.336C109.012 38.112 108.232 38.5 107.12 38.5C106 38.5 105.216 38.112 104.768 37.336C104.32 36.56 104.096 35.472 104.096 34.072ZM109.052 34.072C109.052 33.376 109.004 32.788 108.908 32.308C108.82 31.82 108.632 31.428 108.344 31.132C108.064 30.836 107.656 30.688 107.12 30.688C106.576 30.688 106.16 30.836 105.872 31.132C105.592 31.428 105.404 31.82 105.308 32.308C105.22 32.788 105.176 33.376 105.176 34.072C105.176 34.792 105.22 35.396 105.308 35.884C105.404 36.372 105.592 36.764 105.872 37.06C106.16 37.356 106.576 37.504 107.12 37.504C107.656 37.504 108.064 37.356 108.344 37.06C108.632 36.764 108.82 36.372 108.908 35.884C109.004 35.396 109.052 34.792 109.052 34.072ZM111.631 34.072C111.631 32.696 111.855 31.624 112.303 30.856C112.751 30.08 113.535 29.692 114.655 29.692C115.767 29.692 116.547 30.08 116.995 30.856C117.443 31.624 117.667 32.696 117.667 34.072C117.667 35.472 117.443 36.56 116.995 37.336C116.547 38.112 115.767 38.5 114.655 38.5C113.535 38.5 112.751 38.112 112.303 37.336C111.855 36.56 111.631 35.472 111.631 34.072ZM116.587 34.072C116.587 33.376 116.539 32.788 116.443 32.308C116.355 31.82 116.167 31.428 115.879 31.132C115.599 30.836 115.191 30.688 114.655 30.688C114.111 30.688 113.695 30.836 113.407 31.132C113.127 31.428 112.939 31.82 112.843 32.308C112.755 32.788 112.711 33.376 112.711 34.072C112.711 34.792 112.755 35.396 112.843 35.884C112.939 36.372 113.127 36.764 113.407 37.06C113.695 37.356 114.111 37.504 114.655 37.504C115.191 37.504 115.599 37.356 115.879 37.06C116.167 36.764 116.355 36.372 116.443 35.884C116.539 35.396 116.587 34.792 116.587 34.072Z"
              fill="#64748B"
            />
            <path d="M176 28L182 22L176 16" stroke="#64748B" />
            <defs>
              <clipPath id="clip0_6_3844">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(0 2)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="ml-11 mt-7 w-[600px] h-[620px] ">
          <div className=" w-[924px] h-[160px]">
            <div className="flex gap-28">
              <div>
                <h1 className="font-bold">start date:</h1>
                <input
                  className=" w-[150%] h-10 mt-4 rounded-lg"
                  type="date"
                  placeholder="15-Apr-2024"
                  required
                ></input>
              </div>

              <div>
                <h1 className="font-bold">end date:</h1>
                <input
                  className=" w-[150%] h-10 mt-4 rounded-lg"
                  type="date"
                  placeholder="15-Apr-2024"
                  required
                ></input>
              </div>
              <button className="ml-80 h-9 " onClick={display}>
                <svg
                  className=""
                  width="140"
                  height="36"
                  viewBox="0 0 140 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_21_1440" fill="white">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8V28C140 32.4183 136.418 36 132 36H8C3.58172 36 0 32.4183 0 28V8Z" />
                  </mask>
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8V28C140 32.4183 136.418 36 132 36H8C3.58172 36 0 32.4183 0 28V8Z"
                    fill="#4BCBEB"
                  />
                  <path
                    d="M0 0H140H0ZM140 36H0H140ZM8 36C3.02944 36 -1 31.9706 -1 27V9C-1 4.02944 3.02944 0 8 0C4.13401 0 1 3.58172 1 8V28C1 32.4183 4.13401 36 8 36ZM140 0V36V0Z"
                    fill="#4BCBEB"
                    fill-opacity="0.3"
                    mask="url(#path-1-inside-1_21_1440)"
                  />
                  <path
                    d="M34 7C31.8244 7 29.6977 7.64514 27.8887 8.85383C26.0798 10.0625 24.6699 11.7805 23.8373 13.7905C23.0048 15.8005 22.7869 18.0122 23.2114 20.146C23.6358 22.2798 24.6835 24.2398 26.2218 25.7782C27.7602 27.3166 29.7202 28.3642 31.854 28.7886C33.9878 29.2131 36.1995 28.9952 38.2095 28.1627C40.2195 27.3301 41.9375 25.9202 43.1462 24.1113C44.3549 22.3023 45 20.1756 45 18C44.9966 15.0837 43.8365 12.2878 41.7744 10.2256C39.7122 8.16347 36.9163 7.00344 34 7ZM39 19H35V23C35 23.2652 34.8946 23.5196 34.7071 23.7071C34.5196 23.8946 34.2652 24 34 24C33.7348 24 33.4804 23.8946 33.2929 23.7071C33.1054 23.5196 33 23.2652 33 23V19H29C28.7348 19 28.4804 18.8946 28.2929 18.7071C28.1054 18.5196 28 18.2652 28 18C28 17.7348 28.1054 17.4804 28.2929 17.2929C28.4804 17.1054 28.7348 17 29 17H33V13C33 12.7348 33.1054 12.4804 33.2929 12.2929C33.4804 12.1054 33.7348 12 34 12C34.2652 12 34.5196 12.1054 34.7071 12.2929C34.8946 12.4804 35 12.7348 35 13V17H39C39.2652 17 39.5196 17.1054 39.7071 17.2929C39.8946 17.4804 40 17.7348 40 18C40 18.2652 39.8946 18.5196 39.7071 18.7071C39.5196 18.8946 39.2652 19 39 19Z"
                    fill="white"
                  />
                  <path
                    d="M60.916 20.512H56.842L56.142 22.5H54.476L57.962 12.756H59.81L63.296 22.5H61.616L60.916 20.512ZM60.468 19.21L58.886 14.688L57.29 19.21H60.468ZM64.2797 18.608C64.2797 17.8333 64.4384 17.1473 64.7557 16.55C65.0824 15.9527 65.5211 15.4907 66.0717 15.164C66.6317 14.828 67.2524 14.66 67.9337 14.66C68.4377 14.66 68.9324 14.772 69.4177 14.996C69.9124 15.2107 70.3044 15.5 70.5937 15.864V12.14H72.2037V22.5H70.5937V21.338C70.3324 21.7113 69.9684 22.0193 69.5017 22.262C69.0444 22.5047 68.5171 22.626 67.9197 22.626C67.2477 22.626 66.6317 22.458 66.0717 22.122C65.5211 21.7767 65.0824 21.3007 64.7557 20.694C64.4384 20.078 64.2797 19.3827 64.2797 18.608ZM70.5937 18.636C70.5937 18.104 70.4817 17.642 70.2577 17.25C70.0431 16.858 69.7584 16.5593 69.4037 16.354C69.0491 16.1487 68.6664 16.046 68.2557 16.046C67.8451 16.046 67.4624 16.1487 67.1077 16.354C66.7531 16.55 66.4637 16.844 66.2397 17.236C66.0251 17.6187 65.9177 18.076 65.9177 18.608C65.9177 19.14 66.0251 19.6067 66.2397 20.008C66.4637 20.4093 66.7531 20.7173 67.1077 20.932C67.4717 21.1373 67.8544 21.24 68.2557 21.24C68.6664 21.24 69.0491 21.1373 69.4037 20.932C69.7584 20.7267 70.0431 20.428 70.2577 20.036C70.4817 19.6347 70.5937 19.168 70.5937 18.636ZM73.768 18.608C73.768 17.8333 73.9267 17.1473 74.244 16.55C74.5707 15.9527 75.0093 15.4907 75.56 15.164C76.12 14.828 76.7407 14.66 77.422 14.66C77.926 14.66 78.4207 14.772 78.906 14.996C79.4007 15.2107 79.7927 15.5 80.082 15.864V12.14H81.692V22.5H80.082V21.338C79.8207 21.7113 79.4567 22.0193 78.99 22.262C78.5327 22.5047 78.0053 22.626 77.408 22.626C76.736 22.626 76.12 22.458 75.56 22.122C75.0093 21.7767 74.5707 21.3007 74.244 20.694C73.9267 20.078 73.768 19.3827 73.768 18.608ZM80.082 18.636C80.082 18.104 79.97 17.642 79.746 17.25C79.5313 16.858 79.2467 16.5593 78.892 16.354C78.5373 16.1487 78.1547 16.046 77.744 16.046C77.3333 16.046 76.9507 16.1487 76.596 16.354C76.2413 16.55 75.952 16.844 75.728 17.236C75.5133 17.6187 75.406 18.076 75.406 18.608C75.406 19.14 75.5133 19.6067 75.728 20.008C75.952 20.4093 76.2413 20.7173 76.596 20.932C76.96 21.1373 77.3427 21.24 77.744 21.24C78.1547 21.24 78.5373 21.1373 78.892 20.932C79.2467 20.7267 79.5313 20.428 79.746 20.036C79.97 19.6347 80.082 19.168 80.082 18.636ZM93.711 12.77V14.072H91.121V22.5H89.525V14.072H86.921V12.77H93.711ZM94.7953 18.608C94.7953 17.8333 94.954 17.1473 95.2713 16.55C95.598 15.9527 96.0367 15.4907 96.5873 15.164C97.1473 14.828 97.7633 14.66 98.4353 14.66C99.042 14.66 99.5693 14.7813 100.017 15.024C100.475 15.2573 100.839 15.5513 101.109 15.906V14.786H102.719V22.5H101.109V21.352C100.839 21.716 100.47 22.0193 100.003 22.262C99.5367 22.5047 99.0047 22.626 98.4073 22.626C97.7447 22.626 97.138 22.458 96.5873 22.122C96.0367 21.7767 95.598 21.3007 95.2713 20.694C94.954 20.078 94.7953 19.3827 94.7953 18.608ZM101.109 18.636C101.109 18.104 100.997 17.642 100.773 17.25C100.559 16.858 100.274 16.5593 99.9193 16.354C99.5647 16.1487 99.182 16.046 98.7713 16.046C98.3607 16.046 97.978 16.1487 97.6233 16.354C97.2687 16.55 96.9793 16.844 96.7553 17.236C96.5407 17.6187 96.4333 18.076 96.4333 18.608C96.4333 19.14 96.5407 19.6067 96.7553 20.008C96.9793 20.4093 97.2687 20.7173 97.6233 20.932C97.9873 21.1373 98.37 21.24 98.7713 21.24C99.182 21.24 99.5647 21.1373 99.9193 20.932C100.274 20.7267 100.559 20.428 100.773 20.036C100.997 19.6347 101.109 19.168 101.109 18.636ZM107.616 22.626C107.009 22.626 106.463 22.5187 105.978 22.304C105.502 22.08 105.124 21.7813 104.844 21.408C104.564 21.0253 104.414 20.6007 104.396 20.134H106.048C106.076 20.4607 106.23 20.736 106.51 20.96C106.799 21.1747 107.158 21.282 107.588 21.282C108.036 21.282 108.381 21.198 108.624 21.03C108.876 20.8527 109.002 20.6287 109.002 20.358C109.002 20.0687 108.862 19.854 108.582 19.714C108.311 19.574 107.877 19.42 107.28 19.252C106.701 19.0933 106.23 18.9393 105.866 18.79C105.502 18.6407 105.184 18.412 104.914 18.104C104.652 17.796 104.522 17.39 104.522 16.886C104.522 16.4753 104.643 16.102 104.886 15.766C105.128 15.4207 105.474 15.15 105.922 14.954C106.379 14.758 106.902 14.66 107.49 14.66C108.367 14.66 109.072 14.884 109.604 15.332C110.145 15.7707 110.434 16.3727 110.472 17.138H108.876C108.848 16.7927 108.708 16.5173 108.456 16.312C108.204 16.1067 107.863 16.004 107.434 16.004C107.014 16.004 106.692 16.0833 106.468 16.242C106.244 16.4007 106.132 16.6107 106.132 16.872C106.132 17.0773 106.206 17.25 106.356 17.39C106.505 17.53 106.687 17.642 106.902 17.726C107.116 17.8007 107.434 17.8987 107.854 18.02C108.414 18.1693 108.871 18.3233 109.226 18.482C109.59 18.6313 109.902 18.8553 110.164 19.154C110.425 19.4527 110.56 19.8493 110.57 20.344C110.57 20.7827 110.448 21.1747 110.206 21.52C109.963 21.8653 109.618 22.136 109.17 22.332C108.731 22.528 108.213 22.626 107.616 22.626ZM115.346 18.65L118.902 22.5H116.746L113.89 19.182V22.5H112.294V12.14H113.89V18.16L116.69 14.786H118.902L115.346 18.65Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <h1 className="font-bold">Enter Title:</h1>
            <input
              className=" w-[30%] h-10 mt-4 rounded-l-lg "
              type="search"
              placeholder="search"
              required
            ></input>
            <button className="h-10 w-20 bg-[#4BCBEB4D] rounded-r-lg">
              Search
            </button>
          </div>
          <div className="mt-11  grid grid-cols-3 gap-x-80 gap-y-20 ">
            
              {/* {Tasks.map((item,index)=>{

              })} */}
              {submittedData.map((item, index) => {

                return <div key={index} className="block w-[300px] h-[400px] border shadow-sm border-[#4BCBEB4D] rounded-xl "><div className={`h-[24px] ${getRandomColor()} font-bold  rounded-t-xl`}></div>
                <div className="ml-7 mt-5">
                  <div className="flex">
                  <p className=" font-bold">Title:</p>
                    
                    <svg
                      className="ml-44"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.75 12C9.75 13.2405 10.7595 14.25 12 14.25C13.2405 14.25 14.25 13.2405 14.25 12C14.25 10.7595 13.2405 9.75 12 9.75C10.7595 9.75 9.75 10.7595 9.75 12ZM9.75 19.5C9.75 20.7405 10.7595 21.75 12 21.75C13.2405 21.75 14.25 20.7405 14.25 19.5C14.25 18.2595 13.2405 17.25 12 17.25C10.7595 17.25 9.75 18.2595 9.75 19.5ZM9.75 4.5C9.75 5.7405 10.7595 6.75 12 6.75C13.2405 6.75 14.25 5.7405 14.25 4.5C14.25 3.2595 13.2405 2.25 12 2.25C10.7595 2.25 9.75 3.2595 9.75 4.5Z"
                        fill="#4BCBEB"
                      />
                    </svg>
                    
                  </div>
                  <p className="">{item.title}</p>
                  <p className="mt-3 font-bold">Description:</p>
                  <p>{item.description}</p>
  
                  <p className="mt-3 font-bold">Attachement:</p>
                  <div className="mt-2 mr-9">
                    <img
                      src={imageOne}
                      alt="Description of the image"
                      className="h-24 w-60"
                    />
                  </div>
                  <div className='flex gap-x-14'>
                    <p className="font-bold">Start Date:</p>
                    
                    <p className="font-bold">End Date:</p>
                  </div>
                </div></div>
              })}
              
            </div>
          </div>
        </div>
        <div>{showModal && <Modal onSubmit={handleModalSubmit} />}</div>
      </div>
    
  );
}
export default Tasks;
