import teamMember1Image from "../../assets/images/person3.png";
import teamMember2Image from "../../assets/images/person1.png";
import teamMember3Image from "../../assets/images/person2.png";

const TeamSection = () => {
  return (
    <section className="flex flex-col items-center justify-between lg:flex-row gap-y-9">
      <div className="flex flex-col">
        <h3 className="font-medium text-sm lg:text-lg text-[#EB5757]">
          Meet the team
        </h3>
        <h3 className="font-medium text-2xl lg:text-4xl text-[#333333] mt-2 max-w-[17.5rem]">
          We are chilled and a laidback team
        </h3>
        <p className="text-xs lg:text-base mt-4 max-w-[17rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex items-center gap-x-2 lg:gap-x-6">
        <img
          src={teamMember1Image}
          alt="team member 1 image"
          className="w-36 h-36 lg:w-64 lg:h-64 rounded-3xl"
        />

        <div className="flex flex-col gap-y-6">
          <img
            src={teamMember2Image}
            alt="team member 2 image"
            className="w-36 h-36 lg:w-64 lg:h-64 rounded-3xl"
          />
          <img
            src={teamMember3Image}
            alt="team member 3 image"
            className="w-36 h-36 lg:w-64 lg:h-64 rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
