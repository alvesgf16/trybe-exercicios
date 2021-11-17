const title = document.getElementsByTagName('header')[0];
title.style.backgroundColor = '#54b16a';

const emergencyContainers = document.querySelectorAll('.emergency-tasks div');
const emergencySubtitles = document.querySelectorAll('.emergency-tasks h3');
const noEmergencyContainers = document.querySelectorAll('.no-emergency-tasks div');
const noEmergencySubtitles = document.querySelectorAll('.no-emergency-tasks h3');

for (let i = 0; i < emergencySubtitles.length; i += 1) {
  emergencyContainers[i].style.backgroundColor = '#f69e83';
  emergencySubtitles[i].style.backgroundColor = '#ae78f3';
  noEmergencyContainers[i].style.backgroundColor = '#f9db5e';
  noEmergencySubtitles[i].style.backgroundColor = '#232525';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#103533';
