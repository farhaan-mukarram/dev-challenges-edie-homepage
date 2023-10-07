import { FunctionComponent } from "react";

interface Props {
  textColor?: string;
}
const ContactForm: FunctionComponent<Props> = ({ textColor }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className={`${textColor ?? "text-white"}`}>Want us to contact you?</p>

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
  );
};

export default ContactForm;
