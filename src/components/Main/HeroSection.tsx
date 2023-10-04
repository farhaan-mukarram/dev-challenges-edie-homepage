import heroImage from "../../assets/images/heroImage.jpg";
import ContactForm from "../ContactForm";

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-y-11">
      <div className="flex flex-col ml-56 gap-y-4">
        <p className="text-[#2D9CDB] font-medium text-lg">
          Unhappy with your website?
        </p>

        <h2 className="font-medium text-5xl max-w-[34rem] text-[#333333] leading-normal">
          We create beautiful and fast web services
        </h2>
      </div>

      <img
        src={heroImage}
        alt="hero section image"
        className="rounded-[1.125rem]"
      />

      <div className="max-w-[23rem] flex flex-col gap-y-11 ml-56">
        <h2 className="font-medium text-5xl text-[#333333] leading-normal">
          Story, emotion and purpose
        </h2>

        <p className="text-[#4F4F4F] text-lg">
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </p>

        <ContactForm />
      </div>
    </section>
  );
};

export default HeroSection;
