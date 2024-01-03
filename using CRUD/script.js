//create, read, update, delete

function submit() {
  var dataEntered = retrieveData();
  var readData = readingDataFromLocalStorage(dataEntered);
  console.log(readData);
  //insert(readData);
}

//create
//retrieving data from form
function retrieveData() {
  var name1 = document.getElementById("name").value;
  var job = document.getElementById("job").value;
  var exp = document.getElementById("exp").value;
  var arr = [name1, job, exp];
  return arr;
}

//read
// data in local storage
function readingDataFromLocalStorage(dataEntered) {
  // storing data in local storage

  var n = localStorage.setItem("Name", dataEntered[0]);
  var j = localStorage.setItem("Job", dataEntered[1]);
  var e = localStorage.setItem("Experience", dataEntered[2]);

  //getting  values from local to table
  var n1 = localStorage.getItem("Name", n);
  var j1 = localStorage.getItem("Job", j);
  var e1 = localStorage.getItem("Experience", e);
  var arr = [n1, j1, e1];
  return arr;
}
