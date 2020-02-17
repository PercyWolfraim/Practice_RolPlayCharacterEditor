class CharacterService {
    
    constructor(){
        this.URI='http://localhost:3000/api/characters'
    }

    async getCharacter(){
        const response = await fetch(this.URI);
        const characters = await response.json();
        return characters;
    }

    async postCharacter(character){
        const res = await fetch(this.URI, {
            method: 'POST',
            body: character
        });
        const data = await res.json();
        console.log(data);
    }

    async deleteCharacter(characterID){
        const res = await fetch(`${this.URI}/${characterID}`,{
            headers:{
                'Content-Type': 'application/son'
            },
            method: 'DELETE'
        
        });
        const data = await res.json();
        console.log(data);
    }


}

export default CharacterService;