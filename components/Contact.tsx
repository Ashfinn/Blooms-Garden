import React from 'react';

const Contact = () => {
  return (
    <div className="my-10 p-6 bg-base-100 rounded-lg shadow-md animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form className="max-w-lg mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email" className="input input-bordered" />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea placeholder="Your Message" className="textarea textarea-bordered h-24"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary w-full">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
