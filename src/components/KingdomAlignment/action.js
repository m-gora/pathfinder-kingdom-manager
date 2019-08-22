export const CHANGE_ALIGNMENT = 'CHANGE_ALIGNMENT';

const changeAlignment = (newAlignment) => {
  return {
    type: CHANGE_ALIGNMENT,
    alignment: newAlignment
  }
}

export default changeAlignment;
