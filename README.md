# 77DiamondsTest

Project to test 77Diamonds evaluation.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v16.15.1` and `9.6.2` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.
Install Fiddler is you wish to capture de request.
Install Java 8 JDK in your computer, this is generate the report.

## Tests

To capture the request with fiddler just run the file: Fiddler.ps1

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.

## Report

Execute `npm run test ` - will execute already saving data for the report.
Execute `npm run allure:generate` - will generate the results folder
Execute `npm run allure:open` - will open a web page with the results
To clean old test files results, execute `npm run allure:clear`

Like this you can zip all files 'report-server' and send to the developer :)
