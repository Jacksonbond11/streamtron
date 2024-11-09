const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { navigateToUrl } = require("./playwright-script");
const { getSports } = require("./get-sports");

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile(path.join(__dirname, "../renderer/index.html"));
}

app.whenReady().then(createWindow);

ipcMain.on("navigateToUrl", async (event, url) => {
  console.log("Received URL from renderer:", url); // Should log the URL
  if (!url) {
    console.error("No URL received from renderer!");
    return;
  }

  try {
    await navigateToUrl(url);
    console.log(`Playwright script completed for URL: ${url}`);
  } catch (error) {
    console.error("Error running Playwright script:", error);
  }
});

// Handle the getSports function
ipcMain.handle("getSports", async () => {
  const sportsData = await getSports()
  return sportsData;
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
