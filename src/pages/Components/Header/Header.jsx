import { faBed , faTaxi , faCar ,faPlane, faCalendar, faPerson, faMountain } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";


const Header = ({type}) => {

  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult:1,
    children:0,
     room:1,
  });

  const navigate = useNavigate()

  const [openDate, setOpenDate] = useState(false);

  const [date , setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(), 
      key: 'selection'
    }
  ]);

  const HandleOption = (name , operation) =>{
    setOptions(prev=>{return{
      ...prev, [name] : operation === 'i' ? options[name] + 1 : options[name] - 1,
    };
  });
  }

  const handleSearch = () =>{
    navigate("/hotels", {state:{destination, date, options}})
  }

  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">

                <a href="#" className="RoundButton"> 
                  <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed}/>
                    <span> Stays </span>
                  </div>
                </a> 

                <a href="https://www.goindigo.in/" className="RoundButton">
                <div className="headerListItem active">
                  <FontAwesomeIcon icon={faPlane}/>
                  <span> Flights </span>
                </div>
                </a>

                <a href="https://airportstaxitransfers.com/?utm_source=Google&utm_medium=GoogleAds&utm_campaign=85222343&gad_source=1&gclid=CjwKCAiAsIGrBhAAEiwAEzMlC019bxzBkwWyydbjYISS00-WQ1YaQpRId9WIG0kVAz8PR3UFY4lLWxoCHDsQAvD_BwE" className="RoundButton">
                <div className="headerListItem active">
                  <FontAwesomeIcon icon={faCar}/>
                  <span> Car Rentals </span>
                </div>
                </a>

                <a href="https://www.thomascook.in/india-tourism/places-to-visit-in-tamil-nadu#:~:text=Besides%20the%20wide%20range%20of,Marina%20Beach%2C%20and%20so%20on." className="RoundButton">
                <div className="headerListItem active">
                  <FontAwesomeIcon icon={faMountain}/>
                  <span> Attractions </span>
                </div>
                </a>

                <a href="#" className="RoundButton">
                <div className="headerListItem active">
                  <FontAwesomeIcon icon={faTaxi}/>
                  <span> Airport Taxis</span>
                </div>
                </a>
            </div>

            { type !== "list" &&
              <><h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
            <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free BookMyStay account</p>
            {/* <button className="buttonheader">Sign In / Register</button> */}

            
            <div className="headerSearch">

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                <input type="text" 
                placeholder="Where are you going?" 
                className="headerSearchInput"
                onChange={e=>setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendar} className="headerIcon"/>
                <span onClick={()=>setOpenDate(!openDate )}  className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                <span onClick = {()=>setOpenOptions(!openOptions)}className="headerSearchText">{`${options.adult} Adult • ${options.children} Children • ${options.room} Room`}</span>
                {openOptions && <div className="Options">
                  <div className="optionItem">
                    <span className="optionText"> Adult </span>

                    <div className="optionCounter">
                      <button disabled = {options.adult <= 1} className="optionCounterButton" onClick={()=>HandleOption("adult", "d")}>-</button>
                      <span className="optionCounter"> {options.adult} </span>
                      <button className="optionCounterButton" onClick={()=>HandleOption("adult", "i")}>+</button>
                    </div>

                  </div>
                  <div className="optionItem">
                    <span className="optionText"> Children </span>
                    <div className="optionCounter">
                      <button disabled = {options.children <=  0 } className="optionCounterButton" onClick={()=>HandleOption("children", "d")}>-</button>
                      <span className="optionCounter"> {options.children} </span>
                      <button className="optionCounterButton" onClick={()=>HandleOption("children", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText"> Room </span>
                    <div className="optionCounter">
                      <button disabled = {options.room <= 1} className="optionCounterButton" onClick={()=>HandleOption("room", "d")}>-</button>
                      <span className="optionCounter"> {options.room} </span>
                      <button className="optionCounterButton" onClick={()=>HandleOption("room", "i")}>+</button>
                    </div>
                  </div>
                </div>}
              </div>


              <div className="headerSearchIte">
                <button className="buttonheader" onClick={handleSearch}>Search</button>
              </div>

            </div></>}
        </div>
    </div>
  );
};

export default Header;