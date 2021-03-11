import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "../Components/Home/Home";
import { UsPolitics } from "../Components/UsPolitics/UsPolitics";
import { Business } from "../Components/Business/Business";
import { Health } from "../Components/Health/Health";
import { Entertainment } from "../Components/Entertainment/Entertainment";
import { StylePage } from "../Components/Style/StylePage";
import { Travel } from "../Components/Travel/Travel";
import { Sports } from "../Components/Sports/Sports";
import { Videos } from "../Components/Videos/Videos";
import { World } from "../Components/World/World";
import { Footer } from "../Components/Footer/Footer";
import { WorldDetails } from "../Components/World/WorldDetails";
import { Africa } from "../Components/World/Pages/Africa";
import { America } from "../Components/World/Pages/America";
import { China } from "../Components/World/Pages/China";
import { Europe } from "../Components/World/Pages/Europe";
import { Asia } from "../Components/World/Pages/Asia";
import { India } from "../Components/World/Pages/India";
import { Australia } from "../Components/World/Pages/Australia";
import { Middle } from "../Components/World/Pages/Middle";
import { Error } from "../Components/Error/Error";
import { HealthLinksPage } from "../Components/Health/HealthLinksPage";
import { AfricaDetails } from "../Components/World/Pages/AfricaDetails";
import { AmericaDetails } from "../Components/World/Pages/AmericaDetails";
import { AsiaDetails } from "../Components/World/Pages/AsiaDetails";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/world">
          <World />
        </Route>
        <Route exact path="/uspolitics">
          <UsPolitics />
        </Route>
        <Route exact path="/business">
          <Business />
        </Route>
        <Route exact path="/health">
          <Health />
        </Route>
        <Route exact path="/health/:publishedAt">
          <HealthLinksPage />
        </Route>
        <Route exact path="/entertainment">
          <Entertainment />
        </Route>
        <Route exact path="/style">
          <StylePage />
        </Route>
        <Route exact path="/travel">
          <Travel />
        </Route>
        <Route exact path="/sports">
          <Sports />
        </Route>
        <Route exact path="/videos">
          <Videos />
        </Route>
        <Route exact path="/footer">
          <Footer />
        </Route>
        <Route path="/world/:id">
          <WorldDetails></WorldDetails>
        </Route>
        <Route path="/africa/:id">
          <AfricaDetails></AfricaDetails>
        </Route>

        <Route path="/africa" exact>
          <Africa></Africa>
        </Route>
        <Route path="/america" exact>
          <America></America>
        </Route>
        <Route path="/america/:id">
          <AmericaDetails></AmericaDetails>
        </Route>
        <Route path="/asia" exact>
          <Asia></Asia>
        </Route>

        <Route path="/asia/:id" exact>
          <AsiaDetails></AsiaDetails>
        </Route>
        <Route path="/australia" exact>
          <Australia></Australia>
        </Route>
        <Route path="/china" exact>
          <China></China>
        </Route>
        <Route path="/europe" exact>
          <Europe></Europe>
        </Route>
        <Route path="/india" exact>
          <India></India>
        </Route>
        <Route path="/middleeast" exact>
          <Middle></Middle>
        </Route>
        <Route exact path="/health/:publishedAt">
          <HealthLinksPage />
        </Route>
        <Route path="/unitedkingdom" exact>
          <Middle></Middle>
        </Route>
        {/* <PrivateRoute path="/profile"></PrivateRoute> */}
        <Route>
          <Error></Error>
        </Route>
      </Switch>
    </div>
  );
};

export { Routes };
