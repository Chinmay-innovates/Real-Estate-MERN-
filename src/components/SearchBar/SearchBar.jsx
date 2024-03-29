import { HiLocationMarker } from "react-icons/hi";
const SeachBar = () => {
  return (
    <div className='flexCenter search-bar'>
      <HiLocationMarker color='var(--blue)' size={25} />
      <input type='text' />
      <button className='button'>Search</button>
    </div>
  );
};

export default SeachBar;
