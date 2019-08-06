import React, { Component } from "react";
import styled from "styled-components";
import { WindowClose } from "styled-icons/fa-solid/WindowClose";
import { DownArrowSquare } from "styled-icons/boxicons-solid/DownArrowSquare";
import { UpArrowSquare } from "styled-icons/boxicons-solid/UpArrowSquare";

import "./tour.scss";

const Close = styled(WindowClose)`
  width: 25px;
  height: 25px;
`;

const ArrowDown = styled(DownArrowSquare)`
  width: 20px;
  height: 20px;
`;

const ArrowUp = styled(UpArrowSquare)`
  width: 20px;
  height: 20px;
`;

class Tour extends Component {
  state = {
    showInfo: false
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="city Tour" />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <Close />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}>
              {this.state.showInfo ? <ArrowDown /> : <ArrowUp />}
            </span>
          </h5>
          {this.state.showInfo ? <p>{info}</p> : null}
        </div>
      </article>
    );
  }
}

export default Tour;
