<?php
require_once 'tools.php';
header('Content-Type: application/json');
$coins = get_rates_all()['data'];
$fiat_currencies = ['USD', 'RUB', 'EUR', 'KZT', 'UAH', 'GBP', 'CNY', 'JPY', 'TRY'];

$filtered_coins = [];
foreach ($coins as $key => $coin) {
    if(in_array($coin['code'], $fiat_currencies)) {
        continue;
    }
    
    $filtered_coins[] = [
        "currency_id"          => $coin['id'],
        "title"               => $coin['code'] . ' '. $coin['network'],
        "slug"                => $coin['code'],
        "currency_code"       => $coin['code'],
        "is_crypto"           => 1,
        "icon"                => '/images/coins/' . strtolower($coin['code']) . '.png',
        "is_visible_in_wallet" => 1,
        "network"             => $coin['network']
    ];
}

$data = [
	"data"    => $filtered_coins,
	"message" => "your request was successful"
];


echo json_encode($data);