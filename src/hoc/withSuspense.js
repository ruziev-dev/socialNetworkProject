import React from "react";
import Preloader from "../components/common/Preloader/preloader";


export const WithSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div><Preloader/></div>}>
            <Component {...props}/>
        </React.Suspense>

    }
}