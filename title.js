$(document).ready(function() {
    var titles = [
        "Grow-Unity Private Server",
        "Gacha Banner",
        "Stable Economy",
        "No Fake Online",
        "Join Now!"
    ];
    var index = 0;
    var minTypingSpeed = 80; 
    var maxTypingSpeed = 150;
    var minDeletingSpeed = 30;
    var maxDeletingSpeed = 100; 
    var pauseBetweenTitles = 4000;

    function getRandomSpeed(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function typeTitle(title, callback) {
        var currentTitle = '';
        var charIndex = 0;

        function typeChar() {
            if (charIndex < title.length) {
                currentTitle += title.charAt(charIndex);
                document.title = currentTitle;
                charIndex++;
                setTimeout(typeChar, getRandomSpeed(minTypingSpeed, maxTypingSpeed));
            } else {
                setTimeout(callback, pauseBetweenTitles);
            }
        }
        typeChar();
    }

    function deleteTitle(callback) {
        var currentTitle = document.title;
        var charIndex = currentTitle.length;

        function deleteChar() {
            if (charIndex > 0) {
                currentTitle = currentTitle.slice(0, -1);
                document.title = currentTitle;
                charIndex--;
                setTimeout(deleteChar, getRandomSpeed(minDeletingSpeed, maxDeletingSpeed));
            } else {
                callback();
            }
        }
        deleteChar();
    }

    function cycleTitles() {
        typeTitle(titles[index], function() {
            deleteTitle(function() {
                index = (index + 1) % titles.length;
                cycleTitles();
            });
        });
    }

    cycleTitles(); // Start the title animation
});
