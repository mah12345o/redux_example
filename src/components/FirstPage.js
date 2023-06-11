// src/components/FirstPage.js
import { useSelector } from 'react-redux';
import SecondPage from './SecondPage';
function FirstPage() {
  const isDivVisible = useSelector(state => state.isDivVisible);

  return (
    <div>
      {isDivVisible && <div>This div is visible</div>}
      <SecondPage />
    </div>
  );
}

export default FirstPage;


