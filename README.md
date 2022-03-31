# day_scheduler

## Why?

I created this day planner to help me keep track of what I have to do throughout the day!

1) The heading displays the current time and date.

2) The day is based on a trdational work day, if you're working 9-5.
    
3) The planner is **color coded** so you can easily see what tasks need to be completed ASAP, which you have some time for, and which you've missed.

4) You can save, add, change, and delete whatever tasks you need, just hit save so you don't forget!
    *Tasks are saved until they're deleted* 



##### psuedo-code
    
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
