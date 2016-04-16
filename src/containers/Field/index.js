import { connect } from 'react-redux';
import App from '../../components/Field';
import { bindActionCreators } from 'redux';
import * as fieldActions from '../../actions/field';

function mapStateToProps(state) {
  return {
    fieldImmutable: state.fieldImmutable,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(fieldActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
