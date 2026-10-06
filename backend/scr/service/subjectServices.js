import Subject from "../entities/subject";
import SubRepo from "../repositories/subRepo";



export default class subjectServices{

    #userId // who services are for 

    constructor(userId){
        this.#userId = userId; 
        
    }

    viewSubs(){
        return SubRepo.viewAllSubs(this.#userId) 
    }

    createSubject(name){
        if (SubRepo.subNameAvaliable(this.#userId, name)){

            const subId = SubRepo.addSubToDB(this.#userId, name); 

            return new Subject(subId, this.#userId, name, []) 

        } else {
            return 'Sub Name Already In Use'
        }
    }

    // pass the subject object 
    renameSub(sub, newName){
        if (SubRepo.updateSubName(sub.id, newName) == 'Success'){
            return sub.rename(newName)
        } else {
            return 'Name Already In Use '
        }
    } 

    getSubInfo(subID){
        const subInfo = SubRepo.getSubInfoForUserSub(this.#userId, subID)
        if (subInfo == 'No Sub'){
            return subInfo 
        } else {
            return new Subject(subInfo.id, subInfo.user, subInfo.name, subInfo.decks)
        }
    }
}