function addingEventListener() {

const input = document.getElementById('button');

const clickAlert = () => alert('I was clicked!');

  input.addEventListener('click', clickAlert);
}

addingEventListener()