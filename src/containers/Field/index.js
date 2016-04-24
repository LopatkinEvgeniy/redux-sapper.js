import { connect } from 'react-redux';
import Field from '../../components/Field';
import { bindActionCreators } from 'redux';
import * as fieldActions from '../../actions/field';

function mapStateToProps(state) {
  return {
    fieldState: state.fieldState,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(fieldActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);
