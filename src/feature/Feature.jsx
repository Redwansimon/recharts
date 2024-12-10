
import PropTypes from "prop-types"
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

export default function Feature({feature}) {

    return (
        <div>
            <p className="p-2  rounded-lg flex  "> <VscDebugBreakpointDataUnverified  className="bg-green-600 mr-2"/>
            {feature}</p>

        </div>
    )
}
Feature.propTypes={
    feature:PropTypes.string
}
