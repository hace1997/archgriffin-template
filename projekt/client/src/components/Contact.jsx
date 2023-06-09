import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-28"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-red-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Submit the form below</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[ccd6f6] p-2"
        ></input>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[ccd6f6]"
        ></input>
        <textarea
          placeholder="Message"
          name="message"
          rows="10"
          className="bg-[ccd6f6] p-2"
        ></textarea>
        <button className="text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
