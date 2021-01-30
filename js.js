const switchButton = document.querySelector('#btn-light');
 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('light');//toggle the HTML body the class 'light'
    switchButton.classList.toggle('dark');//toggle the HTML button with the id='switch' with the class 'dark'
  

if(document.body.classList.contains('light')){
    localStorage.setItem('light-mode','true');
} else{
    localStorage.setItem('light-mode','false');
    }
});

if(localStorage.getItem('light-mode') ==='true'){
    document.body.classList.add('light');
}else{
    document.body.classList.remove('light');
}