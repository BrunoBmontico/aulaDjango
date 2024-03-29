const btnShow = document.getElementById('btn-show');
const btnBox = document.getElementById('container-box-btn');
const btnDelete = document.getElementById('delete');
const btnDontDelete = document.getElementById('dont-delete');
const modalContainer = document.getElementById('modal-container');
const btnYes = document.getElementById('anchor-ap');


btnShow.addEventListener('click', function(){
    if (btnBox.classList.contains('box-closed')){
        btnBox.classList.remove('box-closed');
        btnBox.classList.add('box-open');
    }else if (btnBox.classList.contains('box-open')){
        btnBox.classList.remove('box-open');
        btnBox.classList.add('box-closed');
    }
});

btnDelete.addEventListener('click', function(){
    if (modalContainer.classList.contains('modal-container-closed')){
        modalContainer.classList.remove('modal-container-closed');
        modalContainer.classList.add('modal-container-open');
    }
});
btnDontDelete.addEventListener('click', function(){
    if (modalContainer.classList.contains('modal-container-open')){
        modalContainer.classList.remove('modal-container-open');
        modalContainer.classList.add('modal-container-closed');
    }
});