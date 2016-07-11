Docker Protractor
=================

Protractor image which will perform tests against the Chrome browser.

1. Mount the parent directory containing your spec-files to /opt/app/test-files

    volumes:
        - ./my-app:/opt/app/test-files:rw

2. Set the URL of your tests

    environment:
        - PROTRACTOR_BASE_URL=http://localhost:3003
