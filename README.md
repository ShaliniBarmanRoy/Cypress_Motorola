Steps to run test cases for both E2E and Component Testing:

Component Testing:

a. Clone the cypress-test-main project
b. Navigate to project path and run npm install to install the dependencies
c. Install Cypress using npm install cypress --save-dev
d. Open Cypress using  npx cypress open
e. Configure, if required
f. Go to terminal and execute the below command:
npx cypress run --component -b <browsername>


E2E Testing:
a. Clone the E2E Testing project
b. Navigate to project path and run npm install to install the dependencies
c. Install Cypress using npm install cypress --save-dev
d. Open Cypress using  npx cypress open
e. Configure, if required
f. Change directory to cypress-test-main project
g. Execute the below commands to start the application
	npm install
	npm run dev
h. Once application is started open the terminal of the e2e project and run below command
	.\node_modules\.bin\cypress.cmd run --headed -b chrome
	for headless mode run the command
	.\node_modules\.bin\cypress.cmd run -b chrome
i . A html report and json report will be generated under "reports" folder alomg with screenshots under "screenshots" folder



Note: Please find "Test_Results" folder for the screenshots and report