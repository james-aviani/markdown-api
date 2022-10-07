const selectElement = document.querySelector('.scheme');

selectElement.addEventListener('change', (event) => {
  const resultJSON = document.querySelector('.result-json');
  const resultXML = document.querySelector('.result-xml');
  const resulCSV = document.querySelector('.result-csv');
  const resultCURL = document.querySelector('.result-curl');
  console.log('testing')
  switch (event.target.value) {
    case "json":
      resultJSON.classList.remove('hide');
      resultXML.classList.add('hide');
      resulCSV.classList.add('hide');
      resultCURL.classList.add('hide');
      break;
    case "xml":
      resultXML.classList.remove('hide');
      resultJSON.classList.add('hide');
      resulCSV.classList.add('hide');
      resultCURL.classList.add('hide');
      break; 
    case "csv":
      resulCSV.classList.remove('hide');
      resultJSON.classList.add('hide');
      resultXML.classList.add('hide');
      resultCURL.classList.add('hide');
      break; 
    case "curl":
      resultCURL.classList.remove('hide');
      resultJSON.classList.add('hide');
      resultXML.classList.add('hide');
      resulCSV.classList.add('hide');
      break; 
    default:
      break;
  }
});