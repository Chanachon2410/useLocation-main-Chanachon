import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    <div className="bg-purple-400 flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
        <h1 className="text-center text-3xl bg-pink-900 text-white p-4 rounded-full shadow-lg mb-6">
          แบบฟอร์มคำนวณภาษีเงินได้
        </h1>

        <div className="bg-red-200 shadow-lg p-8 rounded-xl mt-6">
          <h2 className="text-center text-2xl bg-pink-900 text-white rounded-full p-3 mb-6">
            กรุณากรอกข้อมูล
          </h2>

          <form onSubmit={submitForm} className="space-y-6">
            <div className="flex flex-col">
              <label className="bg-pink-900 text-white text-lg py-2 px-4 rounded-full mb-2">เงินเดือน</label>
              <input
                className="border-pink-900 border-2 rounded-md text-center py-2 px-4 w-full"
                type="number"
                name="salary"
                id="salary"
                min="0"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="bg-pink-900 text-white text-lg py-2 px-4 rounded-full mb-2">โบนัส</label>
              <input
                className="border-pink-900 border-2 rounded-md text-center py-2 px-4 w-full"
                type="number"
                name="bonus"
                id="bonus"
                min="0"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="bg-pink-900 text-white text-lg py-2 px-4 rounded-full mb-2">ค่าประกันสังคม</label>
              <input
                className="border-pink-900 border-2 rounded-md text-center py-2 px-4 w-full"
                type="number"
                name="social"
                id="social"
                min="0"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="bg-pink-900 text-white text-lg py-2 px-4 rounded-full mb-2">จำนวนบุตร</label>
              <input
                className="border-pink-900 border-2 rounded-md text-center py-2 px-4 w-full"
                type="number"
                name="child"
                id="child"
                min="0"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="bg-pink-900 text-white text-lg py-2 px-4 rounded-full mb-2">ค่าเบี้ยประกันชีวิต</label>
              <input
                className="border-pink-900 border-2 rounded-md text-center py-2 px-4 w-full"
                type="number"
                name="lifeinsurance"
                id="lifeinsurance"
                min="0"
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="bg-pink-900 text-white text-xl py-3 rounded-full hover:bg-blue-700 transition duration-200 w-full"
              type="submit"
            >
              คำนวณ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormData;
