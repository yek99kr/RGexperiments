import AboutDropDown from "./AboutDropDown";

const About = () => {
  const madWords1 = ["industry leading", "plant based", "future proof"];
  const madWords2 = ["exploring", "inspiring", "navigating"];
  const madWords3 = ["intersection", "relationship", "language"];
  const madWords4 = ["art", "computers", "commerce"];
  const madWords5 = ["technology", "instagram", "biodiversity"];
  const madWords6 = ["make", "produce", "influence"];
  const madWords7 = ["things", "art", "AR experiences"];
  const madWords8 = ["animations", "cool vids", "memes"];
  const madWords9 = ["clients", "humans", "brand partners"];
  const madWords10 = ["inspire", "visualize", "live"];
  const madWords11 = ["educate", "laugh", "communicate"];
  const madWords12 = ["convert", "emote", "love"];

  return (
    <div className="w-[50%] m-auto pt-10">
      <p className="font-[400] text-[1.2em] leading-[1.8] pt-2 pr-3 pl-6 text-center ">
        We&apos;re Real Good. We&apos;re a{" "}
        <AboutDropDown madWords={madWords1} /> creative studio{" "}
        <AboutDropDown madWords={madWords2} /> the{" "}
        <AboutDropDown madWords={madWords3} /> between{" "}
        <AboutDropDown madWords={madWords4} /> and{" "}
        <AboutDropDown madWords={madWords5} />. We{" "}
        <AboutDropDown madWords={madWords6} />{" "}
        <AboutDropDown madWords={madWords7} /> and{" "}
        <AboutDropDown madWords={madWords8} /> for{" "}
        <AboutDropDown madWords={madWords9} /> that{" "}
        <AboutDropDown madWords={madWords10} />,{" "}
        <AboutDropDown madWords={madWords11} />, and{" "}
        <AboutDropDown madWords={madWords12} />.
      </p>
    </div>
  );
};

export default About;
