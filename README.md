Docker Protractor
=================

Protractor image which will perform tests against the Chrome browser.

1. Mount the parent directory containing your spec-files to /opt/app/test-files

        volumes:
            - ./my-app:/opt/app/test-files:rw
        
2. Optionally override the pattern that is used to discover spec files

        environment:
          - PROTRACTOR_SPECS=./test-files/src/**/*.e2e.js

3. Link the application server

        links:
          - app

4. Set the URL of your tests

        network_mode: "host"
        environment:
          - PROTRACTOR_BASE_URL=http://localhost:3003
