export const formatStringNumber = (number) => {
    const numberFormatType = { style: 'currency', currency: 'VND' }
    let sign = '+';
    let numberFormatted = number;
    if (number < 0) {
        sign = '-';
        /*Convert to positive numbers */
        numberFormatted = number * (-1);
    }
    /*Format in Vietnamese currency  */
    numberFormatted = new Intl.NumberFormat('vi-VN', numberFormatType).format(numberFormatted);

    /*Remove character 'đ' */
    numberFormatted = numberFormatted.substring(0, numberFormatted.length - 2);
    return `${sign} ${numberFormatted}`;
}
export const calculateTotal = (list) => {
    let total = 0;
    for (let index = 0; index < list.length; index++) {
        const data = list[index];
        total += data.amount;
    }
    return total;
}
export const calculatePercents = (total, amount) => {
    if (!total) {
        return '0%';
    }
    let percent = (amount / total) * 100;

    if (percent < 0) {
        percent = percent * (-1);
    }

    percent = Math.round(percent);

    return `${percent}%`;
}


