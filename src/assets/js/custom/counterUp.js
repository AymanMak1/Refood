//import $ from 'jquery'
//import jQuery from 'jquery'
// :: 9.0 COUNTERUP ACTIVE CODE
export default function counter(){
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
}

/*
export default function counter(){

        const counters = document.querySelectorAll('.counter');
        const speed = 1500; // The lower the slower
        console.log(scrollY)
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
        
                // Lower inc to slow and higher to slow
                const inc = target / speed;
        
                // console.log(inc);
                // console.log(count);
                if(window.scrollY >= 190){
                     // Check if target is reached
                    if (count < target) {
                        // Add inc to count and output in counter
                        let currentCounter = count + inc;
                        counter.innerText = currentCounter.toFixed(2);
                        // Call function every ms
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target;
                    }
                }
            };
        
            updateCount();
        });
        
}
*/