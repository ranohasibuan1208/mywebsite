// Menunggu dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen tombol dan paragraf
    const changeTextBtn = document.getElementById('changeTextBtn');
    const introductionText = document.getElementById('introduction');

    // Tambahkan event listener untuk tombol
    changeTextBtn.addEventListener('click', () => {
        introductionText.textContent = "Thanks for visiting! I hope you enjoy this simple website.";
        alert("Introduction text has been updated!");
    });
});
