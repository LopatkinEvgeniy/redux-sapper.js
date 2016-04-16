import {
  FIELD_GENERATE,
} from '../constants/actions';

function generateRows() {
  const rows = [];

  for (let rowIndex = 0; rowIndex < 20; rowIndex++) {
    const row = [];

    for (let cellIndex = 0; cellIndex < 30; cellIndex++) {
      row.push(1);
    }

    rows.push(row);
  }

  return rows;
}

export const fieldGenerateAction = () => ({
  type: FIELD_GENERATE,
  rows: generateRows(),
});
