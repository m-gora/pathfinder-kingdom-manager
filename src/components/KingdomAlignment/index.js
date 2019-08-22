import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

export default class KingdomAlignment extends React.Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {

  }

  render() {
      return (
        <FormControl>
          <InputLabel htmlFor="alignment-label-placeholder">Alignment</InputLabel>
          <Select name="alignment" displayEmpty>
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
