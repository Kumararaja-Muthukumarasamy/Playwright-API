import fs from 'fs';
import * as XLSX from 'xlsx';
import * as path from 'path';

const excelFilePath = path.join(process.cwd(), 'api', 'testdata', 'productdata.xlsx');

const jsonFilePath = path.join(
  process.cwd(),
  'api',
  'testdata',
  `runtimeData-${process.pid}.json`
);

export function writeData(data: any) {
  fs.writeFileSync(jsonFilePath, JSON.stringify({ productId: data }, null, 2));
}


export function readData() {
  return JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
}

export function readExcel(sheetName: string = 'products') {
    const workbook = XLSX.readFile(excelFilePath);
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
        throw new Error(`Sheet "${sheetName}" not found in Excel`);
    }

    return XLSX.utils.sheet_to_json(sheet);
}