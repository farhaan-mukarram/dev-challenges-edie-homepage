import rightArrow from "../../assets/icons/arrow.svg";

import bookingSystemImage from "../../assets/images/booking.png";
import juiceProductImage from "../../assets/images/juice-product.png";
import smartHomeImage from "../../assets/images/smarthome.jpg";
import onboardingImage from "../../assets/images/onboard.png";

const portFolioItems = [
  {
    image: smartHomeImage,
    alt: "smart home dashboard project image",
    title: "Smart home dashboard",
    subtitle: "Full stack application",
  },
  {
    image: onboardingImage,
    alt: "onboarding project image",
    title: "Onboard application",
    subtitle: "UX/UI design",
  },
  {
    image: bookingSystemImage,
    alt: "booking system project image",
    title: "Booking system",
    subtitle: "Mobile application",
  },
  {
    image: juiceProductImage,
    alt: "juice product homepage project image",
    title: "Juice product homepage",
    subtitle: "Front End application",
  },
];

const PortfolioSection = () => {
  return (
    <section className="flex flex-col space-y-3">
      <h3 className="max-w-md text-4xl font-medium">
        Good design means good business
      </h3>

      {/* Projects grid */}
      <div className="flex flex-col pb-[400px]">
        <div className="flex flex-wrap justify-between gap-y-36">
          {portFolioItems.map(({ image, title, subtitle, alt }) => (
            <div
              key={title}
              className="flex flex-col basis-1/2 max-w-[34rem] [&:nth-of-type(odd)]:relative [&:nth-of-type(odd)]:top-40 space-y-8"
            >
              <img src={image} alt={alt} className="rounded-3xl" />

              <div className="flex flex-col space-y-3">
                <p className="font-light text-sm text-[#828282]">{subtitle}</p>
                <h4 className="text-2xl font-medium text-[#333333]">{title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="ml-auto mt-36">
          <a
            href="#"
            className="text-[#2D9CDB] font-medium text-2xl flex items-center hover:underline"
          >
            see more
            <img src={rightArrow} alt="see more arrow icon" className="ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
