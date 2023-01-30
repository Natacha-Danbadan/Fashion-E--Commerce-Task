

function ContactHero({contactText}) {
  return (
    <div className=" flex items-end bg-[url('/public/contactBG.svg')] h-72 bg-cover bg-no-repeat">
      <h2 className="font-['Lato'] font-medium text-4xl text-slate-50 align-bottom ml-16 mb-16">{contactText}</h2>{" "}
    </div>
  );
}

export default ContactHero;
