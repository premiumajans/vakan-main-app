"use client"
import React, { useRef, useState } from "react";
import Email from "../../public/images/job-detail-message.svg";
import Calendar from "../../public/images/job-detail-calendar.svg";
import Eye from "../../public/images/job-detail-eyes.svg";
import Lock from "../../public/images/job-detail-lock.svg";
import openLock from "../../public/clients/images/job-detail-lock-open.svg";
import { useTranslation } from "next-i18next";
import Image from "next/image";

interface IAnnouncementDetail {
  id: number;
  shared_time: string;
  last_time: string;
  view_count: number;
  className?:string
}

function AnnouncementDetail({
  id,
  shared_time,
  last_time,
  view_count,
  className=""
}: IAnnouncementDetail) {
  const [lock, setLock] = useState<boolean>(true);
  const handleLock = () => {
    setLock(!lock);
  };
  const { i18n, t } = useTranslation("common");
  const dateFormatter = (arg: string) => {
    const month = arg?.split("-")[1];
    const date = `${+arg?.split("-")[2].split(" ")[0]} ${t(month)}`;
    return date;
  };

  const copyText = () => {
    const emailEl = document.querySelector(".email");
  };
  return (
    <div data-aos="fade-left" className={`${className} announcement-detail bg-white`}>
      <h3>Elan #{id}</h3>
      <div className="job-detail-inner-top d-flex justify-content-between align-items-center pb-3">
        <div className="d-flex align-items-center">
          <div className="img-box mr-3">
            <Image src={Email} width={22} alt="email" />
          </div>
          <div>
            <span onClick={copyText} className="email">
              {lock ? "E-poçtu göstər" : "demo.vakant@gmail.com"}
            </span>
            <p className="mb-0">E-poçt ünvanı</p>
          </div>
        </div>
        <div onClick={handleLock} className="img-box">
          <Image alt="lock" src={lock ? Lock : openLock} />
        </div>
      </div>

      <div className="job-detail-bottom pt-3">
        <div className="announcement-time w-100 d-flex flex-column flex-sm-row align-items-sm-center">
        
          <div className="date-time-box d-flex align-items-center">
            <div className="img-box mr-3">
              <Image src={Calendar} width={22} alt="calendar" />
            </div>

            <div>
              <span>{dateFormatter(shared_time)}</span>
              <p className="mb-0">Elan tarixi</p>
            </div>
          </div>

          <div className="date-time-box ml-5 pl-3 ml-sm-0 pl-sm-0">
            <span>{dateFormatter(last_time)}</span>
            <p className="mb-0">Bitmə tarixi</p>
          </div>
        </div>
        <div
          style={{ marginTop: "16px" }}
          className="date-time-box d-flex align-items-center"
        >
          <div className="img-box mr-3">
            <Image src={Eye} width={22} alt="calendar" />
          </div>

          <div>
            <span>{view_count}</span>
            <p className="mb-0">Baxilib</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementDetail;
