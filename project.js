function displayTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, '0');        
  let seconds = now.getSeconds().toString().padStart(2, '0');
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours.toString().padStart(2, '0');
  let timeString = hours + ':' + minutes + ':' + seconds + ampm;
  document.getElementById('time-display').innerText = timeString;
}
setInterval(displayTime, 1000);