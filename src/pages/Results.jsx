import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  let salaryOfYear = formData.salary * 12 + parseInt(formData.bonus);
  let expenses = salaryOfYear * 0.5 <= 100000 ? salaryOfYear * 0.5 : 100000;
  let child = parseInt(formData.child) * 30000 <= 60000 ? parseInt(formData.child) * 30000 : 60000;
  let social = parseInt(formData.social) * 12 <= 30000 ? parseInt(formData.social) * 12 : 30000;
  let lifeinsurance = parseInt(formData.lifeinsurance) <= 100000 ? parseInt(formData.lifeinsurance) : 100000;
  let deduction = 60000 + child + social + lifeinsurance;
  let income = salaryOfYear - expenses - deduction;
  let ptax = 0;

  if (income <= 100000) ptax = 0;
  else if (income <= 300000) ptax = 0.05;
  else if (income <= 1000000) ptax = 0.10;
  else ptax = 0.15;

  return (
    <div className="bg-purple-400 flex justify-center min-h-screen">
      <div className="flex flex-col max-w-2xl w-full p-8">
        <h1 className="bg-pink-900 text-3xl p-4 mb-6 rounded-lg shadow-lg text-white text-center">
          แบบฟอร์มคำนวณภาษีเงินได้
        </h1>
        <div className="bg-red-200 shadow-lg rounded-lg p-6">
          <h1 className="bg-pink-900 text-white rounded-md p-2 text-2xl text-center mb-6">คำนวณภาษี</h1>
          <div className="space-y-4 text-xl">
            <p className="bg-pink-900 text-white rounded-md p-2 flex gap-2">
              เงินได้ทั้งปี: <span className="text-red-400 font-bold">{salaryOfYear.toLocaleString()}</span> บาท
            </p>
            <p className="bg-pink-900 text-white rounded-md p-2 flex gap-2">
              ค่าใช้จ่าย: <span className="text-red-400 font-bold">{expenses.toLocaleString()}</span> บาท
            </p>
            <p className="bg-pink-900 text-white rounded-md p-2 flex gap-2">
              ค่าลดหย่อน: <span className="text-red-400 font-bold">{deduction.toLocaleString()}</span> บาท
            </p>
            <p className="bg-pink-900 text-white rounded-md p-2 flex gap-2">
              เงินได้พึ่งประเมินสุทธิ: <span className="text-red-400 font-bold">{income.toLocaleString()}</span> บาท
            </p>
            <p className="bg-pink-900 text-white rounded-md p-2 flex gap-2">
              ภาษี <span className="text-red-400 font-bold">{ptax * 100}%</span>
            </p>
            <p className="bg-pink-900 text-white rounded-md p-2 flex gap-2">
              ภาษีที่ต้องชำระ: <span className="text-red-400 font-bold">{(income * ptax).toLocaleString()}</span> บาท
            </p>
          </div>
        </div>

        <NavLink to="/">
          <button className="bg-pink-900 w-full p-4 mt-6 rounded-lg text-white hover:bg-blue-700 shadow-lg transition duration-200">
            ย้อนกลับ
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Results;
