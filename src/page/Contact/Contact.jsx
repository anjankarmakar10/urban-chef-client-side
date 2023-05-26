import Banner from "../../components/Banner/Banner";

const Contact = () => {
  return (
    <>
      <Banner bgClass={"bg-contact"} title={"Contact us"} />
      <div
        id="contact"
        className="section relative py-14 bg-white dark:bg-gray-800"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap flex-row -mx-4 justify-center">
            <div className="max-w-ful px-4 w-full lg:w-8/12">
              <div className="bg-gray-50 border-b border-gray-100 w-full p-12">
                <header className="text-center mx-auto mb-12 lg:px-20">
                  <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 ">
                    <span className="font-light">Contact</span> Us
                  </h2>

                  <p className="text-gray-600 leading-relaxed font-light text-xl mx-auto pb-2">
                    Have questions about service, please contact us.
                  </p>
                </header>

                <form action="#">
                  <div className="flex flex-wrap flex-row -mx-4">
                    <div className="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                      <label className="inline-block mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 "
                        id="name"
                      />
                    </div>
                    <div className="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                      <label className="inline-block mb-2">Your Email</label>
                      <input
                        type="email"
                        className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 "
                        name="email"
                        id="email"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="inline-block mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 "
                      name="subject"
                      id="subject"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="inline-block mb-2">Message</label>
                    <textarea
                      className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 "
                      name="message"
                      rows="10"
                      id="messages"
                    ></textarea>
                  </div>
                  <div className="text-center mb-6">
                    <a
                      className="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border border-black hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
                      href="#project"
                    >
                      Send message
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
