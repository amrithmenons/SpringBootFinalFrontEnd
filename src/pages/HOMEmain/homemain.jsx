import "./Homemain.css";
import Nav from "../Components/navbar/Navbar";
import Header from "../Components/Header/Header";
import Feature from "../Components/Featured/Feature";
import PropertyList from "../Components/propertyList/propertyList";
import Featuredproperties from "../Components/FeaturedProperties/Featuredproperties";
import MailList from "../Components/mailList/mailList"
import Footer from "../Components/Footer/Footer";



const Home = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <div className="homeContainer">
        <Feature/>
        <h1 className="homeTitle">Browse By Property Type🔎</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes Guests Love❤️</h1>
        <Featuredproperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;    