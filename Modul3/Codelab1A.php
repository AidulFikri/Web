<?php
$height = 5; // Tinggi segitiga

for($i = 1; $i <= $height; $i++) {
    // Cetak spasi untuk segitiga
    for($j = $height - $i; $j > 0; $j--) {
        echo "&nbsp;&nbsp;";
    }
    // Cetak bintang
    for($k = 1; $k <= ($i * 2) - 1; $k++) {
        echo "*";
    }
    echo "<br/>";
}
?>
