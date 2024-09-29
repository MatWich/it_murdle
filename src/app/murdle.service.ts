import { Injectable } from '@angular/core';
import { throws } from 'assert';
import { AccusationModel } from './accusation-dialog/acusationForm.model';

@Injectable({
  providedIn: 'root'
})
export class MurdleService {

    private currentMurdle: any; 

  DATA = {
    cases: [
            {
            id: '1',
            title: 'Treachery in Build Castle',
            introduction: 'Developer came back from the long journey of OoO. Just in the right time to find failed builds.',
            suspects: [
                {
                    id: '1',
                    name: 'Cambrige Jenkins',
                    image: '../../assets/256.png',
                    description: 'Likes to build stuff but for some unknown reasons throws big stack trace.',
                    characteristics: ['4\'9', 'left-handed', 'white hair']
                },
                {
                    id: '2',
                    name: 'Heavy Lifter Gopher',
                    image: '../assets/gopher_lifter.png',
                    description: 'He runs everything in this place no job or constainer will do anything without him.',
                    characteristics: ['5\'9', 'right-handed', 'bold']
                },
                {
                    id: '3',
                    name: 'Fluffy',
                    image: '../assets/go-fuzz.png',
                    description: 'He like to play all kind of medival games. That is how he got his shield.',
                    characteristics: ['5\'2', 'right-handed', 'blue hair']
                }
            ],
            places: [
                {
                    id: '1',
                    name: 'EC2',
                    image: '../assets/ec2.png',
                    description: 'Nobody knows how this place spawns and vanishes.',
                    characteristics: ['internet']
                },
                {
                    id: '2',
                    name: 'Artifactory',
                    image: '../assets/arti.png',
                    description: 'A factory for artifacts but not for building.',
                    characteristics: ['local']
                },
                {
                    id: '3',
                    name: '.m2',
                    image: '../assets/m2.png',
                    description: 'Nobody know what can you find inside it.',
                    characteristics: ['local']
                }
            ],
            weapons: [
                {
                    id: '1',
                    name: 'Stackoverflow',
                    image: '../assets/stackoverflow.png',
                    description: 'It comes with many objects.',
                    characteristics: ['heavy-weight', 'made of mistakes']
                },
                {
                    id: '2',
                    name: 'PR without reviewers',
                    image: '../assets/pr.png',
                    description: 'Great way to end friday shift.',
                    characteristics: ['light-weight', 'made of courage']
                },
                {
                    id: '3',
                    name: 'Faulty RAM',
                    image: '../assets/mem.png',
                    description: 'Might cause objects to dissapear.',
                    characteristics: ['light-weight', 'made of money grab']
                },
            ],
            clues: [
                {
                    id: 0,
                    info: "The person staying on ec2 was left-handed;",
                    answer: "This implies that Cambrige Jenkins was on EC2",
                },
                {
                    id: 1,
                    info: "The person with Stackoverflow didn\'t like the person that was located in .m2;",
                    answer: "Holder of Stackoverflow wasn't in .m2",
                },
                {
                    id: 2,
                    info: "The person with Faulty RAM had white hair;",
                    answer: "Cambridge Jenkins had a Faulty RAM",
                },
                {
                    id: 3,
                    info: "Heavy Lifter Gopher carried a lot of new commits;",
                    answer: "Heavy Lifter Gopher was in possesion of PR without reviewers",
                },
                {
                    id: 4,
                    info: "The build was found half-finished in .m2",
                    answer: "This means that the build failed in .m2",
                },             
            ],
            hint: "clue4 correct checks",
            additionalHint: "Same additional info that is not given directly by other clues",
            correctAnswer: {
                who: 'Cambrige Jenkins',
                how: 'Faulty RAM',
                where: '.m2',
            } 
        
        }
    ]
}

getMurdleById(id: string) {
    this.currentMurdle = this.DATA.cases.find(({id}) => id == id)
  return this.currentMurdle
}

checkAnswer(answer: AccusationModel) {
    console.log('answer')
    console.log(answer)
    console.log("correct")
    console.log(this.currentMurdle.correctAnswer)
    if (answer.how === this.currentMurdle.correctAnswer.how) {
        console.log("lol")
    }
    if(answer.who == this.currentMurdle.correctAnswer.who && answer.how == this.currentMurdle.correctAnswer.how && this.currentMurdle.correctAnswer.where == answer.where) {
        return true
    }
    return false
}



  constructor() { }
}
