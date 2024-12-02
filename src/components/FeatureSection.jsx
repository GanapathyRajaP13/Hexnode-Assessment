import React, { useState } from "react";
import "./FeatureGrid.css";
import { AdaptIcon, SecurityIcon, SettingsPlayIcon, PolicyIcon } from "./icons";

const FeatureGrid = () => {
  const [hoverEffect, sethoverEffect] = useState({
    adaptHover: false,
    security: false,
    automationHover: false,
    management: false,
  });

  const handleMouseEnter = (key) => {
    sethoverEffect((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key) => {
    sethoverEffect((prev) => ({
      ...prev,
      [key]: false,
    }));
  };
  return (
    <>
      <h1
        style={{
          color: "black",
          textAlign: "center",
          marginTop: "5%",
          marginBottom: "0px",
        }}
      >
        Why Hexnode?
      </h1>
      <div className="hexnode-container">
        <div className="logo">
          <img
            src="https://static.hexnode.com/v2/assets/img/ads-pages/hexnode-app-icon.svg"
            alt="Hexnode Logo"
          />
        </div>
        <div
          className="card card-top-left"
          onMouseEnter={() => handleMouseEnter("adaptHover")}
          onMouseLeave={() => handleMouseLeave("adaptHover")}
        >
          <h3>
            <span style={{ paddingRight: "10px" }}>
              <AdaptIcon />
            </span>
            Adapt to the new normal
          </h3>
          <p>
            Hybrid, remote or onsite, you can trust Hexnode UEM to deliver.
            Create policies that cater to your organization's protocols. Whether
            it be BYOD, COPE, or platform limited, Hexnode can manage it all.
          </p>
          <span
            style={{
              color: "#DD0735",
              fontSize: "18px",
              paddingLeft: "35px",
              paddingBottom: "20px",
              display: hoverEffect.adaptHover ? "block" : "none",
            }}
          >
            Try Hexnode on your endpoints
          </span>
        </div>

        <div
          className="card card-top-right"
          onMouseEnter={() => handleMouseEnter("security")}
          onMouseLeave={() => handleMouseLeave("security")}
        >
          <h3>
            <span style={{ paddingRight: "10px" }}>
              <SecurityIcon />
            </span>
            Zero compromise security
          </h3>
          <p>
            Enable full-fledged device encryption, data loss prevention, and
            all-rounded device security with Hexnode UEM. Be at the bleeding
            edge of device security without any compromises.
          </p>
          <span
            style={{
              color: "#DD0735",
              fontSize: "18px",
              paddingLeft: "35px",
              paddingBottom: "20px",
              display: hoverEffect.security ? "block" : "none",
            }}
          >
            Try Hexnode on your endpoints
          </span>
        </div>
        <div
          className="card card-bottom-left"
          onMouseEnter={() => handleMouseEnter("automation")}
          onMouseLeave={() => handleMouseLeave("automation")}
        >
          <h3>
            <span style={{ paddingRight: "10px" }}>
              <SettingsPlayIcon />
            </span>
            Get more done with automation
          </h3>
          <p>
            Hexnode UEM automation features help free up IT's time spent on
            mundane and repetitive tasks. Do hours' worth of work in a few
            minutes.
          </p>
          <span
            style={{
              color: "#DD0735",
              fontSize: "18px",
              paddingLeft: "35px",
              paddingBottom: "20px",
              display: hoverEffect.automation ? "block" : "none",
            }}
          >
            Try Hexnode on your endpoints
          </span>
        </div>
        <div
          className="card card-bottom-right"
          onMouseEnter={() => handleMouseEnter("management")}
          onMouseLeave={() => handleMouseLeave("management")}
        >
          <h3>
            <span style={{ paddingRight: "10px" }}>
              <PolicyIcon />
            </span>
            Unified Policy Management
          </h3>
          <p>
            Create a single policy through Hexnode and apply it on all the
            devices in your organization. Any platform or form factor, achieve
            single pane of glass management with Hexnode.
          </p>
          <span
            style={{
              color: "#DD0735",
              fontSize: "18px",
              paddingLeft: "35px",
              paddingBottom: "20px",
              display: hoverEffect.management ? "block" : "none",
            }}
          >
            Try Hexnode on your endpoints
          </span>
        </div>
        <div className="line-wrapper">
          <div className="line-animation left-top absolute top-[50%] left-[50%] translate-x-[-200px] xl:translate-x-[-210px] translate-y-[-170px] z-[5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="177"
              height="134.928"
              viewBox="0 0 177.49 134.928"
            >
              <path
                d="M-18870.2-4879.633v-95.043c0-26.781-22.783-38.885-35.471-38.885h-141.02"
                transform="translate(19047.193 5014.062)"
                fill="none"
                stroke="#020a19"
                strokeLinecap="round"
                strokeWidth="1"
                strokeDasharray="7"
              />
            </svg>
          </div>
          <div className="line-animation right-top absolute top-[50%] left-[50%] translate-x-[20px] xl:translate-x-[30px] translate-y-[-170px] z-[5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="177"
              height="134.928"
              viewBox="0 0 177.49 134.928"
            >
              <path
                d="M-19046.7-4879.633v-95.043c0-26.781,22.783-38.885,35.471-38.885h141.02"
                transform="translate(19047.195 5014.062)"
                fill="none"
                stroke="#020a19"
                strokeLinecap="round"
                strokeWidth="1"
                strokeDasharray="7"
              />
            </svg>
          </div>
          <div className="line-animation left-bottom absolute top-[50%] left-[50%] translate-x-[-200px] xl:translate-x-[-210px] translate-y-[40px] z-[5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="177"
              height="134.928"
              viewBox="0 0 177.49 134.928"
            >
              <path
                d="M-18870.2-5013.562v95.043c0,26.781-22.783,38.885-35.471,38.885h-141.02"
                transform="translate(19047.193 5014.062)"
                fill="none"
                stroke="#020a19"
                strokeLinecap="round"
                strokeWidth="1"
                strokeDasharray="7"
              />
            </svg>
          </div>
          <div className="line-animation right-bottom absolute top-[50%] left-[50%] translate-x-[20px] xl:translate-x-[30px] translate-y-[40px] z-[5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="177"
              height="134.928"
              viewBox="0 0 177.49 134.928"
            >
              <path
                d="M-19046.7-5013.562v95.043c0,26.781,22.783,38.885,35.471,38.885h141.02"
                transform="translate(19047.195 5014.062)"
                fill="none"
                stroke="#020a19"
                strokeLinecap="round"
                strokeWidth="1"
                strokeDasharray="7"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureGrid;
