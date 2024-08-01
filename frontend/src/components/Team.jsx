import React from "react";
import one from "../assets/static";
import Customer from "./Customer";
import { FaStar } from "react-icons/fa";

const Team = () => {
  return (
    <div className="m-h-screen bg-[#ecf9f7] p-10">
      <div className="flex flex-col flex-wrap m-10">
        <h1 className="text-[2.5rem] text-center text-[#277] pb-10">
          How does it work?
        </h1>
        <div className="flex justify-between md:items-center flex-col md:flex-row w-full">
          <div className="flex md:flex-col items-center w-72">
            <div className="icon">
              <img src={one} alt="" className="" />
            </div>
            <div className="flex flex-col md:items-center mt-5">
              <h2 className="text-[#277] font-bold md:text-2xl">
                Online consultation
              </h2>
              <p className="md:text-center text-sm md:text-[16px]">
                Complete a short questionnaire to check your eligibility for
                treatment
              </p>
            </div>
          </div>
          <div className="flex md:flex-col items-center w-72">
            <div className="icon">
              <img src={one} alt="" className="" />
            </div>
            <div className="flex flex-col md:items-center mt-5">
              <h2 className="text-[#277] font-bold md:text-2xl">
                Choose a treatment
              </h2>
              <p className="md:text-center text-sm md:text-[16px]">
                Select the treatment or medication you need from leading brands
              </p>
            </div>
          </div>
          <div className="flex md:flex-col items-center w-72">
            <div className="icon">
              <img src={one} alt="" className="" />
            </div>
            <div className="flex flex-col md:items-center mt-5">
              <h2 className="text-[#277] font-bold md:text-2xl">
                Express delivery
              </h2>
              <p className="md:text-center text-sm md:text-[16px]">
                Medication is dispensed and delivered to your home or work
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md my-10 mx-auto p-7 shadow-md flex flex-col place-items-center">
        <h2 className="text-center text-[#277] font-bold text-2xl">
          A fully qualified team
        </h2>
        <p className="text-center">
          Both our pharmacy and pharmacists are based in Nigeria and are
          registered with the General Pharmaceutical Council.
        </p>
        <div className="pharms flex flex-wrap mx-auto my-5 justify-center gap-4">
          <div className="flex flex-col w-64 h-72 bg-[#ecf9f7] rounded-lg relative items-center shadow hover:animate-pulse transition-all duration-700">
            <span className="text-sm bg-[#277] text-white w-44 h-6 flex absolute top-0 right-0 justify-center rounded-tr-md rounded-bl-md">
              PCN Number: 97555454
            </span>
            <div className="w-36 h-36 rounded-full bg-[#277] absolute top-10">
              <img src={one} alt="" />
            </div>
            <div className=" w- full p-4 rounded-full absolute bottom-0 flex flex-col items-center">
              <h2 className="font-bold text-[#277]">Mary Ufot (PharmD)</h2>
              <p className="font-[500]">Superintendent Pharmacist</p>
              <p className="text-[12px]">Doctor of Pharmacy</p>
              <p className="text-[12px]">University of Nigeria</p>
            </div>
          </div>
          <div className="flex flex-col w-64 h-72 bg-[#ecf9f7] rounded-lg relative items-center shadow hover:animate-pulse transition-all duration-700">
            <span className="text-sm bg-[#277] text-white w-44 h-6 flex absolute top-0 right-0 justify-center rounded-tr-md rounded-bl-md">
              PCN Number: 34586966
            </span>
            <div className="w-36 h-36 rounded-full bg-[#277] absolute top-10">
              {" "}
              <img src={one} alt="" />
            </div>
            <div className=" w- full p-4 rounded-full absolute bottom-0 flex flex-col items-center">
              <h2 className="font-bold text-[#277]">Elvis Osas (BPharm)</h2>
              <p className="font-[500]">Pharmacy Manager</p>
              <p className="text-[12px]">Bachelor of Pharmacy</p>
              <p className="text-[12px]">University of Benin</p>
            </div>
          </div>
          <div className="flex flex-col w-64 h-72 bg-[#ecf9f7] rounded-lg relative items-center shadow hover:animate-pulse transition-all duration-700">
            <span className="text-sm bg-[#277] text-white w-44 h-6 flex absolute top-0 right-0 justify-center rounded-tr-md rounded-bl-md">
              PCN Number: 56789034
            </span>
            <div className="w-36 h-36 rounded-full bg-[#277] absolute top-10">
              {" "}
              <img src={one} alt="" />
            </div>
            <div className=" w- full p-4 rounded-full absolute bottom-0 flex flex-col items-center">
              <h2 className="font-bold text-[#277]">
                PrinceWill Daysman (PharmD)
              </h2>
              <p className="font-[500]">Quality Assurance</p>
              <p className="text-[12px]">Master of Pharmacy</p>
              <p className="text-[12px]">University of Nigeria</p>
            </div>
          </div>
          <div className="flex flex-col w-64 h-72 bg-[#ecf9f7] rounded-lg relative items-center shadow hover:animate-pulse transition-all duration-700">
            <span className="text-sm bg-[#277] text-white w-44 h-6 flex absolute top-0 right-0 justify-center rounded-tr-md rounded-bl-md">
              PCN Number: 97555477
            </span>
            <div className="w-36 h-36 rounded-full bg-[#277] absolute top-10">
              {" "}
              <img src={one} alt="" />
            </div>
            <div className=" w- full p-4 rounded-full absolute bottom-0 flex flex-col items-center">
              <h2 className="font-bold text-[#277]">Henry Ethan(Mphil)</h2>
              <p className="font-[500]">Locum Pharmacist</p>
              <p className="text-[12px]">Master of Pharmacy</p>
              <p className="text-[12px]">LandMark University</p>
            </div>
          </div>
          <span className="m-5 flex justify-center w-full text-[#277] hover:underline cursor-pointer">
            Read More
          </span>
        </div>
      </div>
      <div className="flex flex-col my-5">
        <h2 className="font-extrabold text-center text-[#277] text-xl mb-8">
          What our customers say
        </h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <Customer
            title="Trust Pilot 5 Star ranting"
            rating={<FaStar />}
            content="Good Customer service on live Chat. Wish more companies were like this"
            author="-Kevin, Benin"
          />
          <Customer
            title="Trust Pilot 5 Star ranting"
            rating={<FaStar />}
            content="Good Customer service on live Chat. Wish more companies were like this"
            author="-Kevin, Benin"
          />
          <Customer
            title="Trust Pilot 5 Star ranting"
            rating={<FaStar />}
            content="Good Customer service on live Chat. Wish more companies were like this"
            author="-Kevin, Benin"
          />
          <Customer
            title="Trust Pilot 5 Star ranting"
            rating={<FaStar />}
            content="Good Customer service on live Chat. Wish more companies were like this"
            author="-Kevin, Benin"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
