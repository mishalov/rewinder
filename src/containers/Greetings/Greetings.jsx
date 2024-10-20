import React, { Component, useEffect, useState } from 'react';
import './MainForm.scss';

const MainForm = () => {
  const [aValue, setAValue] = useState(0);

  useEffect(() => {
    chrome.runtime.sendMessage({ contentScriptQuery: 'setAValue', aValue });
  }, [aValue]);

  useEffect(() => {
    chrome.storage.local.get('aValue', function (items) {
      if (!chrome.runtime.error) {
        setAValue(items.aValue);
      }
    });
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="form-a">A Timing:</label>
        <input
          id="form-a"
          type="number"
          onChange={(e) => setAValue(e.target.value)}
          value={aValue}
        ></input>
      </div>
    </div>
  );
};

export default MainForm;
