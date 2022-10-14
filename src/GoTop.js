import React, {useEffect, useState} from 'react'

const GoTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          (window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false))
        });
      }, []);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };

  return (
    <>
    <div>
    {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>

    </>
  )
}

export default GoTop;
