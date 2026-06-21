import React from "react";
import Container from "./layouts/Container";
import Peng from "../assets/images/Peng.png";
import Invoice from "../assets/images/Invoice.png";
import Veroxfloor from "../assets/images/Veroxfloor.png";
import Amplitude from "../assets/images/Amplitude.png";
import Rpublica from "../assets/images/Rpublica.png";
import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";

const Slatetemp = () => {
  return (
    <div className="bg-[#DAE7E3]">
      <Container>
        <div className="flex gap-[220px] pt-30">
          <div className="w-[40%] pb-30">
            <p className="text-[14px] text-[#3C4049] font-inter font-medium pb-5">
              Creative Freedom
            </p>
            <h3 className="text-[48px] text-[#002E25] font-medium font-archivo pb-9">
              <span className="bg-green px-2 py-2 rounded-lg">
                Slate Template
              </span>{" "}
              Partners + Clients
            </h3>
            <p className="text-[16px] text-[#3C4049] font-inter pb-6.5 pr-20">
              Join our growing network of clients that are experiencing the
              Slate difference every day.
            </p>
            <Link
              to="#"
              className="flex items-center gap-2 text-[#002E25] text-[14px] font-inter font-medium"
            >
              Learn More <FaCircleArrowRight />{" "}
            </Link>
          </div>
          <div className="w-[60%] pt-8">
            <div className="flex gap-26 pb-[100px]">
              <img src={Peng} alt="Peng" />
              <img src={Invoice} alt="Invoice" />
              <img src={Veroxfloor} alt="Veroxfloor" />
            </div>
            <div className="flex gap-26">
              <img src={Amplitude} alt="Amplitude" />
              <img src={Rpublica} alt="Rpublica" />
              <img src={Peng} alt="Peng" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Slatetemp;
