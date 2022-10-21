const selectElement = document.querySelector('.scheme');

selectElement.addEventListener('change', (event) => {
  const resultJSON = document.querySelector('.result-json');
  const resultXML = document.querySelector('.result-xml');
  const resultCSV = document.querySelector('.result-csv');
  const resultCURL = document.querySelector('.result-curl');

  switch (event.target.value) {
    case "json":
      resultJSON.classList.remove('hide');
      resultXML.classList.add('hide');
      resultCSV.classList.add('hide');
      resultCURL.classList.add('hide');
      break;
    case "xml":
      resultXML.classList.remove('hide');
      resultJSON.classList.add('hide');
      resultCSV.classList.add('hide');
      resultCURL.classList.add('hide');
      break; 
    case "csv":
      resultCSV.classList.remove('hide');
      resultJSON.classList.add('hide');
      resultXML.classList.add('hide');
      resultCURL.classList.add('hide');
      break; 
    case "curl":
      resultCURL.classList.remove('hide');
      resultJSON.classList.add('hide');
      resultXML.classList.add('hide');
      resultCSV.classList.add('hide');
      break; 
    default:
      break;
  }
});