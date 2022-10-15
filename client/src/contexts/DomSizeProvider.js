import { createContext, useState, useEffect } from 'react';

const DomSizeContext = createContext({})

export const DomeSizeProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const _setSizes = ({ target: { innerWidth, innerHeight } }) => {
      setWidth(innerWidth);
      setHeight(innerHeight);
    }

    window.addEventListener("resize", _setSizes);

    return () => {
      window.removeEventListener("resize", _setSizes);
    }
  }, []);

  return (
    <DomSizeContext.Provider value={{ width, height }} >
      {children}
    </DomSizeContext.Provider>
  )
}

export default DomSizeContext