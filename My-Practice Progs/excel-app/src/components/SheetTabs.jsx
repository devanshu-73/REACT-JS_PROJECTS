/* eslint-disable no-unused-vars */
// src/components/SheetTabs.js
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const SheetTabs = ({ sheets, currentSheet, onSheetChange, children }) => {
  return (
    <Tabs selectedIndex={currentSheet} onSelect={onSheetChange}>
      <TabList>
        {sheets.map((sheetName, index) => (
          <Tab key={index}>{sheetName}</Tab>
        ))}
      </TabList>
      {sheets.map((sheetName, index) => (
        <TabPanel key={index}>
          {children}
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default SheetTabs;
