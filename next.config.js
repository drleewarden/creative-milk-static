/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  env: {
    MARVEL: process.env.MARVEL_KEY || "",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}