# VNU Variable Name = Untouchable CupCake Online Application

This application is designed for the small business CupCake owner. The application is designed to make online ordering easy.

## Getting Started

To get started, visit the vnu github in order to download the necessary files for the project. Once the files are downloaded, the user can begin installation of the files using node.js. 

### Prerequisites / Required Software

This application uses Node.js along with sequelize.  The database used locally was MYSQL which was later migrated to JAWSDB as an online database platform. This application requires the installation of several dependencies.  Those include:

* sequelize, sequelize CLI
* dotenv
* express
* MYSQL2
* nodeMailer


```
To install dependencies use npm install <dependency>.
```

### Installing

In order to get this application running in development, after downloading the files.

*1. Run npm init in the command line.

*2. Open your MYSQL workbench, run the schema file to create your database.

```
DROP DATABASE IF EXISTS cupcakes;
CREATE DATABASE cupcakes;
USE cupcakes;
```
*3. Update the config.json file with your credentials for you local installation of MYSQL.

```
until finished
```

*4. To get the application up and running, in bash terminal, run the command to start the application at its entry point

```
node or nodemon server.js
```

In your browser, enter localhost:3000 access the application.

To begin, have the customer create a log in account which will keep track of each customers' account information. This account and password can be later used for logging in and also tied to the customer's orders. 

## Ordering cupcakes

After logging in, the user can begin ordering cupcakes via the order form. The user can selct from the speciality cupcakes the VNU offers.  Based on the quanity requested, the order total will updated.  On submit, this information will be sent to the database and a order confirmation email will be sent to the user. 


## Deployment

In order to use this system online, Heroku platform was used to deploy and host the application. JAWSDB was used for the database. Both require addition installation of dependencies for each Software platform.

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - Microsoft Web devlopment software 
* [MySQL](https://www.mysql.com/) - Open source database
* [Sequelize](https://sequelize.readthedocs.io/en/v3/) - Promise-based ORM for Node.js
* [Heroku](https://heroku.com) - Deployment platform for web based applications
* [jawsDB](https://www.jawsdb.com/) - Online Database service


## Authors

* **Alex Reyes** - team lead
* **Rana Saber** 
* **Trevia Griffin** 



## Acknowledgments

* 
* 
*

