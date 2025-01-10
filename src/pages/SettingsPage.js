import React, { useState, useEffect } from 'react';

 function SettingsPage({theme, fontFamily, fontSize, allowSave, prebuiltTheme, setTheme, setFontFamily, setFontSize, setAllowSave, setPrebuiltTheme }) {
     const [localTheme, setLocalTheme] = useState(theme);
    const [localFontFamily, setLocalFontFamily] = useState(fontFamily);
     const [localFontSize, setLocalFontSize] = useState(fontSize);
  const [localAllowSave, setLocalAllowSave] = useState(allowSave);
    const [localPrebuiltTheme, setLocalPrebuiltTheme] = useState(prebuiltTheme);

  useEffect(() => {
    setLocalTheme(theme);
    setLocalFontFamily(fontFamily);
   setLocalFontSize(fontSize);
     setLocalAllowSave(allowSave);
    setLocalPrebuiltTheme(prebuiltTheme);

   }, [theme, fontFamily, fontSize, allowSave, prebuiltTheme]);


    const handleThemeChange = (event) => {
       setLocalTheme(event.target.value);
     setTheme(event.target.value);
};

const handleFontChange = (event) => {
   setLocalFontFamily(event.target.value);
     setFontFamily(event.target.value);
};

const handleSizeChange = (event) => {
setLocalFontSize(parseInt(event.target.value));
setFontSize(parseInt(event.target.value));
};

const handleSaveChange = (event) => {
     setLocalAllowSave(event.target.checked);
      setAllowSave(event.target.checked)
};

const handleThemeChoice = (event) => {
  setLocalPrebuiltTheme(event.target.value);
    setPrebuiltTheme(event.target.value);
}
return (
        <div style={{display: 'flex', flexDirection:'column', flex: 1}}>
         <h1>Settings</h1>
          <div>
                <label>Theme:</label>
              <select value={localTheme} onChange={handleThemeChange}>
                   <option value="system">System Default</option>
                   <option value="light">Light</option>
                 <option value="dark">Dark</option>
                   <option value="pure-dark">Pure Dark</option>
              </select>
        </div>
        <div>
             <label>Font:</label>
             <select value={localFontFamily} onChange={handleFontChange}>
                  <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                   <option value="Verdana">Verdana</option>
            </select>
       </div>
       <div>
              <label>Font Size:</label>
            <input
                   type="number"
                   value={localFontSize}
                 onChange={handleSizeChange}
            />
       </div>
     <div>
            <label>Allow Saving Files</label>
             <input
                   type="checkbox"
                   checked={localAllowSave}
                  onChange={handleSaveChange}
               />
        </div>
         <div>
              <label>Theme Options</label>
            <select value={localPrebuiltTheme} onChange={handleThemeChoice}>
                <option value="teal">Teal</option>
                 <option value="purple">Purple</option>
            </select>
       </div>
</div>
   );
}

export default SettingsPage;