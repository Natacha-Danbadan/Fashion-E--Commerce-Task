function AboutHero({ aboutText }) {
  return (
    <div className=" flex items-end bg-[url('/public/aboutBG.svg')] h-72 bg-cover bg-no-repeat">
      <h2 className="font-['Lato'] font-medium text-4xl text-slate-50 align-bottom ml-16 mb-16">{aboutText}</h2>{" "}
    </div>
  );
}

export default AboutHero;
