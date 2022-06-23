import { useEffect } from 'react';
import { connect } from 'react-redux';
import { REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS } from "./redux/actions/mainTypeAction";

function TryComponent(props) {
    useEffect(() => {

    }, [0]);
    const mainTypeParams = props.mainTypeReducer;
    const clieckevent = () => {
        props.requestForGetMainType("nirav")
    }
    // this will update all states acourdingly your actions
    console.log(props.mainTypeReducer, "data")

    return (
        <>
            <button onClick={clieckevent} >clieck</button>
            <h1>Nirav</h1>
        </>
    )
}
const mapStateToProps = (state) => {
    return { mainTypeReducer: state.mainTypeReducer }

};

const mapDispatchToProps = (dispatch) => {
    return {
        //for adding multiple request hear
        requestForGetMainType: (data, callBack) =>
            dispatch({ type: REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS, data, callBack }),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TryComponent);