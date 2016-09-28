[![CircleCI](https://circleci.com/gh/artemv/authenticated-docs.svg?style=svg)](https://circleci.com/gh/artemv/authenticated-docs)
[![Code Climate](https://codeclimate.com/github/artemv/authenticated-docs/badges/gpa.svg)](https://codeclimate.com/github/artemv/authenticated-docs)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## What is it
A simple Rails app with Devise authentication to serve static docs generated with a tool like [MkDocs](http://www.mkdocs.org/).
Static html is served by [HighVoltage](https://github.com/thoughtbot/high_voltage) customized to serve pathes
containing whitespaces and dir pathes missing 'index' filename. [RailsAdmin](https://github.com/sferik/rails_admin) is used for users administration.

## Usage
This assumes you have a docs-building project in Git, the built docs are in 'site' directory and you want to deploy it
to Heroku.
* Install Node.JS (v5.1 or higher)
* Change current dir to your project: `cd my-docs-project`
* Install authenticated-docs and couple additional tools:
```
npm install authenticated-docs gh-pages gulp gulp-debug
```
* Copy docs files to authenticated-docs dirs:
```
./node_modules/.bin/gulp --gulpfile node_modules/authenticated-docs/Gulpfile.js --cwd ./ prepare
```
* Publish the prepared dir to 'deploy' Git branch of your docs project:
```
./node_modules/gh-pages/bin/gh-pages -d node_modules/authenticated-docs -b deploy
```
* Switch to the deploy branch:
```
# first time
git fetch && git checkout -b deploy origin/deploy
# next time
git fetch && git checkout deploy && git reset --hard origin/deploy
```
* Create a my-docs app at Heroku (use whatever app name you like)
* Provision the Heroku app with Sendgrid addon for sending auth emails like the one for 'forgot password' function
* set up config vars at heroku based on
[.env.example](https://raw.githubusercontent.com/artemv/authenticated-docs/master/.env.example) file of this project
* Push the deploy branch to Heroku
```
git remote add heroku https://git.heroku.com/my-docs.git # use proper path for your app
git push -f heroku HEAD:master
heroku run rake db:migrate
heroku restart
```

## Local installation
This section is for those who want to make modifications to this app.
* Clone the master repo: `git clone https://github.com/artemv/authenticated-docs.git && cd authenticated-docs`
* Copy .env.example file to .env and change values as appropriate for your local env
* Install Ruby 2.3.1 from https://www.ruby-lang.org/en/downloads/ or via RVM (https://rvm.io/)
* Install Bundler and dependencies:
```
gem install bundler
bundle install
```
* Install NPM dependencies: `npm install`
* generate site docs to some dir like 'site'
* copy the docs pages to relevant dirs: `./node_modules/.bin/gulp prepare`
* run local webserver:
```
rails s
```
* open the app in browser: http://localhost:3000
