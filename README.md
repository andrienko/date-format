FormatDate
===

A lightweight (~1 kb) function fo format date "like in PHP".

Also, not all of the php patterns are available (say, timezone-specific ones aren't!). If you need more complex
implementation you should use [this](http://phpjs.org/functions/date/) or [this](https://github.com/jacwright/date.format).
I find those bloated, but maybe they will work better.

I needed a tiny date function to use with JS templates. Also I needed practice. I wrote this.

Main diference from similars:

 - All the pattern values are calculated on execution.
 - All the patterns are compiled into regex, which is then replaced with values.

Usage
---

The library extends Date.prototype with new method - format, which accepts a string of format.

    new Date('Feb 2, 2015 03:24:00').format('M j-S, Y');            //February 2-nd, 2015
    new Date('Feb 2, 2015 03:24:13').format('j-S F of Y, g:i A');   //2-nd February of 2015, 3:24 AM

Supported identifiers
---

### Day

- `d` - day of month with leading zeros (01 to 31)
- `j` - day of month without leading zeros (1 to 31)
- `S` - day month suffix. (th, st, nd or rd)
- `z` - day of year (1 to 365)

### Week

- `D` - three-symbol week day name (Mon to Sun)
- `l` - full week day name (Monday to Sunday)
- `w` - week day (1 to 7)
- `W` - number of week. Weeks starting from monday. (1 to 53)

### Month

- `m` - Month number with leading zeros (01 to 12)
- `M` - Three-symbol month name (Jan to Dec)
- `F` - Full month name (January to December)

### Year

- `Y` - Full year number (for example, 2015)
- `y` - Last two digits of year (for example, 15)

### Time

- `g` - Hours in 12-hour format (1 to 12)
- `G` - Hours in 12-hour format with leading zeros (01 to 12)
- `h` - Hours in 24-hour format (0 to 23)
- `H` - Hours in 24-hour format with leading zeros (01 to 23)
- `i` - Minutes with leading zeros (00 to 59)
- `s` - Seconds with leading zeros (00 to 59)
- `a` - ante/post meridem (am or pm)
- `A` - uppercase ante/post meridem (AM or PM)
- `U` - Unix timestamp in seconds (for example, 1325294640)
- `c` - Iso time format (for example, 2011-12-31T01:24:00.000Z)

Escaping
---

You can escape characters by adding a backslash to them. In string literals, of course, that would be double backslash:

    var date = new Date('Feb 2, 2015 03:24:00');
    console.log(date.format('To\\d\\a\\y \\i\\s jS M, Y'));
    // Today is 2nd Feb, 2015
    
If you need a backslash itself in a pattern... I feel sorry for you. Not in this version.