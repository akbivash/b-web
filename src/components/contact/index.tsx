import React, { useEffect, useRef } from "react";
import { useState } from "react";
import SocialIcons from "../ui/SocialIcons";
import Typewriter from "../ui/Typewriter";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
const[success, setSuccess] = useState(false)

  const submitEmail = (e: any) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSending(true);
    emailjs
      .sendForm(
        "service_rzvqt8c",
        "template_t97xewf",
        form.current,
        "50CEIrsLqekiqlNi_"
      )
      .then((result) => {
        console.log(result.text);
        setIsSending(false);
        setSuccess(true)
        setTimeout(() => {
setSuccess(false)
        },3000)
      })
      .catch((err) => {
        console.log(err);
        setIsSending(false);
        setError(true)
      });
  };



  

  return (
    <>
      <div className="grid gap-sm md:gap-lg max-w-[1000px] mx-auto w-full">
        <div className="grid place-items-center ">
          <h1 className="text-3xl md:text-5xl font-bold">
            <Typewriter text="Let's talk with us!" />
          </h1>
        </div>

        <div className="grid  gap-md md:flex w-full  md:justify-around md:gap-20">
          <div className="grid h-fit gap-sm">
            <div className="grid gap-xs">
              {" "}
              <h2 className="font-bold text-xs text-blue-default ">
                Open Hours
              </h2>
              Mon - Fri: 9 am - 5 pm
            </div>
            <div className="w-fit grid gap-xs">
              <SocialIcons />
            </div>
          </div>
          <div className=" ">
            <h2 className="font-bold text-blue-default">LEAVE YOUR MESSAGE</h2>
            <form
              ref={form}
              action=""
              className="py-sm grid gap-xs "
              onSubmit={submitEmail}
            >
              <textarea
                placeholder="Type your message"
                name="user_message"
                required
                className="resize-none"
              />
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your name"
                minLength={4}
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your email"
              />
              <button
                className={ `${success ? 'bg-blue-dark' : 'bg-orange-default'}  p-xs text-white rounded-md disabled:opacity-50`}
                disabled={isSending}
                type="submit"
              >
            {success ? 'Successfully sent' : 'Send message'}
              </button>
              <p className="text-center">
                We usually respond in less than 30 minutes.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
