const fs = require("fs");
const pdfParse = require("pdf-parse");

const parsePDF = async (filePath) => {
  try {
    const buffer = fs.readFileSync(filePath);
    const data = await pdfParse(buffer);
    return data.text;
  } catch (err) {
    throw new Error("Unable to read PDF. Please upload a valid text-based PDF.");
  }
};

module.exports = parsePDF;