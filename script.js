var addToDoButton=document.getElementById('addToDo');
var toDoContainer=document.getElementById('toDoContainer');
var inputField=document.getElementById('inputField');

addToDoButton.addEventListener('click',()=>{
    //  on vérifie que l'input n'est pas vide
    if(inputField.value!=""){
        //  on crée un paragraphe
        var paragraphe= document.createElement('p');
      

    }
    paragraphe.classList.add('paragraphe_style');

    // valorisé ce paragraphe avec le contenu de l'input
    paragraphe.innerText=inputField.value;
    //  insérer le paragraphe dans l'élement toDoContainer
    toDoContainer.appendChild(paragraphe);
    
    //  vidé l'input quand le paragraphe est ajouté
    inputField.value="";

    //  barré le pparagraphe si on clique dessus
    paragraphe.addEventListener('click',()=>{
        paragraphe.classList.add('paragraph-click');
    })

    //  on supprime le paragraphe si on double clique
    paragraphe.addEventListener('dblclick',()=>{
        toDoContainer.removeChild(paragraphe);
    })
    
})