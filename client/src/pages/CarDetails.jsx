import React, { useEffect, useState } from"react";
import { useParams, useNavigate } from"react-router-dom";
import { assets, dummyCarData } from"../assets/assets";
import Loader from"../components/Loader";
import { API_URL, CURRENCY } from "../utils/api";

const CarDetails = () => {
 const { id } = useParams();
 const navigate = useNavigate();
 const [car, setCar] = useState(null);
 const [loading, setLoading] = useState(true);
 const [bookingLoading, setBookingLoading] = useState(false);
 const [message, setMessage] = useState("");
 const [pickupDate, setPickupDate] = useState("");
 const [returnDate, setReturnDate] = useState("");
 const currency = CURRENCY;  

useEffect(() => {
  fetchCarDetails();
 }, [id]);

const fetchCarDetails= async () => {
  try {
   setLoading(true);
 const response = await fetch(`${API_URL}/car/${id}`);
 const data = await response.json();
    
   if (data.success) {
     setCar(data.car);
   } else {
     setMessage("Car not found");
   }
  } catch (err) {
 console.error('Error fetching car:', err);
   // Fallback to dummy data
   setCar(dummyCarData.find((car) => car._id === id));
  } finally {
   setLoading(false);
  }
 };

const handleSubmit= async (e) => {
  e.preventDefault();
    
  // Check if user is logged in by checking token
 const token = localStorage.getItem('token');
  if (!token) {
    setMessage("Please login to book a car");
 return;
   }
    
  if (!pickupDate || !returnDate) {
    setMessage("Please select pickup and return dates");
 return;
   }
    
 const pickup = new Date(pickupDate);
 const returnD = new Date(returnDate);
    
  if (returnD <= pickup) {
    setMessage("Return date must be after pickup date");
 return;
   }
    
  try {
   setBookingLoading(true);
   setMessage("");
    
 console.log('=== STARTING BOOKING ===');
 console.log('Token:', token ? 'Present' : 'Missing');
 console.log('Car ID:', id);
 console.log('Pickup:', pickupDate);
 console.log('Return:', returnDate);
    
 const response = await fetch(`${API_URL}/user/booking`, {
 method: "POST",
 headers: {
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${token}`
   },
   body: JSON.stringify({
     carId: id,
     pickupDate: pickupDate,
   returnDate: returnDate
   })
 });
    
 console.log('Response status:', response.status);
    
 if (!response.ok) {
   throw new Error(`HTTP error! status: ${response.status}`);
 }
    
 const data = await response.json();
 console.log('Response data:', data);
    
   if (data.success) {
     setMessage("✅ Booking created successfully!");
     // Clear form
     setPickupDate("");
     setReturnDate("");
     setTimeout(() => {
       navigate("/my-bookings");
     }, 2000);
   } else {
     setMessage("❌ " + (data.message || "Booking failed"));
   }
  } catch (err) {
 console.error('Booking error:', err);
   setMessage("❌ Network error: " + err.message);
  } finally {
   setBookingLoading(false);
  }
 };

 return loading ? (
  <Loader/>
 ) : car ? (
  <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16 bg-linear-to-b from-white to-red-50 min-h-screen">
    <button
     onClick={() => navigate(-1)}
   className="flex items-center gap-2 text-gray-600 cursor-pointer mb-6 font-bold hover:text-primary transition"
    >
      <img src={assets.arrow_icon} alt="" className="rotate-180 opacity-70 w-5 h-5" />
      ← Back to all cars
    </button>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Left : car image and details */}
      <div className="lg:col-span-2">
        <img
         src={car.image}
         alt={`${car.brand} ${car.model}`}
       className="w-full h-auto md:max-h-100 object-cover rounded-2xl mb-6 shadow-2xl border-4 border-red-100"
        />
        <div className="space-y-8">
          <div className="bg-linear-to-r from-red-50 to-orange-50 p-6 rounded-2xl border-2 border-red-200">
            <h1 className="text-4xl font-bold text-gray-900">
              {car.brand} <span className="text-primary">{car.model}</span>
            </h1>
            <p className="text-gray-600 text-lg font-semibold mt-2">{car.category} • {car.year}</p>
          </div>
          <hr className="border-red-200 border-2"/>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              {icon:assets.users_icon,text:`${car.seating_capacity} Seats`},
              {icon:assets.fuel_icon,text:`${car.fuel_type}`},
              {icon:assets.location_icon,text:`${car.location}`},
            ].map(({icon,text})=>(
              <div  key={text} className="flex flex-col items-center bg-linear-to-br from-red-100 to-orange-100 p-4 rounded-2xl gap-3 border-2 border-red-200 hover:shadow-lg transition">
                <img src={icon} alt={text} className="h-5 mb-1"/>
                <span className="font-bold text-gray-800 text-center text-sm">{text}</span>
              </div>
            ))}
          </div>
          
          {/* description */}
          <div>
            <h1 className="text-sxl font-medium mb-3">
              Description
            </h1>
            <p className="text-gray-600">{car.description}</p>
          </div>
          
          {/* features */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {
                ["360 Camera","Bluetooth","Backup Camera","Cruise Control","Heated Seats","Keyless Entry","Leather Seats","Navigation System","Remote Start","Sunroof","USB Port"].map((feature)=>(
                  <li key={feature} className="flex items-center bg-red-50 p-3 rounded-lg border-2 border-red-100 font-semibold text-gray-800 hover:border-red-300 transition">
                    <img src={assets.check_icon} alt="check" className="h-5 mr-3 text-green-500"/>
                    {feature}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

      {/* Right : booking form */}
      <form onSubmit={handleSubmit} className="shadow-2xl h-max sticky top-20 rounded-2xl p-8 space-y-6 text-gray-700 bg-linear-to-b from-white to-red-50 border-3 border-red-200">
        <p className="flex items-center justify-between text-3xl font-bold bg-linear-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
         {currency}{car.pricePerDay}{" "}
         <span className="text-sm text-gray-500 font-semibold"> per day</span>
        </p>
        <hr className="border-red-200 border-2" />
        
        {message && (
         <p className={`text-sm text-center p-3 rounded-lg font-semibold border-2 ${
         message.includes('✅') ? 'bg-green-100 text-green-700 border-green-300' : 
         message.includes('❌') ? 'bg-red-100 text-red-700 border-red-300' : 
           'bg-yellow-100 text-yellow-700 border-yellow-300'
         }`}>
           {message}
         </p>
        )}
        
        <div className="flex flex-col gap-3">
          <label htmlFor="pickup-date" className="font-bold text-gray-900">📅 Pickup Date</label>
          <input
           type="date"
           value={pickupDate}
           onChange={(e) => setPickupDate(e.target.value)}
         className="border-2 border-red-200 hover:border-red-300 focus:border-primary px-4 py-3 rounded-lg font-semibold focus:outline-none transition"
           id="pickup-date"
           min={new Date().toISOString().split('T')[0]}
       required
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="return-date" className="font-bold text-gray-900">📅 Return Date</label>
          <input
           type="date"
           value={returnDate}
           onChange={(e) => setReturnDate(e.target.value)}
         className="border-2 border-red-200 hover:border-red-300 focus:border-primary px-4 py-3 rounded-lg font-semibold focus:outline-none transition"
           id="return-date"
           min={pickupDate || new Date().toISOString().split('T')[0]}
       required
          />
        </div>

        <button
         type="submit"
         disabled={bookingLoading}
         className="w-full bg-linear-to-r from-primary to-primary-dull hover:shadow-lg transition-all py-4 font-bold text-white rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform hover:scale-105"
        >
          {bookingLoading ? "⏳ Processing..." : "✨ Book Now"}
        </button>
        <p className="text-center text-sm font-semibold text-gray-600">💳 No credit card required to reserve</p>
      </form>
    </div>
  </div>
 ) : (
  <div className="text-center py-20">
    <p className="text-gray-500">Car not found</p>
    <button
     onClick={() => navigate("/cars")}
   className="mt-4 text-primary hover:underline"
    >
      Browse available cars
    </button>
  </div>
 );
};

export default CarDetails;
