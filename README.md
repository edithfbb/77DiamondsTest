# 77DiamondsTest

Project to test a webpage from 77Diamonds evaluation.

## Pre-requirements

It is required to have Node.js, npm installed and java jdk 8 to run this project.

> I used versions `v16.15.1` and `9.6.2` of Node.js and npm, respectively. I suggest you use the same or later versions.

It is optional to install fiddler to capture and debugg the requests.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

To capture the request with fiddler just run the file: `Fiddler.ps1`, run it before start the tests.

Run `npm run test` to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.

## Report

Execute `npm run test ` - will execute already saving data for the report.

Execute `npm run allure:generate` - will generate the results folder.

Execute `npm run allure:open` - will start a server and open a web page with the results.

To clean old test files results, execute `npm run allure:clear`.
