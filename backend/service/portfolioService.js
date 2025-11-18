import fs from "fs";

const data = JSON.parse(
  fs.readFileSync("data/portfolioData.json", "utf8")
);

export const getPortfolioData = () => data;
