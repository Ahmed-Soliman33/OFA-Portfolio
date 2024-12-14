import "./css/contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../animation/done.json";
import contactAnimation from "../animation/contact.json";

const Contact = ({ contactRef }) => {
  const [state, handleSubmit] = useForm("xrbgvwwj");
  return (
    <section
      ref={contactRef}
      className="contact-us m-auto mt-20 w-[80%]"
      id="contact"
    >
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact me
      </h1>
      <p className="sub-title">
        Contact me for more information and Get notified when I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="submit !pr-[90px] md:!pr-[40px]"
          >
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

          {state.succeeded ? (
            <p
              className="contact-message flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          ) : (
            ""
          )}
        </form>
        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 355, marginTop: -50 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
