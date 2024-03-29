const sidebar = document.querySelector("#sidebar");
const sidebar_button = document.querySelector("#sidebar_opener");

sidebar_button.addEventListener("click", () => {
    sidebar.classList.toggle("opensidebar");
    document.getElementById("sidebar_opener").style.transform = sidebar.classList.contains("opensidebar") ? "translateX(270px)" : "translateX(0)"
    document.getElementById("sidebar_opener").style.transition = "all 3s ease-in-out"
});
/*butona tıkladığımızda, sidebarın classlistine , orda yoksa opensidebar classını ekliyor, orda varsa siliyorç
2.satır, sidebarın classlisti opensibar classını barındırıyorsa,butonu 270px ileri atıyor, barındırmıyorsa 0 a alıyor.*/

