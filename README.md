# test-e2e

> Based project to test applications to end end with nightwatch, phantomjs and selenium web driver

## Installation

### Platform & tools

    sudo npm install -g nightwatch

### Get the Code

    git clone https://github.com/seperez/test-e2e.git

### Install dependencies

    cd test-e2e
    sudo npm install


## Run

Run all the tests once using phantomjs:

    nightwatch

Run all the tests once using chrome:

    nightwatch -e chrome

Run a group of the tests once using phantomjs. The name of the subfolder in the folder "tests" defines the group name:

    nightwatch -g search


For more information about configuration or different ways of running tests, visit the official site of nightwatch:

http://nightwatchjs.org/
