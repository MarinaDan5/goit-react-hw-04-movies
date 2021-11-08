import { useHistory } from 'react-router-dom';
import s from './ButtonBack.module.css';

export default function ButtonBack() {
  const history = useHistory();

  function recursiveGoBack(state) {
    if (state) {
      if (state['from']['search'].length === 0) {
        recursiveGoBack(state['from']['state']);
      } else {
        history.push(`${state['from']['pathname']}${state['from']['search']}`);
      }
    } else {
      history.push('/');
    }
  }

  const handleGoBack = () => {
    let currentState = history.location.state;
    recursiveGoBack(currentState);
  };

  return (
    <button className={s.btn} type="button" onClick={handleGoBack}>
      Go back
    </button>
  );
}
