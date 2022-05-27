import { connect } from 'react-redux';
import { Commentator } from './components/comentator';
function App (props) {

  return (
    <div>
    <Commentator/>
    </div>
  )
}

const mapStateToProps = (store) => {
  return { counter: store.counter };
}

const withStore = connect(mapStateToProps);

export default withStore(App);