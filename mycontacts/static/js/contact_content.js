/* caixa de btns */
const btnShow = document.getElementById('btn-show');
const btnBox = document.getElementById('container-box-btn');

/* caixa de btns */
btnShow.addEventListener('click', function(){
    if (btnBox.classList.contains('box-closed')){
        btnBox.classList.remove('box-closed');
        btnBox.classList.add('box-open');
    }else if (btnBox.classList.contains('box-open')){
        btnBox.classList.remove('box-open');
        btnBox.classList.add('box-closed');
    }
});

/* btn para abrir o modal de confirmação */
const btnDelete = document.getElementById('delete');
/* modal de confirmação de exclusão */
const modalContainer = document.getElementById('modal-container');

/* btn para nao excluir */
const btnDontDelete = document.getElementById('dont-delete');

/* modal de confirmação de exclusão */
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

const btnEdit = document.getElementById('edit');
const modalEdit = document.getElementById('edit-container');
const btnDontEdit = document.getElementById('dont-edit');

btnEdit.addEventListener('click', function(){
    if (modalEdit.classList.contains('edit-container-closed')){
        modalEdit.classList.remove('edit-container-closed');
        modalEdit.classList.add('edit-container-open');
    }
});
btnDontEdit.addEventListener('click', function(){
    if (modalEdit.classList.contains('edit-container-open')){
        modalEdit.classList.remove('edit-container-open');
        modalEdit.classList.add('edit-container-closed');
    }
});