// POC to connect to JIRA for report uploading
// pnpm install jira-client

// curl -D- -X GET -H "Authorization: Bearer <PERSONAL_ACCESS_TOKEN>" -H "Content-Type: application/json" "https://strive.devops.t-systems-service.com/jira/rest/api/2/issue/GAIAXPORTAL-202"

var JiraApi = require('jira-client');

var jira = new JiraApi({
  protocol: 'https',
  host: 'strive.devops.t-systems-service.com/jira',
  bearer: "<BEARER_ACCESS_TOKEN>",
  apiVersion: '2'
});

// Get issue ticket
jira.findIssue("GAIAXPORTAL-202").then(function(issue) {
    console.log(issue.fields.assignee.name);
})
.catch(err => {
    console.error(err);
});        
