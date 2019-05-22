
module.exports = {
    convert_date(date, offset) {
        offset = (offset === undefined) ? 0 : offset;
        date.setDate(date.getDate()+offset);
        return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)
    },

}


