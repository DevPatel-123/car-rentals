import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/car-details/${car._id}`);
        scrollTo(0, 0);
      }}
      className="group rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-white hover:-translate-y-2 transition-all duration-500 border border-red-100 hover:border-red-300"
    >
      <div className="relative h-56 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {car.isAvailable && (
          <p className="absolute top-3 right-3 bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
            ✓ Available
          </p>
        )}
        <div className="absolute bottom-3 left-3 bg-linear-to-r from-primary to-primary-dull backdrop-blur-md text-white px-4 py-3 rounded-xl z-10 shadow-lg">
          <span className="text-lg font-bold">
            {currency}
            {car.pricePerDay}
          </span>
          <span className="text-xs text-white/90 block">per day</span>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {car.brand} <span className="text-primary">{car.model}</span>
            </h3>
            <p className="text-gray-500 text-sm font-medium mt-1">
              {car.year} • {car.category}
            </p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center text-xs font-semibold text-gray-700">
            <img
              src={assets.users_icon}
              alt="Seating Capacity"
              className="h-5 mr-2"
            />
            <span>{car.seating_capacity} Seats</span>
          </div>
          <div className="flex items-center text-xs font-semibold text-gray-700">
            <img src={assets.fuel_icon} alt="Fuel Type" className="h-5 mr-2" />
            <span>{car.fuel_type}</span>
          </div>
          <div className="flex items-center text-xs font-semibold text-gray-700">
            <img
              src={assets.car_icon}
              alt="Transmission Type"
              className="h-5 mr-2"
            />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center text-xs font-semibold text-gray-700">
            <img
              src={assets.location_icon}
              alt="Pickup Location"
              className="h-5 mr-2"
            />
            <span>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
