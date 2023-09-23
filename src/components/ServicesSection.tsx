import codeIcon from "../assets/icons/code.svg";
import pencilIcon from "../assets/icons/edit.svg";
import storageIcon from "../assets/icons/storage.svg";

const cardItems = [
  {
    icon: { image: pencilIcon, backgroundFill: "#2D9CDB", alt: "edit icon" },
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
  },
  {
    icon: { image: codeIcon, backgroundFill: "#27AE60", alt: "code icon" },
    title: "Front End",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
  },
  {
    icon: {
      image: storageIcon,
      backgroundFill: "#EB5757",
      alt: "storage icon",
    },
    title: "Back End",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
  },
];

const ServicesSection = () => {
  return (
    <section className="flex flex-col gap-y-11">
      <h3 className="text-4xl font-medium max-w-[22rem]">
        We offer high demand services
      </h3>

      <div className="flex items-center justify-between">
        {cardItems.map(
          ({ icon: { backgroundFill, alt, image }, title, description }) => (
            <div key={title} className="px-8 py-11 rounded-3xl">
              <div className="flex flex-col">
                <div
                  className={`mb-9 w-16 h-16 flex flex-col items-center justify-center rounded-2xl`}
                  style={{ backgroundColor: backgroundFill }}
                >
                  <img src={image} alt={alt} />
                </div>

                <h4 className="mb-6 font-bold text-[#333333] text-2xl">
                  {title}
                </h4>

                <p className="mb-7 max-w-[17rem] text-[#4F4F4F]">
                  {description}
                </p>

                <button className="px-4 py-3 bg-[#E0E0E0] font-medium text-[#828282] w-max rounded-xl">
                  Get Started
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
