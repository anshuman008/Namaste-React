import { useRouteError } from "react-router-dom";

const ErrorPage = () =>{
    const err = useRouteError();
    return <div>
        <h1>OOPS!!</h1>
        <h2>Something Went Wrong</h2>
        {err.status} {err.statusText}
    </div>
}

export default ErrorPage;