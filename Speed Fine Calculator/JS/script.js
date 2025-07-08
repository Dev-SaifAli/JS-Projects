function calculateFine() {

        let speed = parseInt(document.getElementById('userSpeed').value);
        let message;
        if (!speed || speed < 0) {
            document.getElementById('message-text').innerHTML = '<h3 class="text-warning">Please enter a valid speed above 0</h3>'
            return;
        }
        if (speed > 120) {
            message = '<h3 class = "text-danger" > You\'re fined 15000PKR! </h3>'

        } else {
            message = '<h3 class ="text-success">Safe Driving</h3>'

        }
        document.getElementById('message-text').innerHTML = message;
        document.getElementById('userSpeed').value = '';


    }