function TimeClass(givenTime){
  this.time = givenTime
}

TimeClass.prototype.convert = function(){
  var hours = this.time.substring(0,2);
  var minutes = this.time.substring(3,5);

  return handleHours(hours, minutes) + ' ' + handleMinutes(minutes);
}

function handleHours(hours, minutes) {
  if (hours == '00') {
    return 'midnight'
  }
  if (hours == '12') {
    return 'noon'
  }
}

function handleMinutes(minutes) {
  if (minutes == '00') {
    return ''
  }
  if (minutes == '01') {
    return '1 past'
  }
  if (minutes == '02') {
    return '2 past'
  }
  if (minutes == '03') {
    return '3 past'
  }
  if (minutes == '04') {
    return '4 past'
  }
  if (minutes == '05') {
    return '5 past'
  }
  if (minutes == '06') {
    return '6 past'
  }
  if (minutes == '07') {
    return '7 past'
  }
  if (minutes == '08') {
    return '8 past'
  }
  if (minutes == '09') {
    return '9 past'
  }
  if (minutes == '10') {
    return '10 past'
  }
  if (minutes == '11') {
    return '11 past'
  }
  if (minutes == '12') {
    return '12 past'
  }
  if (minutes == '13') {
    return '13 past'
  }
  if (minutes == '14') {
    return '14 past'
  }
  if (minutes == '15') {
    return 'quarter past'
  }
  if (minutes == '16') {
    return '16 past'
  }
  if (minutes == '17') {
    return '17 past'
  }
  if (minutes == '18') {
    return '18 past'
  }
  if (minutes == '19') {
    return '19 past'
  }
  if (minutes == '20') {
    return '20 past'
  }
  if (minutes == '21') {
    return '21 past'
  }
  if (minutes == '22') {
    return '22 past'
  }
  if (minutes == '23') {
    return '23 past'
  }
  if (minutes == '24') {
    return '24 past'
  }
  if (minutes == '25') {
    return '25 past'
  }
  if (minutes == '26') {
    return '26 past'
  }
  if (minutes == '27') {
    return '27 past'
  }
  if (minutes == '28') {
    return '28 past'
  }
  if (minutes == '29') {
    return '29 past'
  }
  if (minutes == '30') {
    return 'half past'
  }
  if (minutes == '29') {
    return '29 to'
  }
  if (minutes == '28') {
    return '28 to'
  }
  if (minutes == '27') {
    return '27 to'
  }
  if (minutes == '26') {
    return '26 to'
  }
  if (minutes == '25') {
    return '25 to'
  }
  if (minutes == '24') {
    return '24 to'
  }
  if (minutes == '23') {
    return '23 to'
  }
  if (minutes == '22') {
    return '22 to'
  }
  if (minutes == '21') {
    return '21 to'
  }
  if (minutes == '20') {
    return '20 to'
  }
  if (minutes == '19') {
    return '19 to'
  }
  if (minutes == '18') {
    return '18 to'
  }
  if (minutes == '17') {
    return '17 to'
  }
  if (minutes == '16') {
    return '16 to'
  }
  if (minutes == '15') {
    return 'quarter to'
  }
  if (minutes == '14') {
    return '14 to'
  }
  if (minutes == '13') {
    return '13 to'
  }
  if (minutes == '12') {
    return '12 to'
  }
  if (minutes == '11') {
    return '11 to'
  }
  if (minutes == '10') {
    return '10 to'
  }
  if (minutes == '09') {
    return '09 to'
  }
  if (minutes == '08') {
    return '08 to'
  }
  if (minutes == '07') {
    return '07 to'
  }
  if (minutes == '06') {
    return '06 to'
  }
  if (minutes == '05') {
    return '05 to'
  }
  if (minutes == '04') {
    return '04 to'
  }
  if (minutes == '03') {
    return '03 to'
  }
  if (minutes == '02') {
    return '02 to'
  }
  if (minutes == '01') {
    return '01 to'
  }
}

 if (this.time == '00:00') {
    return 'midnight'
 }
 else if (this.time == '12:00') {
    return 'noon'
 }
 else if (this.time == '01:00') {
   return "1"
 }
 else if (this.time == '02:00') {
   return "2"
 }
 else if (this.time == '03:00') {
  return "3"
}
  else if (this.time == '04:00') {
  return "4"
}
else if (this.time == '05:00') {
  return "5"
} 
  else if (this.time == '06:00') {
    return "6"
  }
  else if (this.time == '07:00') {
    return "7"
  }
  else if (this.time == '08:00') {
    return "8"
  }
  else if (this.time == '09:00') {
    return "9"
  }
  else if (this.time == '10:00') {
    return "10"
  }
  else if (this.time == '11:00') {
    return "11"
  }
  else if (this.time == '13:00') {
    return "1"
  }
  else if (this.time == '14:00') {
    return "2"
  }
  else if (this.time == '15:00') {
    return "3"
  }
  else if (this.time == '16:00') {
    return "4"
  }
  else if (this.time == '17:00') {
    return "5"
  }
  else if (this.time == '18:00') {
    return "6"
  }
  else if (this.time == '19:00') {
    return "7"
  }
  else if (this.time == '20:00') {
    return "8"
  }
  else if (this.time == '21') {
    return "9"
  }
  else if (this.time == '22') {
    return "10"
  }
  else if (this.time == '23') {
    return "11"
  }
  else if (hours == '22' && minutes == '30')
  return 'Half ten'



module.exports = TimeClass
