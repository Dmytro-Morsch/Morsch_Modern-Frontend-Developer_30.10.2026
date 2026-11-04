// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?
function compareDistance(km, foot) {
    const kmToM = km * 1000;
    const footToM = foot * 0.305;

    if (kmToM > footToM) {
        alert(`${km}km or ${kmToM}m > ${foot}f or ${footToM}m`);
    } else if (kmToM < footToM) {
        alert(`${km}km or ${kmToM}m < ${foot}f or ${footToM}m`);
    } else {
        alert(`${km}km or ${kmToM}m = ${foot}f or ${footToM}m`);
    }
}

const km = prompt('Enter distance in KMs');
const foot = prompt('Enter distance in FOOTs');

compareDistance(km, foot);
