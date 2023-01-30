function HomeHero({ heroText, heroBtnText }) {
  return (
    <div className=" flex justify-between items-center bg-[url('/public/heroBG.svg')] bg-cover h-96 bg-no-repeat">
      <div></div>

      <div className="mr-24 ml-104 flex items-center flex-col  ">
        <h2 className="font-['Lato'] font-extrabold text-5xl text-slate-50 text-center mb-12 w-[95%]">
          {heroText}
        </h2>
        <button className="bg-transparent border-slate-50 rounded-none border-4 btn">
          {heroBtnText}
        </button>
      </div>
    </div>
  );
}

export default HomeHero;
