import { useState } from "react";

import singleRoom from "../images/room1/singleRoom.jpeg";
import backHome from "../images/back home.png";
import AC from "../images/amenities/icon_amenities_Air-Conditioner.svg";
import OK from "../images/amenities/icons-ok.svg";
import RoomCarousel from "../components/RoomCarousel";
import RoomDetail from "../container/RoomDetail";
import DialogBgBlur from "../component/DialogBgBlur";
import Dialog from "../container/Dialog"

export function Rooms() {
  const iconAry = [];
  for (let i = 0; i < 8; i++) {
    iconAry.push("");
  }

  const [bgStatus, setBgStatus] = useState(false);

  let showBg = bgStatus === true ? <Dialog setBgStatus={setBgStatus} /> : "";
  const BgSwitch = () => {
    switch (bgStatus) {
      case false:
        setBgStatus(true);
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex h-screen">
      {showBg}
      {/* Nav */}
      <nav className="w-[42%]">
        {/* 輪播圖 */}
        <RoomCarousel />

        <div className="">
          {/* <img src={singleRoom} alt="singleRoom" className="gradient" /> */}
          {/* 返回首頁按鈕 */}
          <button
            type="button"
            className="flex items-center absolute top-[87px] left-[128px]"
          >
            <img src={backHome} alt="backHome" className="m-[10px] " />
            <span className="font-light text-sm text-primary">
              查看其他房型
            </span>
          </button>
          {/* 價格＆預約按鈕 */}
          <div className=" flex flex-col items-center absolute bottom-[109px] left-[161px]">
            <div className="mb-[10px]">
              <span className="text-[36px] text-primary">$1,380 </span>
              <span className="text-xl text-primary"> / 1晚</span>
            </div>

            <button
              type="button"
              onClick={BgSwitch}
              className="text-xl text-white bg-primary py-[8.5px] w-[252px] block hover:opacity-50"
            >
              Booking Now
            </button>
          </div>
        </div>
      </nav>

      {/* RoomInfo */}
      <div className="mt-[133px] w-[635px] ml-[30px] text-primary">
        <RoomDetail />
        {/* icons */}
        <ul className="flex flex-wrap gap-x-10 gap-y-[26px] mb-7">
          {/* 01 */}
          {iconAry.map((item, i) => {
            return (
              <li key={i} className="flex">
                <img src={AC} alt="" />
                <img
                  src={OK}
                  alt=""
                  className="relative -top-[13px] -right-1 "
                />
              </li>
            );
          })}
        </ul>
        <p className="text-primary text-sm font-medium mb-2">空房狀態查詢</p>
      </div>
    </div>
  );
}
