import React, { useEffect, useState } from "react";

// Higher Order Component to inject window dimensions
const WithDimension = (WrappedComponent) => {
  return function WithDimensionComponent(props) {
    const [dimension, setDimension] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const handleResize = () => {
        setDimension({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Pass width and height as props to the wrapped component
    return <WrappedComponent {...props} {...dimension} />;
  };
};

export default WithDimension;
