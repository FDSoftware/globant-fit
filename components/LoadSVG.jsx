import React, { useState, useEffect } from "react";

export const LoadSVG = ({
  url,
  handleClick,
  handleError,
  LoadingComponent,
}) => {
  const [svg, setSvg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const txt = await response.text();
        if (response.status === 200) {
          setSvg(txt);
        } else {
          console.log(response);
          handleError(txt);
        }
      } catch (error) {
        setIsErrored(true);
        handleError && handleError(error);
      }
      setIsLoading(false);
    };
    handleFetch();
  }, [url]);

  return (
    <>
      {isLoading && !isErrored ? <LoadingComponent /> : null}
      <div onClick={handleClick} dangerouslySetInnerHTML={{ __html: svg }} />
    </>
  );
};

export default LoadSVG;
