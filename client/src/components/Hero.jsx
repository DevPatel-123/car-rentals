import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [pickupLocation, setpickupLocation] = useState("");  const [pickupDate, setPickupDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!pickupLocation || !pickupDate) return;
    // navigate to cars page with query params
    navigate(`/cars?location=${encodeURIComponent(pickupLocation)}&date=${pickupDate}`);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10 bg-gradient-to-br from-red-50 via-orange-50 to-red-100 text-center">
      <div className="flex flex-col items-center gap-2">
        <span className="text-accent text-lg font-semibold tracking-widest">PREMIUM EXPERIENCE</span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Rent Your Dream<br/>Luxury Car Today
        </h1>
        <p className="text-gray-600 text-lg mt-2 max-w-2xl">Experience luxury at your fingertips. Choose from our exclusive collection of premium vehicles</p>
      </div>

      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-center justify-center p-6 rounded-2xl md:rounded-full w-full max-w-80 md:max-w-250 bg-white shadow-[0px_20px_40px_rgba(220,38,38,0.15)]"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex flex-col items-start gap-1">
            <select
              required
              value={pickupLocation}
              onChange={(e) => setpickupLocation(e.target.value)}
            >
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="px-1 text-sm text-gray-500">
              {pickupLocation ? pickupLocation : "Please select location"}
            </p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="pickup-date" className="text-sm">
              Pick-up Date
            </label>
            <input
              type="date"
              id="pickup-date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-1 px-8 py-3 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <img
              src={assets.search_icon}
              alt="Search"
              className="brightness-300 w-4 h-4"
            />
            Search Now
          </button>
        </div>
      </form>

      <img src={assets.main_car} alt="Car" className="max-h-74" />
    </div>
  );
};

export default Hero;
