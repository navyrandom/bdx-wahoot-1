import React, { useState } from "react";
import "./App.css";
import Main from "./Layout/Main/Main";
import CreationWahoot from "./View/CreationWahoot/CreationWahoot";
import ListWahoot from "./View/ListWahoot/ListWahoot";
import Home from "./View/Home/Home.jsx";
import StartGame from "./View/StartGame/StartGame";
import PopupEndGame from "./View/PopupEndGame/PopupEndGame";
import Ranking from "./View/Ranking/Ranking";
import ReponsesW from "./View/ReponsesW/ReponsesW";
import PseudoGamer from "./View/PseudoGamer/PseudoGamer";
import ListWahootGamer from "./View/ListWahootGamer/ListWahootGamer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserContext from "./context/user";

function App() {
  const [user, setUser] = useState({
    name: "",
    _id: Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 9),
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <Router>
        <Main>
          {/* <Switch> */}
          {/* <Route exact path="/" component={Home} />
          <Route path="/admin" component={ListWahoot} />
          <Route path="/wahoot-creation" component={CreationWahoot} />
          <Route path="/home-player" component={PseudoGamer} />
          <Route path="/player" component={ListWahootGamer} />
          <Route path="/game-player/:wahootId" component={StartGame} />
          <Route path="/end-game-player" component={PopupEndGame} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/answers" component={ReponsesW} />
        </Switch>*/}
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/admin">
                <ListWahoot />
              </Route>
              <Route
                path="/wahoot-creation"
                render={(matchProps) => <CreationWahoot {...matchProps} />}
              />
              <Route
                path="/wahoot-edition/:id"
                render={(matchProps) => <CreationWahoot {...matchProps} />}
              />
              <Route path="/home-player">
                <PseudoGamer />
              </Route>
              <Route path="/player" component={ListWahootGamer} />

              <Route path="/game-player/:wahootId" component={StartGame} />

              <Route
                path="/end-game-player/:wahootId"
                component={PopupEndGame}
              />

              <Route path="/ranking/:wahootId" component={Ranking} />

              <Route path="/answers/:wahootId" component={ReponsesW} />
            </Switch>
          </div>
        </Main>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
