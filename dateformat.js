(function(){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = [
        'January','February','March','April','May',
        'June','Jule','August','September','October',
        'November','December'
    ];

    lz = function(num){
        num = ""+num;
        if(num.length==1)return "0"+num;
        return num;
    };

    var su = function(n){
        return ["th","st","nd","rd"][(n=~~(n<0?-n:n)%100)>10&&n<14||(n%=10)>3?0:n];
    };

    var format = function(t, s){

        var w = days;
        var m = months;

        var date = t.getDate();
        var year = t.getFullYear();
        var hours = t.getHours();
        var day = t.getDay();
        var dayName = w[day]
        var min = t.getMinutes();
        var sec = t.getSeconds();
        var month = t.getMonth();
        var am = hours<12 ? 'am':'pm';
        var hours12 = hours%12;hours12=hours12?hours12:12;

        var fd = new Date(t.getFullYear(),0,1);
        var dayOfYear = Math.round((t-fd)/8.64e7);
        var weekNum = Math.ceil((((t-fd)/8.64e7) + fd.getDay() - 1)/7);

        var a = {
            d: lz(date),
            D: dayName.substr(0,3),
            l: dayName,
            S: su(date),
            w: day,
            j: date,
            z: dayOfYear,
            W: weekNum,
            M: m[month].substr(0,3),
            F: m[month],
            Y : year,
            a : am,
            A : am.toUpperCase(),
            y : (""+year).substr(2,2),
            c : t.toISOString(),
            m: lz(month + 1),
            U: Math.round(t/1000),
            g: hours12,
            G: lz(hours12),
            h: hours,
            H: lz(hours),
            i: lz(min),
            s: lz(sec)
        };

        var v = [];
        Object.keys(a).forEach(function(k){
            v.push('(\\\\)?'+k);
        });

        return s.replace(new RegExp(v.join('|'),'g'),function(k,b,c,d){
            if(a[k])return a[k];
            return k.replace('\\','');
        });
    };
    window.dateformat_setlocale = function(nd,nm,sf){if(nd)days = nd;if(nm)months = nm;if(sf)su=sf};
    Date.prototype.format = function(s){return format(this,s);}
})();