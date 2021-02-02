import React from "react";
import { Result } from 'antd/lib';

const ResponseResult =({error})=>{
    return(
        <Result
            status={error.response.status}
            title={error.response.statusText}
            subTitle={error.message}
        />
    )
}
export default ResponseResult;