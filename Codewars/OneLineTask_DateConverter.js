/*
* Given a date period in the following format :

vvvv----------- Year
YYYYMM
    ^^--------------- Month
An example input could look like this :

vvvv---------------- 4 digit code representing the year (2018)
201809
    ^^--------------- 2 digit code representing the month (Sep)
Output the same date period in the following format :

 vvv------------------------- 3 chars for month
 MMMYY
    ^^---------------- Last 2 digits of the year
The output for the above input would be :

 vvv------------------- Month (spetember)
 Sep18
    ^^------------- Year (2018)
Generalising :

Given input in the form YYYYMM output in the form MMMYY.

The last two digits of the input will correspond to a month.

The table for them is given as :

{
  '01' : 'Jan'
  '02' : 'Feb',
  '03' : 'Mar',
  '04' : 'Apr',
  '05' : 'May',
  '06' : 'Jun',
  '07' : 'Jul',
  '08' : 'Aug',
  '09' : 'Sep',
  '10' : 'Oct',
  '11' : 'Nov',
  '12' : 'Dec',
 }
Output should always consist of the following :

first three chars of the month (use above table) and the last two chars of the year (from input).

Notes :
The input will always be six digits long.
The first four digits will always represent the year
The last two digits of input will represent the code for month
The code will be from 01 --- 12
Input will always be valid
First character of month must be capital while rest must be small
Restrictions :
You must not import anything
You must complete the task in under/equal to 52 bytes
You must not use more than one line
* */


f = inp => (['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][+inp.slice(-2)-1]+inp.slice(2,4));

f=i=>(new Date(''+i%100)+'').slice(4,7)+i.slice(2,4)
