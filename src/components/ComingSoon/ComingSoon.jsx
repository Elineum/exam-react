import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context";

export const ComingSoon = () => {
  const { filmData, imgData } = useContext(AppContext);

  useEffect(() => {
    fetch(process.env.REACT_APP_SEARCH + "758769" + process.env.REACT_APP_KEY)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  return (
    <section>
      <div className="container">
        <div>
          <h2></h2>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <div>
              <h3></h3>
            </div>
            <div>
              <span></span>|{" "}
              <span>
                <a href=""></a>
              </span>
              <span>
                <a href=""></a>
              </span>
              <span>
                <a href=""></a>
              </span>
              | <span></span>
            </div>
            <div>
              <p></p>
            </div>
            <div>
              <div>
                <span></span>
                <span></span>
              </div>
              <div>
                <span></span>
                <span></span>
              </div>
              <div>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button></button>
        </div>
      </div>
    </section>
  );
};
