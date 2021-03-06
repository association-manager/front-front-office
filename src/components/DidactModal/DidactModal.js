import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Close from "@material-ui/icons/Close";

import styles from "assets/jss/material-kit-react/components/modalStyles";

import dataJson from 'service/data/dataJsonDidacticiel.json';

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

Transition.displayName = "Transition";

export default function DidactModal(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(props.active);

  return (
    <GridContainer>
        <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Dialog
                classes={{
                root: classes.center,
                paper: classes.modal
                }}
                open={classicModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setClassicModal(false)}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"
            >
                <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
                >
                <IconButton
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => setClassicModal(false)}
                >
                    <Close className={classes.modalClose} />
                </IconButton>
                <h4 className={classes.modalTitle}>Modal title</h4>
                </DialogTitle>
                <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
                >
                <p>
                    {props.info}
                </p>
                </DialogContent>
            </Dialog>
            </GridItem>
        </GridContainer>
    </GridContainer>
  );
}

DidactModal.defaultProps = {
    active: false
}

DidactModal.propTypes = {
    active: PropTypes.bool,
    info: PropTypes.string
}