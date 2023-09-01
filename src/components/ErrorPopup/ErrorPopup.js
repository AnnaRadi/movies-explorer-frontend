import errImag from '../../images/errPopup.svg';
import './ErrorPopup.css';

const ErrorPopup = ({ errMessage }) => {
  return (
    <>
      {errMessage && (
        <div className='errPopup'>
          <img src={errImag} className='errPopup__img' alt={errMessage} />
          <p className='errPopup__message'>{errMessage}</p>
        </div>
      )}
    </>
  );
};

export default ErrorPopup;