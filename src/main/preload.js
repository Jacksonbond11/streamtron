// src/main/preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  navigateToUrl: (url) => ipcRenderer.send('navigateToUrl', url)
});
