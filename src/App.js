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

function App() {
  return (
    <ToastProvider placement="top-center">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
          <Route path="/detail/:id/title/:title">
            <DetailPage />
          </Route>
          <Route path="/hospital">
            <HospitalPage/>
          </Route>
          <Route path="/upload">
            <UploadPage />
          </Route>
          <Route path="/Register">
            <RegisterPage />
          </Route>
          <Route path="/Login">
            <LoginPage />
          </Route>
          <Route
            path="/category"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} exact>
                  <CategoryPage />
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
  );
}

export default App;