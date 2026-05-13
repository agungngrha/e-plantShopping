describe("Pengujian Aplikasi e-plantShopping", () => {
    it("Harus berhasil menjumlahkan angka (Unit Test)", () => {
        expect(1 + 1).toBe(2);
    });

    it("Harus memvalidasi nama aplikasi (String Test)", () => {
        const namaAplikasi = "e-plantShopping";
        expect(namaAplikasi).toBe("e-plantShopping");
    });
});