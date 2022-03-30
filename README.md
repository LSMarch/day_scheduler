# day_scheduler

## psuedo-code

    
* create rows for standard business hours (9 rows)
    * hour and button column is col-1
    * input column is col-10
    * each row changes color based on time past, present, and future
        * function to track hours 
        * play with moment.js
            * how to track hours
                * startOf, rounds to start of hour/day
            * display today's date in .jumbotron
                * format(dddd, MMMM, Do)
        * if current hour > time block hour = past
        * if current hour = time block hour = present
        * if current hour > time block hour = past
* create columns for hour, input, and save button
    * input (text-area)
        * make persistant
            * pull from local storage
    * listen for clicks on save button
        * save to local.storage
