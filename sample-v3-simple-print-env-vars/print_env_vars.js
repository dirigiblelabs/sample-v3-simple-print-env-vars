var env = require('core/v3/env');
var response = require('http/v3/response');
	
var envVarsList = JSON.parse(env.list());
var envVarValue;
for(var envVarName in envVarsList) {
    envVarValue = envVarsList[envVarName]
	response.println(envVarName + '=' + envVarValue);
}	
response.flush();
response.close();
