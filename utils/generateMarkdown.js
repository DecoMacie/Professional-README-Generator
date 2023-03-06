// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # <Your-Project-Title>

  ## Description
  
  - ${data.description1};
  - ${data.description2};
  - ${data.description3};
  - ${data.description4}.
  

  ## Table of Contents (Optional)
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Tests](#tests)
  

  ## Installation
  
  ${data.installation}.
  

  ## Usage
  
  ${data.usage}
  
  For detailed step-by-step please relate to the video on the link below:
  ${data.usageVideo}
  
  
  ## License
  
  ${data.licence}  


  ## Credits
  
  ### Collaborators
  ${data.credCollaborators}
    
  ### Tutorials
  ${data.credTutorials}
  
  ---
  
  🏆 
  
  ## Contributing
  ${data.contributing}


  ## Tests
  
  ${data.test}


  ## Questions
  For additional questions please reach me on 
  - Email: ${data.email}.
  - GitHub: ${data.gitHub}.

`;
}


module.exports = generateMarkdown;
