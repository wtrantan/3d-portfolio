import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
// import { RobotCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";
// import { useBackgroundContext } from "../utils/background";
// import { gsap, ScrollTrigger} from "gsap/all";

const Contact = () => {

  // const {setCurrentBG} = useBackgroundContext()
  const contactRef = useRef(null)
  const textRef = useRef(null)

  const controls = useAnimation();
  useEffect(() => {
    controls.start("show");
  }, [controls]);
  // useEffect(() => {
  //   // gsap.registerPlugin(ScrollTrigger);

  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: contactRef.current,
  //       start: "+=200 70%",
  //       end: "+=00 60%",
  //       scrub: true,
  //       pinSpacing: false,
  //       onEnter: () => {
  //         setCurrentBG('#080e88');
  //         gsap.to(textRef.current, {
  //           color: '#282828',
  //           duration: 1
  //         })
  //       },
  //       onLeaveBack: () => {
  //         setCurrentBG('#1e0a55');
  //         gsap.to(textRef.current, {
  //           duration: 1
  //         })
  //       }
  //     }
  //   })
  // }, [])

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_34dk7qk",
        "template_ggogptn",
        {
          from_name: form.name,
          to_name: "William Trantan",
          from_email: form.email,
          to_email: "wtrantan@gmail.com",
          message: form.message,
        },
        "7KKJjd-98j00Q5EAz"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again. Or email directly me at wtrantan@gmail.com.");
        }
      );
  };

  return (
    <div
      ref={contactRef}
      className={`md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden`}
    >
       <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className='flex-[0.8] md:pb-40 mx-4 sm:mx-auto'
      >
        <h3 className={styles.sectionText}>Contact Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 gap-4 flex flex-col'
        >
           <span className='text-white font-medium mt-3'>Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <span className='text-white font-medium mt-3'>Email Address</span>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <span className='text-white font-medium mt-3'>Message</span>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary '
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");