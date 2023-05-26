import { useRef } from "react";
import Blog from "./Card/Blog";
import Pdf from "react-to-pdf";
import { Button } from "flowbite-react";

const Blogs = () => {
  const blogRef = useRef();
  return (
    <>
      <div className="bg-blog">
        <section className="container mx-auto px-4 flex flex-col justify-center items-center w-full banner-hight text-white text-center">
          <h1 className="md:text-6xl text-4xl uppercase font-bold mt-3 mb-2">
            Bologs
          </h1>
          <>
            <Pdf targetRef={blogRef} filename="blogs.pdf">
              {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
            </Pdf>
          </>
        </section>
      </div>

      <div ref={blogRef} className="max-w-3xl mx-auto px-4 py-8 ">
        <Blog
          question={
            "Tell us the differences between uncontrolled and controlled components?"
          }
          answere={
            "Uncontrolled components are those components where their state and behavior controlled by thir parent components and controlled components sate controlled by themself."
          }
        />
        <Blog
          question={"How to validate React props using PropTypes?"}
          answere={
            "Prop validation is important for avoiding bugs, the wey you can validate your prop without typescript to using PropType. PropTypes library provides lot of  validate  types of props such as array, boolean, function, number, object, string, and more. First you need to import PropTypes form 'prop-types'. To validate your prop you nedd to Write create a object object name must be same name of your components alog with a dot and then propTypes , and then inside the object the key name should be your prop name and the value will PropTypes dot the type of prop like string or number and you also use a aditional chain like isRequired. There is a exemple:"
          }
          code={`function MyComponent(props) {
  return <div>{props.name}</div>;}
    MyComponent.propTypes = {
      name: PropTypes.string.isRequired
    }`}
        />

        <Blog
          question={"Difference between nodejs and express js"}
          answere={
            "Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser and the Express.js is a framework that's built on top of Node.js and provides a set of features and tools for building backend applications and APIs"
          }
        />
        <Blog
          question={
            "What is a custom hook, and why will you create a custom hook?"
          }
          answere={
            "When we create a hook with our won functionality its call custom hook. There are so many benefits of using custom hook , you can use your hook all across the components, and you can only update your hook in one place. The common case to building custom hook to featch data."
          }
        />
      </div>
    </>
  );
};

export default Blogs;
