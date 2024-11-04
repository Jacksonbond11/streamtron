// src/main/getSports.js (Create a new file for this if needed)
const { chromium } = require("playwright");

async function getSports() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://v3.sportsurge.to");

  const rows = page.locator(".MaclariListele");
  const games = [];

  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {

    const link = await rows.nth(i).getAttribute("href")
    // Get teams
    const rowText = await rows
      .nth(i)
      .locator(":scope > div")
      .first()
      .textContent();
  
    
    const formattedText = rowText.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();
    const addVs = formattedText.replace("  ", " vs ");
    const teams = addVs.split(" vs ");
    const team1Full = teams[0] || "Unknown Team 1"; // Default in case of missing data
    const team2Full = teams[1] || "Unknown Team 2"; // Default in case of missing data
    const team1Arr = team1Full.split(" ")
    const team1Short = team1Arr[team1Arr.length - 1]
    const team2Arr = team2Full.split(" ")
    const team2Short = team2Arr[team1Arr.length - 1]



    // Get sport
    const sportText = await rows
      .nth(i)
      .locator(":scope > div")
      .nth(1)
      .textContent();
  
    let formattedSportText = sportText.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();
    formattedSportText = formattedSportText.replace("NCAA Men", "NCAA")
  
    // Get schedule
    const scheduleText = await rows
      .nth(i)
      .locator(":scope > div")
      .nth(2)
      .textContent();
  
    const formattedSchedule = scheduleText.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();
  
    games.push({ link: link, team1Full: team1Full, team1Short: team1Short, team2Full: team2Full, team2Short: team2Short, sport: formattedSportText, time: formattedSchedule });
  }
  

  await browser.close()
  return games;
}

module.exports = { getSports };
