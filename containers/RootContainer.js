import { connect }                     from 'react-redux';
import Counter                         from '../components/Counter';
import { MINUS_COUNTER, PLUS_COUNTER } from '../redux/actions';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    plus : () => dispatch({
      type: PLUS_COUNTER
    }),
    minus: () => dispatch({
      type: MINUS_COUNTER
    }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);