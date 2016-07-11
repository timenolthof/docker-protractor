FROM tippiq/node-base:develop

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
RUN cd /tmp && \
    npm install && \
    mkdir -p /opt/app && \
    cp -a /tmp/node_modules /opt/app/ && \
    rm -R /tmp/node_modules

RUN webdriver-manager update

RUN mkdir -p /opt/app/test-files

WORKDIR /opt/app
ADD . /opt/app

CMD npm start
