function Hero() {
  return (
    <main className="h-[500px]">
      {/* Welcome Div */}
      <div className="flex flex-wrap justify-center items-center h-full md:gap-4 max-md:text-center">
        <div>
          <p className="font-['Caveat'] text-5xl">Welcome</p>
          <h1 className="font-['Poppins'] text-4xl">Best Learning</h1>
          <h1 className="font-['Poppins'] text-[36px]">Opportunities</h1>
          <p className="font-sans font-bold px-2 py-1">
            Our goal is to empower Sindhi students to study or work abroad.
          </p>
          <button className="m-1 bg-sky-700 text-white font-semibold px-2 rounded-sm">
            About Us
          </button>
          <button className="bg-sky-700 text-white font-semibold px-2 rounded-sm">
            Contact Us
          </button>
        </div>

        {/* Hero Section Image */}
        <div className="max-w-125">
          <img
            className="rounded-2xl"
            src="./src/assets/hero-image.jpg"
            alt="Hero Image"
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;
