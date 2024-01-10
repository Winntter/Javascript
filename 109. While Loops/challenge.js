var count = 99

    while(count >= 0) {
        var bottleWord = "Bottles";

        if (count === 0 ) {
            return `Take one down and pass it around, no more bottles of beer on the wall.`
        } 
        if (count === 1) {
            bottleWord = "bottle"
        }

        console.log(`${count} ${bottleWord} of bear on the wall, ${count} ${bottleWord} of beer`);
	    count--;
        console.log(`Take one down and pass it around, ${count} ${bottleWord} of beer on the wall`);
        console.log("");
    };



