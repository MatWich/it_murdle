export const DATA = {
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
                    description: 'Likes to build stuff but for some unknown reasons throws big stack trace.'
                },
                {
                    id: '2',
                    name: 'Heavy Lifter Gopher',
                    image: '../assets/gopher_lifter.png',
                    description: 'He runs everything in this place no job or constainer will do anything without him.'
                },
                {
                    id: '3',
                    name: 'Fluffy',
                    image: '../assets/go-fuzz.png',
                    description: 'He like to play all kind of medival games. That is how he got his shield.'
                }
            ],
            places: [
                {
                    id: '1',
                    name: 'EC2',
                    image: '../assets/ec2.png',
                    description: 'Nobody knows how this place spawns and vanishes.'
                },
                {
                    id: '2',
                    name: 'Artifactory',
                    image: '../assets/arti.png',
                    description: 'A factory for artifacts but not for building.'
                },
                {
                    id: '3',
                    name: '.m2',
                    image: '../assets/m2.png',
                    description: 'Nobody know what can you find inside it.'
                }
            ],
            weapons: [
                {
                    id: '1',
                    name: 'InteliJ',
                    image: '../assets/ij.png',
                    description: 'Heavy IDE with lots of features.'
                },
                {
                    id: '2',
                    name: 'PR without reviewers',
                    image: '../assets/pr.png',
                    description: 'There is no color that won\'t came with it.'
                },
                {
                    id: '3',
                    name: 'Faulty RAM',
                    image: '../assets/mem.png',
                    description: 'Might cause objects to dissapear if too many.'
                },
            ],
            clues: [
                "The person staying on ec2 was left-handed;",
                "The person with Stackoverflow didn\'t like the person that was located in .m2;",
                "The person with Faulty RAM had white hair;",
                "Heavy Lifter Gopher carried a lot of new commits;",
                "The build was found half-finished in .m2"
            ],
            hint: "clue4 correct checks",
            additionalHint: "Same additional info that is not given directly by other clues",
            correctAnswer: {
                who: 'Cambrige Jenkins',
                where: '',
                when: '',
            } 
        
        }
    ]
}