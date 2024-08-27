export class AccusationModel {
    who: string;
    how: string;
    where: string;

    areAllFilled() {
        return this.who != '--Select--' && this.where != '--Select--' && this.how != '--Select--';
    }

    constructor(who: string = '--Select--', how: string = '--Select--', where: string = '--Select--') {
        this.how = how;
        this.who = who;
        this.where = where;
    }
}