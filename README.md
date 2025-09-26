# **IBM Frontend Developer Capstone Project**

## **Overview**
Stay Healthy Inc: a medical appointment booking website to provide access to medical care in remote areas. 
This website is designed to allow patients to schedule appointments with healthcare providers easily.
The platform enables users to view available slots, select providers, manage their appointments thorugh their online accounts, and give feedback to the doctor's about their care.

## **Features Include**
* Landing page with a navigation bar directing users to the appointments, reviews, login, & signup pages.
* Services include instant consultation, booking an appointment, self checkup, as well as health tips and guidance.
* Login page to a private account that keeps track of your appointments, reports, and other medical information.
* Search bar to assist users in finding the appropriate doctor in their location to book an appointment with.
* Appointment booking page featuring multiple doctors, their specialties, ratings, and their experience details.
* Reviews page allowing users to leave feedback after their appointment and rate their doctors.

## **Getting Started**

* After cloning this repository, open a new terminal and run the following lines in the terminal:
```
cd frontend_developer_capstone_project 
npm install
npm i react-router-dom
npm install --save-dev web-vitals
npm i reactjs-popup
npm install dotenv
cd server
npm install
```

* Create a MongoDB server and copy the MONGO_HOST and MONGO_PASSWORD from the "Connection Information" tab.
  
* Create a new file in the server folder, name it `.env`, and paste in this line: <br>
<br> ```MONGO_URI=mongodb://root:<MONGO_PASSWORD>@<MONGO_HOST>:27017``` <br>
<br> Make sure this file is in the server folder, not in the root folder.
  
* Paste the MONGO_HOST and MONGO_PASSWORD you copied into the appropriate locations <br>
of the MONGO_URI line, replacing `<MONGO_HOST>` and `<MONGO_PASSWORD>`.

* Run `node index` in the terminal to start the server.
<br>
* Next, open a new terminal and run the folllowing lines in the terminal:

```
cd frontend_developer_capstone_project
npm start
```

* Finally, go to the Skills Network Toolbox and launch the application on port `3000` to view it in the browser.


