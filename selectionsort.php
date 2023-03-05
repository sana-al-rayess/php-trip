<?php
header('Content-Type: application/json');

function selectionSort($arr) {
    $n = count($arr);
    for ($i = 0; $i < $n - 1; $i++) {
        $min_idx = $i;
        for ($j = $i + 1; $j < $n; $j++) {
            if ($arr[$j] < $arr[$min_idx]) {
                $min_idx = $j;
            }
        }
        $temp = $arr[$i];
        $arr[$i] = $arr[$min_idx];
        $arr[$min_idx] = $temp;
    }
    return $arr;
}

$numbers_str = $_GET['numbers'];
$numbers = explode(',', $numbers_str);
$numbers = array_map('intval', $numbers);

$sorted_numbers = selectionSort($numbers);

echo json_encode($sorted_numbers);
?>
