import React from 'react';
import { withStyle } from '~/core/container';
import { withRouter } from "react-router-dom";

import SPonFrame from "./BetElement/SPonFrame";
import SPonOneStar from "./BetElement/SPonOneStar";


const SinglePon = ({match}) => {
    let { star } = match.params

    return (
        <div>
            {
                (star == '1') ? <SPonOneStar /> : <SPonFrame />
            }
        </div>
    );
}

export default withRouter(withStyle()(SinglePon));