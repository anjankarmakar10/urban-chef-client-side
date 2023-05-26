import { Accordion } from "flowbite-react";
import data from "./data";

Accordion;

const FAQ = () => {
  return (
    <section id="ourchefs" className="container mx-auto px-4 py-12">
      <h2 className="text-center text-white font-bold md:text-2xl text-xl uppercase bg-[#222] py-4 px-6 w-fit mx-auto mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-5xl mx-auto">
        <Accordion collapseAll={true}>
          {data?.map((item) => (
            <Accordion.Panel key={item?.id}>
              <Accordion.Title>{item?.question}</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {item?.answer}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
