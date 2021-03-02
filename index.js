function addingEventListener() {
  const input = document.getElementById('input');
  const div = document.getElementById('div5');
  
  function clickAlert() {
    alert('I was clicked!');
  
  }
  
  input.addEventListener('click', clickAlert);
  div.addEventListener('click', clickAlert);

}






