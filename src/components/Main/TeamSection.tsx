import teamMember1Image from "../../assets/images/person3.png";
import teamMember2Image from "../../assets/images/person1.png";
import teamMember3Image from "../../assets/images/person2.png";

const TeamSection = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-col">
        <h3 className="font-medium text-lg text-[#EB5757]">Meet the team</h3>
        <h3 className="font-medium text-4xl text-[#333333] mt-2 max-w-[17.5rem]">
          We are chilled and a laidback team
        </h3>
        <p className="mt-4 max-w-[17rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex items-center gap-x-6">
        <img src={teamMember1Image} alt="" className="w-64 h-64 rounded-3xl" />

        <div className="flex flex-col gap-y-6">
          <img
            src={teamMember2Image}
            alt=""
            className="w-64 h-64 rounded-3xl"
          />
          <img
            src={teamMember3Image}
            alt=""
            className="w-64 h-64 rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
