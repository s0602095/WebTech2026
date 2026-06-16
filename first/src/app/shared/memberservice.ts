import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Memberservice {
    private members = [];
    getMembers(): any{
        
        fetch('members.json')
        .then( response => response.json())
        .then(jsonDate => {
            this.members = jsonDate
            console.log('im service : ' , this.members)
            return this.members
        })
    }
}
