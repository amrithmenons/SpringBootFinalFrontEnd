import "./list.css"
import Navbar from '../Components/navbar/Navbar';
import Header from '../Components/Header/Header';
import CustomSearchItem from "../Components/SearchItem/CustomSearchItem";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
  
    return (
      <div>
        <Navbar />
        <Header type="list" />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input placeholder={destination} type="text" />
              </div>
              <div className="lsItem">
                <label>Check-in Date</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </div>
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.adult}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder={options.children}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.room}
                    />
                  </div>
                </div>
              </div>
              <button>Search</button>
            </div>
            <div className="listResult">
              <CustomSearchItem />
              <CustomSearchItem />
              <CustomSearchItem />
              <CustomSearchItem />
              <CustomSearchItem />
              <CustomSearchItem />
              <CustomSearchItem />
             
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default List;

/*import { useState } from 'react';
import './list.css';
import NavBar from "../Components/navbar/Navbar";
import Header from "../Components/Header/Header";
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(location.state?.date || null);
  const [opendate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || null);

  return (
    <div>
      <NavBar />
      <Header type='list' />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type='text'/>
            </div>
            <div className='lsItem'>
              <label>Check-In Date </label>
              <span onClick={() => setOpenDate(!opendate)}>
                {date && `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {opendate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                />
              )}
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;*/
