import { Fragment, useEffect, useState } from "react";
import Footer from "./app/components/footer/Footer";
import Header from "./app/components/header/Header";
import Home from "./app/entities/Home/Home"
import Login from "./app/entities/Login/Login";
import getToken from "./services/Login";
import Candidate from "./app/entities/Candidate/Candidate";
import { Route, Switch, useHistory } from "react-router-dom";
import Reports from "./app/entities/reports/Reports";
import CreateReport from "./app/entities/createReport/CreateReport";

const App = () => {
  let history = useHistory();
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setisLogin] = useState(
    JSON.parse(sessionStorage.getItem("login"))
  );
  const [error, setError] = useState("");
  const [seeError, setSeeError] = useState(false);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const submit = (e) => {
    try {
      if (e.key === "enter") {
        const token1 = async () => {
          const data = await getToken(email, password);
          sessionStorage.setItem("token", data.accessToken);
          setToken(data.accessToken);
          setError(data);
          setSeeError(true);
        };
        token1();
      }
      const token = async () => {
        const data = await getToken(email, password);
        sessionStorage.setItem("token", data.accessToken);
        setToken(data.accessToken);
        setError(data);
        setSeeError(true);
        // history.push("/");
      };

      token();
      setEmail("");
      setPassword("");
      e.preventDefault(); //probaj bez ovoga!!!
    } catch (e) {
      console.log(e);
    }
  };

  const logOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("login");
    setError("");
    setSeeError(false);
    setisLogin(false);
    history.push("/login");
  };

  useEffect(() => {
    if (!token || token === "undefined") {
      history.push("/login");
    } else {
      sessionStorage.setItem("login", true);
      setisLogin(true);
      history.push("/");
    }
  }, [token, history]);
  return (
    <Fragment>
      {isLogin && <Header logOut={logOut} />}
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/candidate/:id"} component={Candidate} />
        <Route path={"/reports"} component={Reports} />
        <Route path={"/createReport"} component={CreateReport} />
        <Route exact path="/login">
          <Login
            submit={submit}
            email={email}
            password={password}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            error={error}
            seeError={seeError}
          />
        </Route>
      </Switch>
      {isLogin && <Footer />}
    </Fragment>
  );
};

export default App;