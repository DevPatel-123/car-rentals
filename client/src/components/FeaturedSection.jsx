import React, { useState, useEffect } from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import CarCard from "./CarCard";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/api";

const FeaturedSection = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedCars();
  }, []);

  const fetchFeaturedCars = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/car/`);
      const data = await response.json();
      
      if (data.success) {
        // Get first 6 available cars
        setCars(data.cars.slice(0, 6));
      }
    } catch (error) {
      console.error("Error fetching featured cars:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-white to-red-50">
      <div>
        <Title
          title="Premium Vehicle Collection"
          subTitle="Handpicked luxury cars curated just for you. Drive premium, live the experience."
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-500 text-lg">Loading premium vehicles...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 w-full">
          {cars.map((car) => (
            <div key={car._id}>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => {
          navigate("/cars");
          scrollTo(0, 0);
        }}
        className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full mt-20 cursor-pointer transition-all transform hover:scale-105 shadow-lg"
      >
        View All Vehicles <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FeaturedSection;
