import React from "react";
import style from "./ContactList.module.css";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ContactList = ({ findUserContact, deleteUserContact }) => {
  return (
    <TransitionGroup component="ul" className={style.contact__list}>
      {findUserContact.map((elem, index) => (
        <CSSTransition
          key={elem.id}
          in={findUserContact.length > 0}
          timeout={250}
          classNames={style}
        >
          <li className={style.contact__item}>
            <p className={style.contact__style}>
              {index + 1 + "."}
              {elem.name + ":"}
            </p>
            <p className={style.contact__style}>{elem.number}</p>

            <Button
              type="button"
              onClick={() => deleteUserContact(elem.id)}
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;

ContactList.propTypes = {
  findUserContact: PropTypes.func.isRequired,
  deleteUserContact: PropTypes.func.isRequired,
};
