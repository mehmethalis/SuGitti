import React from "react";
import { Result } from 'antd';

const ResponseResult =({error})=>{

    return(
        <h1>Error</h1>
        /**<Result
            status={error ? error.response.status : '400'}
            title={error ? error.response.statusText : 'not found'}
            subTitle={error ? error.message : 'alt mesaj'}
        />**/
    )
}
export default ResponseResult;