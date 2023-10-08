import testimonialImage from "../../assets/images/person4.png";

const TestimonialSection = () => {
  return (
    <section className="flex flex-col gap-y-7 lg:gap-y-11 max-w-[60rem]">
      <h3 className="font-medium text-2xl lg:text-4xl text-[#333333]">
        "Fast and outstanding results. Edie understands their customer’s needs.
        They have a young and talented team."
      </h3>

      <div className="flex items-center gap-x-8">
        <img
          src={testimonialImage}
          alt="Carlos Tran testimonial image"
          className="w-20 h-20 rounded-xl"
        />

        <div className="flex flex-col space-y-3">
          <h4 className="font-medium text-lg text-[#313131]">Carlos Tran</h4>
          <p className="font-medium text-lg text-[#828282]">
            The Decorate Gatsby
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
