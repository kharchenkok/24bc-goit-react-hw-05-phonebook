import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Styles from "./AlertStyles.module.css";

export default class EmptyNameAlert extends Component {
  render() {
    const { alert,field } = this.props;
    return (
      <CSSTransition in={alert} classNames={Styles} timeout={250} unmountOnExit>
        <div className={Styles.alert}>{field} is empty! Enter this field</div>
      </CSSTransition>
    );
  }
}
