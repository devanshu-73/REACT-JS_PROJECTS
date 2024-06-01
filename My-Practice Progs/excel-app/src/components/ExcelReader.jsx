// src/components/ExcelReader.js
import { useState } from 'react';
import * as XLSX from 'xlsx';
import Handsontable from 'handsontable';
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.css';
import FileUpload from './FileUpload';
import SheetTabs from './SheetTabs';

const ExcelReader = () => {
  const [data, setData] = useState([]);
  const [sheets, setSheets] = useState([]);
  const [currentSheet, setCurrentSheet] = useState(0);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetNames = workbook.SheetNames;
      setSheets(sheetNames);

      const firstSheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]], { header: 1 });
      setData(firstSheet);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleSheetChange = (index) => {
    setCurrentSheet(index);
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[sheets[index]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setData(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <FileUpload onFileUpload={handleFileUpload} />
      {sheets.length > 0 && (
        <SheetTabs
          sheets={sheets}
          currentSheet={currentSheet}
          onSheetChange={handleSheetChange}
        >
          <HotTable data={data} colHeaders={true} rowHeaders={true} />
        </SheetTabs>
      )}
    </div>
  );
};

export default ExcelReader;
