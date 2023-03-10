function solve(input) {

    let pattern = /\+359\s2\s\d{3}\s\b\d{4}\b|\+359\-2\-\d{3}\-\b\d{4}\b/g;

    let validPhone = [];
    let match = pattern.exec(input);

    while (match != null) {
        validPhone.push(match[0]);
        match = pattern.exec(input);
    }
    console.log(validPhone.join(', '));
}
// solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");

solve("+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222");