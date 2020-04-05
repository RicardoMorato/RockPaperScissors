import React from 'react';
import './ChooseElement.scss';
import svgTriangle from '../../assets/bg-triangle.svg';
import iconPaper from '../../assets/icon-paper.svg';
import iconRock from '../../assets/icon-rock.svg';
import iconScissors from '../../assets/icon-scissors.svg';

function ChooseElement() {
  return (
    <section className="choose-element">
      <img src={svgTriangle} alt="" className="svg-triangle" />
      <div className="element-outter-ring paper-outter-ring">
        <div className="element">
          <img src={iconPaper} alt="Icon of a open hand" className="element-icon" />
        </div>
      </div>
      <div className="element-outter-ring rock-outter-ring">
        <div className="element">
          <img src={iconRock} alt="Icon of a open hand" className="element-icon-rock" />
        </div>
      </div>
      <div className="element-outter-ring scissors-outter-ring">
        <div className="element">
          <img src={iconScissors} alt="Icon of a open hand" className="element-icon" />
        </div>
      </div>
    </section>
  );
}

export default ChooseElement;
