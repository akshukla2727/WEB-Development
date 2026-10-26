// Immediately Invoked Function Expression

(function chai() {
    console.log(`DB Connected`);
}) ();

((username) => {
    console.log(`DB Connected Two ${username}`);
    
}) ("Aditya")