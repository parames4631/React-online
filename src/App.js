// import Header from "./components/Header";
import Footer from "./components/Footer";
// import Logo from "./components/Logo";
import "./App.css";
// import Sidebar from "./components/Sidebar";
// import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HospitalPage from "./pages/Hospital/HospitalPage";
import ProductPage from "./pages/ProductPage";
import DetailPage from "./pages/DetailPage"
import ContactMe from "./pages/ContactMe";
import AboutPage from "./pages/AboutPage";
import IndexPage from "./pages/category/IndexPage";
import CreatePage from "./pages/category/CreatePage";
import EditPage from "./pages/category/EditPage";
import UploadPage from "./pages/category/UploadPage";
import { ToastProvider } from "react-toast-notifications";
import CategoryPage from "./pages/category/CategoryPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MemberPage from "./pages/MemberPage.js";
import PrivateRoute from "./guard/auth";
import UserStoreProvider from "./context/UserContext";


// redux setup
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "./redux/reducers/index";
import Cartpage from "./pages/Cartpage";
 
const store = createStore(rootReducer)
 
function App() {
  return (
    <Provider store={store}>
      <UserStoreProvider>
      <ToastProvider>
        <Router>
          <NavBar />
 
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/contactme">
              <ContactMe />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/detail/:id/title/:title">
              <DetailPage />
            </Route>
            <Route path="/hospital">
              <HospitalPage />
            </Route>
            <Route path="/cartpage">
              <Cartpage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
 
            <Route path="/register">
              <RegisterPage />
            </Route>
 
            <Route path="/upload">
              <UploadPage />
            </Route>
 
            <PrivateRoute path="/member">
              <MemberPage />
            </PrivateRoute>
 
            {/* makesense */}
            <Route
              path="/category"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} exact>
                    <IndexPage />
                  </Route>
 
                  <Route path={`${url}/create`}>
                    <CreatePage />
                  </Route>
 
                  <Route path={`${url}/edit/:id`}>
                    <EditPage />
                  </Route>
                </>
              )}
            ></Route>
          </Switch>
 
          <Footer />
        </Router>
      </ToastProvider>
    </UserStoreProvider>
    </Provider>
  );
}
 
export default App;