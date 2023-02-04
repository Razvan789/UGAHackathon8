# wandr Web App

This is an app that will let you connect with groups to travel with

# Backend
###  Setup
Download xampp and start up the apache and mySQL server 

Delete the wandr Database if it is present and import the wandr.sql file in /backend/ folder


Make sure you have python installed before continuing 
### Set up venv
python3 -m venv .venv

-or-

python -m venv .venv

.venv/Scripts/Activate

### Packages
pip install Flask

pip install flask-mysql

pip install python-dotenv

pip install -U flask-cors

### Run Backend Server

flask --app wandrDB run

