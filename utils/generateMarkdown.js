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
  
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  

  ## Usage
  
  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      md
      ![alt text](assets/images/$)
      
  
  ## License
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  

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
  - For additional questions please reach me on ${data.email}.

`;
}


module.exports = generateMarkdown;
