class SmartHike {
    username;
    goals = {};
    listOfHikes = [];
    resources = 100;
    constructor(username) {
        this.username = username
    }

    addGoal(peak, altitude) {
        let isFound = false;
        for (let goal in this.goals) {
            if (goal == peak) {
                isFound = true;
            }
        }
        if (isFound) {

            return `${peak} has already been added to your goals`
        } else {

            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        }

    }

    hike(peak, time, difficultyLevel) {

        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.goals.hasOwnProperty(peak) && this.resources == 0) {
            throw new Error(`You don't have enough resources to start the hike`);
        }

        let difference = this.resources - (time * 10);

        if (difference < 0) {
            return `You don't have enough resources to complete the hike`
        } else {
            this.resources -= (time * 10);
            this.listOfHikes.push({ peak, time, difficultyLevel });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }
    }

    rest(time) {

        if (((time * 10) + this.resources) >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        } else {
            this.resources += (time * 10);
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }

    }

    showRecord(criteria) {

        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`
        }

        if (criteria == 'all') {
            let result = ['All hiking records:'];
            for (let { peak, time, difficultyLevel } of this.listOfHikes) {
                result.push(`${this.username} hiked ${peak} for ${time} hours`)
            }
            return result.join('\n');
        } else {
            let data = this.listOfHikes.filter((p) => p.difficultyLevel == criteria).sort((a, b) => a.time - b.time);

            if (data.length == 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            } else {
                return `${this.username}'s best ${criteria} hike is ${data[0].peak} peak, for ${data[0].time} hours`
            }

        }

    }

}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
