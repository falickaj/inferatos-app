import { useForm } from "react-hook-form";
import ErrorMessage from "react-hook-form";

export default function ContactForm() {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }
  return (
    <form
      className="flex flex-col gap-7 md:gap-12 px-6"
      method="post"
      onSubmit={handleOnSubmit}
    >
      <div>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col text-left w-full">
            <label htmlFor="fullName" className="text-xl mb-3">
              Name *
            </label>
            <input
              className="bg-gray px-5 md:px-7 py-4 md:py-6 rounded-xl placeholder-dark text-lg md:text-xl"
              type="text"
              id="fullName"
              aria-describedby="fullName"
              name="fullName"
              placeholder="Your name"
              required
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-between gap-7 md:gap-10">
          <div className="flex flex-col text-left w-full">
            <label htmlFor="email" className="text-xl mb-3">
              Email *
            </label>
            <input
              className="bg-gray px-5 md:px-7 py-4 md:py-6 rounded-xl placeholder-dark text-lg md:text-xl"
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="flex flex-col text-left w-full">
            <label htmlFor="phone" className="text-xl mb-3">
              Phone
            </label>
            <input
              className="bg-gray px-5 md:px-7 py-4 md:py-6 rounded-xl placeholder-dark text-lg md:text-xl"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-left w-full">
        <label htmlFor="message" className="text-xl mb-3">
          Message *
        </label>
        <textarea
          className="bg-gray px-5 md:px-7 py-4 md:py-6 rounded-xl placeholder-dark text-lg md:text-xl"
          id="message"
          name="message"
          placeholder="Enter your message"
          rows="5"
          required
        />
      </div>
      <div className="flex gap-10 flex-col-reverse items-center md:flex-row md:justify-between">
        {/* <Button primary filled text="Send message" href="/" /> */}
        <button className="bg-primary neon px-16 py-5 text-dark text-xl rounded-3xl hover:bg-primary/90">
          Send Message
        </button>
        <p className="text-sm text-center md:text-left md:text-xl">
          I agree that my submitted data is collected and stored.
        </p>
      </div>
    </form>
  );
}
