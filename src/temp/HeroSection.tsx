import heroImage from "../assets/images/heroImage.jpg";

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

        <div className="flex flex-col gap-y-2">
          <p>Want us to contact you?</p>

          <form
            className="relative flex items-center overflow-hidden"
            onSubmit={(event) => event?.preventDefault()}
          >
            <input
              required
              type="email"
              name="email"
              id="email"
              className="bg-[#F2F2F2] rounded-xl py-4 pl-5 w-full"
              placeholder="Email"
            />

            <button
              type="submit"
              value="Join"
              className="bg-[#2D9CDB] text-white py-3 px-7 rounded-xl w-max absolute top-1 bottom-1 right-1 my-auto"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
