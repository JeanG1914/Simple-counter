import React from "react";
import PropTypes from 'prop-types';
import ReactDom from "react-dom";
function SimpleCounter (props){

    return (
        <div className="bigCounter">
            <div className="clock"><i class="fa-regular fa-clock"></i></div>
            <div className="digitFour">{props.digitFour % 10}</div>
            <div className="digitThree">{props.digitThree % 10}</div>
            <div className="digitTwo">{props.digitTwo % 10}</div>
            <div className="digitOne">{props.digitOne % 10}</div>
        </div>
        
    )

}
SimpleCounter.propTypes ={
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitFOne: PropTypes.number,
}
let counter = 0
setInterval(function(){
    const four = Math.floor(counter/1000)
    const three = Math.floor(counter/100)
    const two = Math.floor(counter/10)
    const one = Math.floor(counter/1)
    counter++;
    ReactDom.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>,
        document.querySelector("#app")

    )
    }
,1000)

export default SimpleCounter