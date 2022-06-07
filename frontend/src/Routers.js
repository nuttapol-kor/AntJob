import React, { lazy, Suspense } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";

import Login from "./components/pages/login/LoginPage";
import Landing from "./components/pages/landing";
import Register from "./components/pages/register";
import { UnauthorizedPage, NotFoundPage } from "./components/pages/error";
import { RequestListPage } from "./components/pages/listCard/requestListPage";
import { BiddingListPage } from "./components/pages/listCard/biddingListPage";

//User
import ProfilePage from "./components/pages/user/profile";
import MePage from "./components/pages/user/me";
import ViewProfile from "./components/pages/user/profile/ViewProfile";
import Notification from "./components/pages/NotificationPage";
import Homepage from "./components/pages/homePage";
import VendorSuggestionPage from "./components/pages/vendor-suggestion";
import RequestInformationPage from "./components/pages/information/request";
import BiddingInformationPage from "./components/pages/information/bidding";

// Admin
import {
  AdminDashboardCost,
  AdminDashboardOt,
  AdminDashboardWorkingTime
} from "./components/pages/admin";

const useStyles = makeStyles((theme) => ({
  content: {
    // flexGrow: 1,
    // display: "flex",
    // justifyContent: "center",
    // padding: 0,
  },
}));

const Routers = () => {
  const classes = useStyles();
  const { user: currentUser } = useSelector((state) => state.auth);

  const RedirectLogin = () => (
    <Route>
      <Redirect to="/login" />
    </Route>
  );

  const AdminRoute = ({ component: Component, ...rest }) => {
    if (currentUser) {
      return (
        <Route
          {...rest}
          render={(props) =>
            currentUser.roles.includes("ROLE_ADMIN") === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/unauthorized" />
            )
          }
        />
      );
    } else {
      return <RedirectLogin />;
    }
  };

  const AdminVendorRoute = ({ component: Component, ...rest }) => {
    if (currentUser) {
      return (
        <Route
          {...rest}
          render={(props) =>
            currentUser.roles.includes("ROLE_VENDOR") === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/unauthorized" />
            )
          }
        />
      );
    } else {
      return <RedirectLogin />;
    }
  };

  const ManagerRoute = ({ component: Component, ...rest }) => {
    if (currentUser) {
      return (
        <Route
          {...rest}
          render={(props) =>
            currentUser.roles.includes("ROLE_MANAGER") === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/unauthorized" />
            )
          }
        />
      );
    } else {
      return <RedirectLogin />;
    }
  };

  const UserRoute = ({ component: Component, ...rest }) => {
    if (currentUser) {
      return (
        <Route
          {...rest}
          render={(props) =>
            currentUser.roles.includes("ROLE_USER") === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/unauthorized" />
            )
          }
        />
      );
    } else {
      return <RedirectLogin />;
    }
  };

  const WarehouseRoute = ({ component: Component, ...rest }) => {
    if (currentUser) {
      return (
        <Route
          {...rest}
          render={(props) =>
            currentUser.roles.includes("ROLE_WAREHOUSE") === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/unauthorized" />
            )
          }
        />
      );
    } else {
      return <RedirectLogin />;
    }
  };

  return (
    <Container maxWidth={false} style={{ padding: 0 }}>
      <Suspense fallback={<div>Loading..</div>}>
        <Switch>
          {/* <Route
            exact
            path={["/"]}
            component={() =>
              currentUser ? <Redirect to="/home" /> : <Redirect to="/login" />
            }
          /> */}
          <Route exact path="/company/:company/request/:openposition" component={RequestInformationPage} />
          <Route exact path="/company/:company/bidding/:openposition" component={BiddingInformationPage} />
          <Route exact path={["/", ""]} component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/vendor-suggestion" component={VendorSuggestionPage} />
          <Route exact path="/me" component={MePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/unauthorized" component={UnauthorizedPage} />
          <Route exact path="/request/list" component={RequestListPage} />
          <Route exact path="/bidding/list" component={BiddingListPage} />
          <Container>
            {/* User Route */}
            <UserRoute exact path="/notification" component={Notification} />
            
            {/* Admin Route */}
            <AdminRoute
              exact
              path="/admin/dashboard/cost"
              component={AdminDashboardCost}
            />
            <AdminRoute
              exact
              path="/admin/dashboard/ot"
              component={AdminDashboardOt}
            />
            <AdminRoute
              exact
              path="/admin/dashboard/workingtime"
              component={AdminDashboardWorkingTime}
            />
          </Container>

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default Routers;
