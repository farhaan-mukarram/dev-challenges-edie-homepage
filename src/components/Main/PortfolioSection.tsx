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
    <section className="flex flex-col gap-y-11 lg:gap-y-3">
      <h3 className="font-medium max-w-[17rem] lg:max-w-md text-2-xl lg:text-4xl mx-auto">
        Good design means good business
      </h3>

      {/* Projects grid */}
      <div className="flex flex-col">
        <div className="flex flex-col justify-between lg:flex-row lg:flex-wrap gap-y-9 lg:gap-y-36">
          {portFolioItems.map(({ image, title, subtitle, alt }) => (
            <div
              key={title}
              className="flex flex-col lg:basis-1/2 lg:max-w-[34rem] lg:[&:nth-of-type(odd)]:relative lg:[&:nth-of-type(odd)]:top-40 gap-y-3 lg:gap-y-8"
            >
              <img src={image} alt={alt} className="rounded-3xl" />

              <div className="flex flex-col gap-y-1 lg:gap-y-3">
                <p className="font-light text-xs lg:text-sm text-[#828282]">
                  {subtitle}
                </p>
                <h4 className="text-lg lg:text-2xl font-medium text-[#333333]">
                  {title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 lg:ml-auto lg:mt-36">
          <a
            href="#"
            className="text-[#2D9CDB] font-medium text-lg lg:text-2xl flex items-center hover:underline"
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
