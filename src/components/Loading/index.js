import React from "react";
import { StyledLoad, Opacity } from "./styles";
import { connect } from "react-redux";

const Loading = (props) => {
    const {load} = props;
    return(
        <>
        <Opacity active={load}/>
        <StyledLoad
            active={load}
            color="green"
            flashing={false}
            size="big"
        />
        </>
    );
}
const mapStateToProps = store => ({
    load: store.loadState.load
});

export default connect(mapStateToProps)(Loading);