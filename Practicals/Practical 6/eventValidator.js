module.exports = {
    checkDate(date){
        let dateObject = new Date(date);
        let month = dateObject.getMonth();
        let day = dateObject.getDate();
        if (month == 8) {
            if (day > 9 && day <= 21) {
                return true;
            }
        }
        return false;
    },
    checkName(name){
        let regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (regex.test(name)) {
            return false;
        }
        return true;
    }
} ;