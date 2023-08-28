import imgPopup from '../../images/img_popup.svg';
import './PopupInfo.css';

export default function PopupInfo({ infMessage }) {
  return (
    <>
      {infMessage && (
        <div className='popup'>
          <img src={imgPopup} alt={infMessage} className="popup__img" />
          <h2 className="popup__message">{infMessage}</h2>
        </div>
      )}
    </>
  );
}