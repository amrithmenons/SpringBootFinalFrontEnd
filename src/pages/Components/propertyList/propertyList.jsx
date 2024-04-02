import './propertyList.css';
import Logo1 from './hotel.jpg';
import Logo2 from './cabin.jpg';
import Logo3 from './villa.jpg';
import Logo4 from './apt4.jpg';

const propertyList = () => {
  return (
    <div className='PList'>
        <div className="pListItem">
            <img src={Logo1} alt="Pic1" className="pListImg" />
            <div className="pListTitles">
                <h1> Hotels </h1>
                <h2> 33 variants</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Logo2} alt="Pic1" className="pListImg" />
            <div className="pListTitles">
                <h1> Cabins </h1>
                <h2> 21 variants</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Logo3} alt="Pic1" className="pListImg" />
            <div className="pListTitles">
                <h1> Villas </h1>
                <h2> 12 variants</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Logo4} alt="Pic1" className="pListImg" />
            <div className="pListTitles">
                <h1> Apartments </h1>
                <h2> 103 variants</h2>
            </div>
        </div>
    </div>
  )
}

export default propertyList;