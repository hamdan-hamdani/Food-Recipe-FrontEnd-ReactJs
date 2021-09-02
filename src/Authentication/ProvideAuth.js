import { Component, createContext, useContext } from "react";
const authContext = createContext();
// const Provider = authContext.Provider

export function useAuth() {
  return useContext(authContext);
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// function useProvideAuth() {
//   const [user, setUser] = useState(null);

//   const signin = (cb) => {
//     return fakeAuth.signin(() => {
//       setUser("user");
//       cb();
//     });
//   };

//   const signout = (cb) => {
//     return fakeAuth.signout(() => {
//       setUser(null);
//       cb();
//     });
//   };

//   return {
//     user,
//     signin,
//     signout,
//   };
// }

class useProvideAuth extends Component {
  state = {
    email: "",
    password: "",
  };

  signin = (cb) => {
    return fakeAuth.signin(() => {
      this.setState({ email: "admin" });
      cb();
    });
  };

  signout = (cb) => {
    return fakeAuth.signout(() => {
      this.setState({ email: "" });
      cb();
    });
  };

  // return (
  //     <Provider value={state}/>
  // )
}

export default function ProvideAuth({ children }) {
  console.log(children);
  const auth = new useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
