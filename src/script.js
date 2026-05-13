// Fungsi untuk menghitung total dengan validasi angka
function calculateTotal(price, quantity) {
    const p = Number(price);
    const q = Number(quantity);

    if (isNaN(p) || isNaN(q)) {
        return 0;
    }
    return p * q;
}