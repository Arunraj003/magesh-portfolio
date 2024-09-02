import Image from "next/image";

const Homepage = () => {
  return <div className="h-full flex flex-col lg:flex-row 
  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* image */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image src="/hero.png" alt="hero"
        className="object-contain" fill />
    </div>
    {/* text */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex
     flex-col gap-8 items-center justify-center">
      {/* title  */}
      <h1 className="text-4xl md:text-6xl font-bold">
        Crafting Your Bussiness into Next Level
      </h1>
      {/* desc  */}
      <p className="md:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto assumenda autem reiciendis reprehenderit voluptate vel, incidunt quo animi.</p>

      {/* button  */}
      <div className="flex gap-4">
        <button
          className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work
        </button>
        <button
          className="p-4 rounded-lg ring-1 ring-black">
          Contact
        </button>
      </div>
    </div>
  </div>;
};

export default Homepage;
