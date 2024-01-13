function solve(steps, length, speed) {

    let distance = steps * length;
    speed = speed / 3.6;

    let time = distance / speed;
    let rest = Math.floor(distance / 500);
    time += rest * 60;

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = Math.round((time % 3600) % 60);

    console.log(`${hours < 10 ? "0" : ''}${hours}:${minutes < 10 ? "0" : ''}${minutes}:${seconds < 10 ? "0" : ''}${seconds}`);

}

solve(4000, 0.60, 5)