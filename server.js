:::writing{variant=“standard” id=“server_easy_copy”}
const express = require(“express”);
const puppeteer = require(“puppeteer-core”);

const app = express();
app.use(express.json());

// ROOT
app.get(”/”, (req,res)=>{
res.send(“Server is live 🚀”);
});

// IMAGE GENERATION
app.post(”/generate-image”, async (req,res)=>{
const {name,income,expenses,savings} = req.body;

const html = “” +
“” +
“WealthNova 🚀” +
“”+name+”’s Financial Card” +
“💰 Income: ₹”+income+”” +
“💸 Expenses: ₹”+expenses+”” +
“📈 Savings: ₹”+savings+”” +
“Powered by WealthNova” +
“”;

const browser = await puppeteer.launch({
args:[”–no-sandbox”,”–disable-setuid-sandbox”],
executablePath: “/usr/bin/chromium-browser”
});

const page = await browser.newPage();
await page.setContent(html);

const img = await page.screenshot();
await browser.close();

res.set({“Content-Type”:“image/png”});
res.send(img);
});

// PDF GENERATION
app.post(”/generate-pdf”, async (req,res)=>{
const {name,income,expenses,savings} = req.body;

const html = “” +
“WealthNova Report 🚀” +
“”+name+”” +
“Income: ₹”+income+”” +
“Expenses: ₹”+expenses+”” +
“Savings: ₹”+savings+”” +
“”;

const browser = await puppeteer.launch({
args:[”–no-sandbox”,”–disable-setuid-sandbox”],
executablePath: “/usr/bin/chromium-browser”
});

const page = await browser.newPage();
await page.setContent(html);

const pdf = await page.pdf({format:“A4”});
await browser.close();

res.set({
“Content-Type”:“application/pdf”,
“Content-Disposition”:“attachment; filename=report.pdf”
});

res.send(pdf);
});

// SERVER START
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(“Running on “ + PORT));
:::
