import LazyLoad from "react-lazyload";

const LazyLoads = ({ children }) => {
  return (
    <LazyLoad className="flex-basis" height={335}>
      {children}
    </LazyLoad>
  );
};

export default LazyLoads;
