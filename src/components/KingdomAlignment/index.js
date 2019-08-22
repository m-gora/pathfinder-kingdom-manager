import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { connect } from 'react-redux';

import changeAlignment from './action';

class KingdomAlignment extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <FormControl>
          <InputLabel htmlFor="alignment-label-placeholder">Alignment</InputLabel>
          <Select name="alignment" value={this.props.alignment} >
            <MenuItem value="LG">Lawful Good</MenuItem>
            <MenuItem value="NG">Neutral Good</MenuItem>
            <MenuItem value="CG">Chaotic Good</MenuItem>
            <MenuItem value="LN">Lawful Neutral</MenuItem>
            <MenuItem value="N">True Neutral</MenuItem>
            <MenuItem value="CN">Chaotic Neutral</MenuItem>
            <MenuItem value="LE">Lawful Evil</MenuItem>
            <MenuItem value="NE">Neutral Evil</MenuItem>
            <MenuItem value="CE">Chaotic Evil</MenuItem>
          </Select>
          <FormHelperText>Your Kingdom's Alignment</FormHelperText>
        </FormControl>
      )
  }

}

// bind redux state to react props
// ownProps is the props that is set in the parent component for this component
// e.g. <KingdomAlignment someProp='2' />
function mapStateToProps(state, ownProps) {
  return { alignment: state.kingdomAlignment };
}

// wire the onChange event to redux dispatch
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onAlignmentChange: () => {
      dispatch(changeAlignment(ownProps.alignment));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(KingdomAlignment);
