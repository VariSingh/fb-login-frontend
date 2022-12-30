import logo from "./logo.svg";
import "./App.css";
import ReactFacebookLogin from "react-facebook-login";
import axios from "axios";

function App() {
  const componentClicked = () => {
    console.log("component clicked");
  };

  const responseFacebook = (e) => {
    console.log("responseFacebook ", e);
  };
  return (
    <div>
      <ReactFacebookLogin
        appId=""
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
}

export default App;
