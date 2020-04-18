import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
    
    constructor() { }

    public isValidSSN(text) {

        if (text == "") {
            return false;
        }
        var inStr = text;
        var sin = text;
        var inLen = inStr.length;
        var lastdigit = text.substring(10, 10 + 1);
        var checkdigit = 0;
        var checknum = 0;
        var esum = 0;
        var ch_sum = "";

        if (inLen > 11 || inLen < 11) {
            return false;
        }

        for (var i = 0; i < text.length; i++) {
            var ch = text.substring(i, i + 1)

            if ((ch < "0" || "9" < ch) && (ch != "-")) {
                return false;
            }
            if ((i == 3 || i == 7) && (ch != "-")) {
                return false;
            }
        }

        var odd = ((text.substring(0, 0 + 1)) * (1.0) + (text.substring(2, 2 + 1)) * (1.0)
            + (text.substring(5, 5 + 1)) * (1.0) + (text.substring(8, 8 + 1)) * (1.0));

        var enumbers = (text.substring(1, 1 + 1)) + (text.substring(4, 4 + 1)) +
            (text.substring(6, 6 + 1)) + (text.substring(9, 9 + 1));

        for (var i = 0; i < enumbers.length; i++) {
            ch = (enumbers.substring(i, i + 1) * 2);
            ch_sum = ch_sum + ch;
        }

        for (var i = 0; i < ch_sum.length; i++) {
            ch = (ch_sum.substring(i, i + 1));
            esum = ((esum * 1.0) + (ch * 1.0));
        }

        checknum = (odd + esum);

        if (checknum <= 10) {
            checkdigit = (10 - checknum);
        }
        if (checknum > 10 && checknum <= 20) {
            checkdigit = (20 - checknum);
        }
        if (checknum > 20 && checknum <= 30) {
            checkdigit = (30 - checknum);
        }
        if (checknum > 30 && checknum <= 40) {
            checkdigit = (40 - checknum);
        }
        if (checknum > 40 && checknum <= 50) {
            checkdigit = (50 - checknum);
        }
        if (checknum > 50 && checknum <= 60) {
            checkdigit = (60 - checknum);
        }

        if (checkdigit != lastdigit) {
            return false;
        }

        return true;
    }
}
