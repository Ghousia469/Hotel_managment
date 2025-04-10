
import chef1 from "../assets/chef1.jpg"; // Import Chef 1 image
import chef2 from "../assets/chef2.jpg"; // Import Chef 2 image
import chef3 from "../assets/chef3.jpg"; // Import Chef 3 image
import restaurant1 from "../assets/restaurant1.jpg"; // Restaurant Image 1
import restaurant2 from "../assets/restaurant2.jpg"; // Restaurant Image 2
import restaurant3 from "../assets/restaurant3.jpg"; // Restaurant Image 3
import restaurant4 from "../assets/restaurant4.jpg"; //
import restaurant5 from "../assets/restaurant5.jpg"; //
import restaurant6 from "../assets/restaurant6.jpg"; //
import backgroundVideo from "../assets/backgroundd.mp4";
import lunch1 from "../assets/images/lunch-1.jpg";
import breakfast1 from "../assets/images/breakfast-1.jpg";
import dinner1 from '../assets/images/dinner-1.jpg';
import restaurantLocation from '../assets/location.jpg';
const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen flex items-center justify-start">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-white p-8 md:p-16 lg:w-1/2">
          <h1 className="text-5xl font-extrabold leading-tight">
            Fine Dining Experience
          </h1>
          <p className="text-lg mt-4 font-light">
            Indulge in a luxurious dining experience with exquisite dishes, a
            perfect blend of flavors, and a warm atmosphere that makes every
            meal memorable.
          </p>
        </div>
      </div>

   
      <section className="bg-cover bg-center py-20 px-6" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/cutlery-near-twig-leaves_23-2147811214.jpg?t=st=1733048961~exp=1733052561~hmac=456f3511ff5803403601f6021dc03c78ae5b253b5bd6086b8785c67f7ae8798c&w=826')` }}>
      <div className="container mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        
        <div className="flex flex-wrap justify-center mb-16">
          {/* Breakfast Menu */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-black bg-opacity-40 p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-[#DCCA87] mb-4">Breakfast</h3>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-32 h-32 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${breakfast1})` }}
                ></div>
                <div className="text">
                  <h3 className="text-lg font-semibold text-[#DCCA87] mb-2">Beef Roast Source</h3>
                  <p className="text-sm text-gray-400 mb-1">
                    <span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomato</span>
                  </p>
                  <span className="text-lg text-gray-300 font-bold">Rs 290</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lunch Menu */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-black bg-opacity-40 p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-[#DCCA87] mb-4">Lunch</h3>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-32 h-32 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${lunch1})` }}
                ></div>
                <div className="text">
                  <h3 className="text-lg font-semibold text-[#DCCA87] mb-2">Beef Roast Source</h3>
                  <p className="text-sm text-gray-400 mb-1">
                    <span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomato</span>
                  </p>
                  <span className="text-lg text-gray-300 font-bold">Rs 600</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dinner Menu */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-black bg-opacity-40 p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-[#DCCA87] mb-4">Dinner</h3>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-32 h-32 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${dinner1})` }}
                ></div>
                <div className="text">
                  <h3 className="text-lg font-semibold text-[#DCCA87] mb-2">Beef Roast Source</h3>
                  <p className="text-sm text-gray-400 mb-1">
                    <span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomato</span>
                  </p>
                  <span className="text-lg text-gray-300 font-bold">Rs 709</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dishes */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#DCCA87] border-b border-gray-600 pb-2 mb-6 text-center">
            Main Dishes
          </h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span>Butter Chicken</span>
              <span className="text-gray-400">Rs 450</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Paneer Masala</span>
              <span className="text-gray-400">Rs 400</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Grilled Fish</span>
              <span className="text-gray-400">Rs 550</span>
            </li>
          </ul>
        </div>

        {/* Starters */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#DCCA87] border-b border-gray-600 pb-2 mb-6 text-center">
            Starters
          </h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span>Spring Rolls</span>
              <span className="text-gray-400">Rs 200</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Chicken Wings</span>
              <span className="text-gray-400">Rs 250</span>
            </li>
          </ul>
        </div>

        {/* Desserts */}
        <div>
          <h3 className="text-2xl font-semibold text-[#DCCA87] border-b border-gray-600 pb-2 mb-6 text-center">
            Desserts
          </h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span>Chocolate Lava Cake</span>
              <span className="text-gray-400">Rs 300</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Gulab Jamun</span>
              <span className="text-gray-400">Rs 150</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Chef Section */}
<section className="py-20 bg-grey-100">
  <div className="container mx-auto">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-center mb-12">Meet Our Chefs</h2>

    {/* Chef Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Chef 1 */}
      <div className="text-center bg-black p-6 shadow-lg rounded-lg flex flex-col items-center">
        <img
          src={chef1}
          alt="Chef 1"
          className="w-48 h-48 object-cover rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold">Chef Marcus</h3>
        <p className="text-grey-600 mt-2">
          A specialist in Italian cuisine, Chef Marcus brings authentic flavors from Italy to your table.
        </p>
      </div>

      {/* Chef 2 */}
      <div className="text-center bg-black p-6 shadow-lg rounded-lg flex flex-col items-center">
        <img
          src={chef2}
          alt="Chef 2"
          className="w-48 h-48 object-cover rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold">Chef Mei Ling</h3>
        <p className="text-grey-600 mt-2">
          With mastery in Chinese dishes, Chef Mei Ling delivers bold and unforgettable flavors.
        </p>
      </div>

      {/* Chef 3 */}
      <div className="text-center bg-black p-6 shadow-lg rounded-lg flex flex-col items-center">
        <img
          src={chef3}
          alt="Chef 3"
          className="w-48 h-48 object-cover rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold">Chef Arjun</h3>
        <p className="text-grey-600 mt-2">
          Known for his expertise in desi foods, Chef Arjun serves rich and flavorful seafood specialties.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Location and Opening Hours Section */}
<div className="py-20 px-4 bg-black">
  <h2 className="text-4xl font-bold text-center mb-12">Find Us</h2>
  <div className="flex flex-col lg:flex-row items-center gap-8">
    {/* Image Section */}
    <div className="flex-1">
      <img
        src={restaurantLocation}
        alt="Restaurant Location"
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* Address and Opening Hours */}
    <div className="flex-1 bg-grey-100 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Visit Our Restaurant</h3>
      {/* Address */}
      <p className="text-grey-600 mb-6">
        <strong>Address:</strong> 123 Foodie Street, Culinary City, Country.
      </p>
      {/* Opening Hours */}
      <h4 className="text-xl font-semibold mb-4">Opening Hours</h4>
      <ul className="text-grey-600">
        <li className="mb-2">
          <strong>Monday - Friday:</strong> 9:00 AM - 10:00 PM
        </li>
        <li className="mb-2">
          <strong>Saturday:</strong> 10:00 AM - 11:00 PM
        </li>
        <li className="mb-2">
          <strong>Sunday:</strong> Closed
        </li>
        <li className="mb-2">
          <strong>Special Holidays:</strong> 11:00 AM - 8:00 PM
        </li>
      </ul>
    </div>
  </div>
</div>

      {/* Gallery Section (Newly Aligned) */}
<div className="py-20 px-4 bg-grey-100">
  <h2 className="text-4xl font-bold text-center mb-12">Moments From Table</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Gallery Images */}
    <div className="text-center">
      <img
        src={restaurant1}
        alt="Restaurant Interior 1"
        className="w-full h-72 object-cover rounded-lg shadow-lg"
      />
    </div>
    <div className="text-center">
      <img
        src={restaurant2}
        alt="Restaurant Interior 2"
        className="w-full h-72 object-cover rounded-lg shadow-lg"
      />
    </div>
    <div className="text-center">
      <img
        src={restaurant3}
        alt="Restaurant Interior 3"
        className="w-full h-72 object-cover rounded-lg shadow-lg"
      />
    </div>
    <div className="text-center">
      <img
        src={restaurant4}
        alt="Restaurant Interior 4"
        className="w-full h-72 object-cover rounded-lg shadow-lg"
      />
    </div>
    <div className="text-center">
      <img
        src={restaurant5}
        alt="Restaurant Interior 5"
        className="w-full h-72 object-cover rounded-lg shadow-lg"
      />
    </div>
    <div className="text-center">
      <img
        src={restaurant6}
        alt="Restaurant Interior 6"
        className="w-full h-72 object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>
</div>

    
  );
};

export default HeroSection;
