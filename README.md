[![CircleCI](https://circleci.com/gh/artemv/authenticated-docs.svg?style=svg)](https://circleci.com/gh/artemv/authenticated-docs)
[![Code Climate](https://codeclimate.com/github/artemv/authenticated-docs/badges/gpa.svg)](https://codeclimate.com/github/artemv/authenticated-docs)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## What is it
A simple Rails app with Devise authentication to serve static docs generated with a tool like [MkDocs](http://www.mkdocs.org/).
Static html is served by [HighVoltage](https://github.com/thoughtbot/high_voltage) customized to serve pathes
containing whitespaces and dir pathes missing 'index' filename.

## Local installation

* Clone the master repo: `git clone https://github.com/artemv/authenticated-docs.git && cd authenticated-docs`
* Copy .env.example file to .env and change values as appropriate for your local env
* Install Ruby 2.3.1 from https://www.ruby-lang.org/en/downloads/ or via RVM (https://rvm.io/)
* Install Bundler and dependencies:
```
gem install bundler
bundle install
```
* Install Node.JS (v5.1 or higher)
* Install NPM dependencies: `npm install`
* generate site docs to some dir like 'site'
* copy the docs pages to relevant dirs: `./node_modules/.bin/gulp prepare`
* run local webserver:
```
rails s
```

## Deployment
* Create a my-docs app at Heroku (use whatever app name you like)
* Fork the https://github.com/artemv/authenticated-docs repo
* Follow steps from 'Local installation' section, replacing git url with the one of your fork
* (In your local directory of authenticated-docs) publish the prepared dirs to 'deploy' Git branch:
```
./node_modules/gh-pages/bin/gh-pages -d . -b deploy
```
* Switch to the deploy branch:
```
# first time
git fetch && git checkout -f -b deploy origin/deploy
# next time
git fetch && git checkout -f deploy && git reset --hard origin/deploy
```
* Provision the Heroku app with Sendgrid addon for sending auth emails like the one for 'forgot password' function
* set up config vars at heroku from .env.example file
* Push the deploy branch to Heroku
```
git remote add heroku https://git.heroku.com/my-docs.git # user proper path for your app
git push -f heroku HEAD:master
```
You're all set!
