const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://sonar.riachuelo.net:8080/',
        options : {
            'sonar.sources':  'src',
            'sonar.tests':  'tests',
            'sonar.inclusions'  :  '**',
            'sonar.test.inclusions':  'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx,**/*.spec.ts',
            'sonar.test.exclusions':  '**/*server.js,**/*server.ts',
            'sonar.typescript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml',
            'sonar.login':'',
            'sonar.password':''
        }
    }, () => {});