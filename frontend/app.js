import './styles/app.css';
import UI from './UI';

document.addEventListener('DOMContentLoaded', () =>{
    const ui = new UI();
    ui.renderCharacter();
})

document.getElementById('character-form')
.addEventListener('submit',e => {
    const name = document.getElementById('name').value;
    const race = document.getElementById('race').value;
    const Cclass = document.getElementById('Cclass').value;
    const level = document.getElementById('level').value;
    const strength = document.getElementById('strength').value;
    const dexterity = document.getElementById('dexterity').value;
    const constitution = document.getElementById('constitution').value;
    const inteligence = document.getElementById('inteligence').value;
    const wisdom = document.getElementById('wisdom').value;
    const charisma = document.getElementById('charisma').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('name',name);
    formData.append('race',race);
    formData.append('Cclass',Cclass);
    formData.append('level',level);
    formData.append('strength',strength);
    formData.append('dexterity',dexterity);
    formData.append('constitution',constitution);
    formData.append('inteligence',inteligence);
    formData.append('wisdom',wisdom);
    formData.append('charisma',charisma);
    formData.append('image',image[0]);

    const ui = new UI();
    ui.addNewCharacter(formData);
    ui.renderMesage('Personaje Creado','success',3000);
    e.preventDefault();
});

document.getElementById('characters-card')
    .addEventListener('click', e =>{
        if (e.target.classList.contains('delete')){
            const ui = new UI()
            ui.deleteCharacter(e.target.getAttribute('_id'));
            ui.renderMesage('Personaje Eliminado','danger',3000);
        }
        e.preventDefault();
    });