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
  
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      md
      ![alt text](assets/images/$)
      
  
  ## License
  
  ${data.licence}  


  ## Credits
  
  ### Collaborators
  
  ### Third-party
  
  ### Tutorials
  
  
  ---
  
  🏆 
  
  ## Contributing

  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.

  ## Questions
  For additional questions please reach me on 
  - Email: ${data.email}.
  - GitHub: ${data.gitHub}.

`;
}


module.exports = generateMarkdown;
