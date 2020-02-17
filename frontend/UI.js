import CharacterService from './services/CharacterServices';
import {format} from 'timeago.js';

const characterService = new CharacterService();


class UI{

    async renderCharacter() {
        const characters = await characterService.getCharacter();
        const charactersContainer = document.getElementById('characters-card');
        charactersContainer.innerHTML = '';
        characters.forEach(character => {
            const div = document.createElement('div');
            div.className = '';
            div.innerHTML = `
                <div class = "card m-2" >
                    <div class = "row">
                        <div class = "col-md-4">
                            <img src = "http://localhost:3000${character.imagePath}" alt = "" class = "img-fluid"/>
                        </div>
                        <div class = "col-md-8">
                            <div class = "card-block px-2">
                                <h4 class = "card-title">${character.name}</h4>
                                <p class = "card-text">${character.Cclass}</p>
                                <p class = "card-text">Race: ${character.race}</p>
                                <p class = "card-text">Strength: ${character.strength}</p>
                                <p class = "card-text">Dexterity: ${character.dexterity}</p>
                                <p class = "card-text">Constitution: ${character.constitution}</p>
                                <p class = "card-text">Inteligence: ${character.inteligence}</p>
                                <p class = "card-text">Wisdom: ${character.wisdom}</p>
                                <p class = "card-text">Charisma: ${character.charisma}</p>
                                <a class = "btn btn-danger delete" _id = "${character._id}">Eliminar</a>
                            </div>
                        </div>
                    </div>
                    <div class = "card-footer">
                        ${format(character.created_at)}
                    </div>
                </div>

            `;
            charactersContainer.appendChild(div);
        });
    }

    async addNewCharacter(character) {
        await characterService.postCharacter(character);
        this.clearCharacterForm();
        this.renderCharacter();
    }

    clearCharacterForm() {
        document.getElementById('character-form').reset();
    }

    async deleteCharacter(characterID) {
        await characterService.deleteCharacter(characterID);
        this.renderCharacter();
    }

    renderMesage(message , colorMessage , secondsToRemove){
        const div = document.createElement('div');
        div.className = `alert alert-${colorMessage} message`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.col-md-4');
        const characterForm = document.querySelector('#character-form'); 
        container.insertBefore(div, characterForm);
        setTimeout(()=> {
            document.querySelector('.message').remove();
        },secondsToRemove)
    }

}

export default UI;