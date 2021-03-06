# Budget-Trackers

## License
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
```
Full stack application for tracking expenses over time. Every instance of income or expense is logged by the user, and the data is then represented on the chart for easy visualization of total income over time. The application is built using HTML, CSS, and JavaScript for the client side. On the backend, the application uses Express for the server, Mongoose for the ODM, and MongoDB for the database.

In addition, this is a progressive web application that the user can download to their desktop to use locally. The application is also able to function offline through the use of IndexedDB as a temporary database until network connection is reestablished to post the pending data to the Mongo database.
```
## Deployed Link

[Heroku Link](https://serene-grand-teton-68663.herokuapp.com/)

[Github Link](https://github.com/shaimajobran/Budget-Tracker)




## User story
```
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling
```
## Acceptance Criteria
```
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.
```
## Languages Used
```
* JavaScript
* MongoDB
* HTML
* CSS
```
## Node Libraries Used
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Express](https://www.npmjs.com/package/express)
- [Compression](https://www.npmjs.com/package/compression)

See [package.json](./package.json) for full list of dependencies.

## Additional Libraries
- [Chart.js](https://www.chartjs.org)
- [Font Awesome](https://fontawesome.com)

## SCREENSHOTS 
![Home](public/images/3.jpg)

![Alt text](public/images/2.jpg)
![Herokuscreenshots](public/images/4.jpg)

## Contact
If you have any questions about the repo, contact me at [shaimajobran](shaimajobran22@gmail.com).


