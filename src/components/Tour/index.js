import React, { Component } from "react";
import styled from "styled-components";
import { WindowClose } from "styled-icons/fa-solid/WindowClose";
import { DownArrowSquare } from "styled-icons/boxicons-solid/DownArrowSquare";
import "./tour.scss";

const Close = styled(WindowClose)`
  width: 25px;
  height: 25px;
`;

const ArrowDown = styled(DownArrowSquare)`
  color: black;
  width: 25px;
  height: 25px;
`;

class Tour extends Component {
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="of the tour" />
          <span className="close-btn">
            <Close />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span>
              <ArrowDown />
            </span>
          </h5>
          <p>{info}</p>
        </div>
      </article>
    );
  }
}

export default Tour;
