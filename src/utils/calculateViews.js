export const calculateViews = (num) => {
    let res = num;
    if(num < 999) {
        res = num;
    } else if(num < 9999) {
        res = String(num)[0] + 'k';
    } else if(num < 99999) {
        res = String(num)[0] + String(num)[1] + 'k';
    } else if(num < 999999) {
        res = String(num)[0] + 'm';
    } else if(num < 9999999) {
        res = String(num)[0] + String(num)[1] + 'm';
    } else if(num < 99999999) {
        res = String(num)[0] + 'b';
    } else if(num < 999999999) {
        res = String(num)[0] + String(num)[1] + 'b';
    } else if(num < 9999999999) {
        res = String(num)[0] + String(num)[1] + String(num)[1] + 'b';
    }
    return res;
}