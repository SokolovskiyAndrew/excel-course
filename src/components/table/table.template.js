const CODES = {
  A: 65,
  Z: 90
};

function toCell() {
  return `
    <div class="cell" contenteditable></div>
    `;
}

function toColumn(col) {
  return `
    <div class="column">
    ${col}
    </div>
`;
}

function createRow(index = '', content = '') {
  return ` 
    <div class="row">
        <div class="row-info">${index}</div>
        <div class="row-data">${content}</div>
    </div>`;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const columnsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const columns = new Array(columnsCount).fill('').map(toChar).map(toColumn).join('');
  const cells = new Array(columnsCount).fill(toCell()).join('');

  rows.push(createRow('', columns));

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(i + 1, cells));
  }
  return rows.join('');
}
