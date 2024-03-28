const btnShow = document.getElementById('btn-show');
const btnBox = document.getElementById('container-box-btn');

btnShow.addEventListener('click', function(){
    if(btnBox.classList.contains('box-closed')){
        btnBox.classList.remove('box-closed');
        btnBox.classList.add('box-open');
    }else if (btnBox.classList.contains('box-open')){
        btnBox.classList.remove('box-open');
        btnBox.classList.add('box-closed');
    }
});