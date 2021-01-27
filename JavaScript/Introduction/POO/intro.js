class Instructor {
    constructor({name, role = 'assistant'}) {
        this.name = name;
        this.role = role;
    }

    renderDetails() {
        console.log(`${this.name}: ${this.role}`);
    }

    static helloWorld() {
        console.log('Hi there');
    }
}

const jon = new Instructor({name : 'Jon Snow'});
//console.log(jon);
//console.log(jon.name);

const brayden = new Instructor({name: 'Brayden', role: 'teacher'});
jon.renderDetails();
brayden.renderDetails();

Instructor.helloWorld();