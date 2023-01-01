import "./App.css";
import ReactFacebookLogin from "react-facebook-login";
import axios from "axios";

function App() {
  const componentClicked = () => {
    console.log("component clicked");
  };

  const responseFacebook = async (e) => {
    console.log("responseFacebook ", e);
    if (!e.email) {
      alert("Email Id is missing");
      return false;
    }
    const body = {
      email: e.email,
      name: e.name,
      facebookId: e.id,
    };
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/api/v1/users/signup`,
      data: body,
      headers: { "fb-token": e.accessToken },
    });
    console.log("response ", response);
  };
  return (
    <div>
      <ReactFacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
}

export default App;
