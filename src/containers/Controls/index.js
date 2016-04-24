import { connect } from 'react-redux';
import Controls from '../../components/Controls';
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

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
