import React, { useContext } from 'react'
import { AppContext } from '../../context';

export const ComingSoon = () => {
  const { filmData, imgData } = useContext(AppContext);

  return (
    <section>
      <div className='container'>
        <h2>
          <span></span>
        </h2>
        <div>
          <div>
            <img src={imgData + filmData[0].poster} alt="img" />
            <div>

            </div>
            <div>

            </div>
          </div>
          <div>
            <div>
              <h3>
                {filmData[0].title}
              </h3>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <p>{filmData[0].overwiev}</p>
            </div>
            <div>
              <span>

              </span>
              <span>

              </span>
              <span>

              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
