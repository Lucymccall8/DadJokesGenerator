import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const RatingScreen = React.lazy(() => import("../screens/RatingScreen"));

const Router: React.FC = () => (
    <Switch>
        <Suspense fallback={null}>
        <Route path="/" component={RatingScreen} exact/>
        </Suspense>
    </Switch>
);
export default Router;