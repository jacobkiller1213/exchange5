<?php
require 'tools.php';
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);
$orderId = $data['track_id'];
$order = get_order($orderId);
$rates = get_rates_all();
$payment_info = json_decode($order['payment_info'], true);
$description = json_decode($order['description'], true);
$qr = generateQRCode($order['wallet_address']);
$status = format_status($order['status']);
$memoSend = $order['memo'] ?? null;
$memoReceive = $payment_info['⚠️ МЕМО'] ?? null;
if ($memoSend) {
	$memoSend = [
		"label"        => "Payment wallet tag",
		"name"         => "XCH_XRP_TAG",
		"value"        => $memoSend,
		"description"  => null,
		"cryptoMemoQR" => [
			"text" => generateQRCode($memoSend)['text'],
			"size" => 150
		]
	];
}
if ($memoReceive) {
	$memoReceive = [
		"label"        => "Your wallet tag",
		"name"         => "XCH_XRP_TAG",
		"value"        => $memoReceive,
		"description"  => null,
		"cryptoMemoQR" => [
			"text" => generateQRCode($memoReceive)['text'],
			"size" => 150
		]
	];
}
$data = [
	"data" => [
		"calculationDetails"         => [
			"sendAmount"           => $order['amount_from'],
			"receiveAmount"        => $order['amount_to'],
			"sendCurrencyWages"    => [
				"send"    => [
					"static"  => "0.0000",
					"percent" => 1
				],
				"receive" => [
					"static"  => 0,
					"percent" => 1
				]
			],
			"receiveCurrencyWages" => [
				"send"    => [
					"static"  => 0,
					"percent" => 1
				],
				"receive" => [
					"static"  => "1.0000",
					"percent" => 1
				]
			],
			"sendExchangeRate"     => "1.0000",
			"receiveExchangeRate"  => $order['amount_to'] / $order['amount_from'],
			"totalSend"            => $order['amount_from'],
			"youSend"              => $order['amount_from'],
			"weReceive"            => $order['amount_from'],
			"totalReceive"         => $order['amount_to'],
			"weSend"               => $order['amount_to'],
			"youReceive"           => $order['amount_to'],
			"feeSend"              => [
				"fee"   => "0.0000",
				"label" => "Network fee"
			],
			"feeReceive"           => [
				"fee"   => "1.000074",
				"label" => "Network fee"
			],
			"discount"             => [
				"you_send"                 => 0,
				"send_discount_amount"     => 0,
				"send_discount_amount_usd" => 0,
				"coupon_id"                => null
			]
		],
		"order_status"               => [
			"label" => strtoupper($status),
			"value" => strtoupper($status)
		],
		"order_status_with_badge"    => [
			"status" => strtoupper($status),
			"badge"  => "secondary"
		],
		"expire_after"               => 600,
		"now_time"                   => date('H:i:s'),
		"created_at_time"            => date('H:i:s'),
		"counter_expire_time"        => "561",
		"flag_expire_time"           => false,
		"order_email_dynamic_fields" => "TSi6mJzY7K6XyGm8NvU7rGdDxNQ7y6cLht",
		"email"                      => $description[' 📧 Email'] ?? null,
		"phone"                      => $description['📱 Номер телефона'] ?? null,
		"is_crypto_gateway_address"  => 1,
		"confirmation"               => null,
		"direction"                  => [
			"has_screenshot"          => false,
			"auto_send"               => 1,
			"auto_receive"            => 0,
			"direction_rate"          => "0.97500",
			"auto_send_description"   => "- Из-за протоколов криптовалюты транзакции не могут быть отменены или отозваны после отправки. Если вы отправите свою сумму на неправильный адрес кошелька, мы, к сожалению, не сможем восстановить ваши средства, так как у нас нет контроля над блокчейн-транзакциями.\t\t\r\n\"- Скриншот вашего кошелька должен показывать как минимум два из следующих пунктов:\r\n1. хеш транзакции\r\n2. Сумма транзакции\r\n3. Адрес нашего кошелька\r\n4. адрес вашего кошелька\r\n................\r\nПРИМЕЧАНИЕ: Пожалуйста, не делайте скриншоты из Blockchain.\"\t\t\r\n- В зависимости от сетей и кошельков, криптоплатформы взимают разные суммы в качестве комиссии за транзакцию. Мы учитываем точную сумму, полученную в нашем кошельке, исключая комиссию сети. Она должна быть равна сумме \"Мы получаем\" в деталях вашего заказа\t\t\r\n\t\t\r\n- Мы начинаем обрабатывать ваш заказ как можно скорее. Обычно это занимает от 3 до 20 минут после подтверждения заказа.\t\t\r\n- Пожалуйста, внимательно проверьте \"Адрес кошелька\". Если транзакция отправлена на неверный адрес, Bridge не сможет восстановить ваши средства, поскольку у нас нет контроля над блокчейн-транзакциями.\t\t\r\n\"- Обратите внимание, что количество криптовалюты, которое вы получаете в свой кошелек, указано как \"Вы получаете\" в деталях вашего заказа.\r\n\"",
			"manual_send_description" => "- Из-за протоколов криптовалюты транзакции не могут быть отменены или отозваны после отправки. Если вы отправите свою сумму на неправильный адрес кошелька, мы, к сожалению, не сможем восстановить ваши средства, так как у нас нет контроля над блокчейн-транзакциями.\t\t\r\n\"- Скриншот вашего кошелька должен показывать как минимум два из следующих пунктов:\r\n1. хеш транзакции\r\n2. Сумма транзакции\r\n3. Адрес нашего кошелька\r\n4. адрес вашего кошелька\r\n................\r\nПРИМЕЧАНИЕ: Пожалуйста, не делайте скриншоты из Blockchain.\"\t\t\r\n- В зависимости от сетей и кошельков, криптоплатформы взимают разные суммы в качестве комиссии за транзакцию. Мы учитываем точную сумму, полученную в нашем кошельке, исключая комиссию сети. Она должна быть равна сумме \"Мы получаем\" в деталях вашего заказа\t\t\r\n\t\t\r\n- Мы начинаем обрабатывать ваш заказ как можно скорее. Обычно это занимает от 3 до 20 минут после подтверждения заказа.\t\t\r\n- Пожалуйста, внимательно проверьте \"Адрес кошелька\". Если транзакция отправлена на неверный адрес, Bridge не сможет восстановить ваши средства, поскольку у нас нет контроля над блокчейн-транзакциями.\t\t\r\n\"- Обратите внимание, что количество криптовалюты, которое вы получаете в свой кошелек, указано как \"Вы получаете\" в деталях вашего заказа.\r\n\"",
			"final_description"       => "\"Уважаемый пользователь\r\nСпасибо за доверие к Bridge. Мы работаем 24/7, чтобы выполнить ваш заказ в кратчайшие сроки.\r\n\r\nПожалуйста, не стесняйтесь обращаться к нам, если у вас возникли вопросы по вашему заказу. Тем временем, вы можете проверить статус вашего заказа, используя информацию, предоставленную вам на странице заказа.\r\nС наилучшими пожеланиями\r\nКоманда Bridge\"",
			"slug"                    => "TetherTRX",
			"send_currency"           => [
				"title"     => $order['currency_from'],
				"icon"      => '/images/coins/' . strtolower($order['currency_from']) . '.png',
				"symbol"    => $order['currency_from'],
				"slug"      => $order['currency_from'],
				"is_crypto" => 1
			],
			"receive_currency"        => [
				"title"     => $order['currency_to'],
				"icon"      => '/images/coins/' . strtolower($order['currency_to']) . '.png',
				"symbol"    => $order['currency_to'],
				"slug"      => $order['currency_to'],
				"is_crypto" => 1
			]
		],
		"cryptoAutoAddress"          => $order['wallet_address'],
		"cryptoAutoAddressQR"        => [
			"text" => $qr['text'],
			"size" => $qr['size']
		],
		"sendDescriptions"           => [
			"auto_send_description" => "- Из-за протоколов криптовалюты транзакции не могут быть отменены или отозваны после отправки. Если вы отправите свою сумму на неправильный адрес кошелька, мы, к сожалению, не сможем восстановить ваши средства, так как у нас нет контроля над блокчейн-транзакциями.\t\t\r\n\"- Скриншот вашего кошелька должен показывать как минимум два из следующих пунктов:\r\n1. хеш транзакции\r\n2. Сумма транзакции\r\n3. Адрес нашего кошелька\r\n4. адрес вашего кошелька\r\n................\r\nПРИМЕЧАНИЕ: Пожалуйста, не делайте скриншоты из Blockchain.\"\t\t\r\n- В зависимости от сетей и кошельков, криптоплатформы взимают разные суммы в качестве комиссии за транзакцию. Мы учитываем точную сумму, полученную в нашем кошельке, исключая комиссию сети. Она должна быть равна сумме \"Мы получаем\" в деталях вашего заказа\t\t\r\n\t\t\r\n- Мы начинаем обрабатывать ваш заказ как можно скорее. Обычно это занимает от 3 до 20 минут после подтверждения заказа.\t\t\r\n- Пожалуйста, внимательно проверьте \"Адрес кошелька\". Если транзакция отправлена на неверный адрес, Bridge не сможет восстановить ваши средства, поскольку у нас нет контроля над блокчейн-транзакциями.\t\t\r\n\"- Обратите внимание, что количество криптовалюты, которое вы получаете в свой кошелек, указано как \"Вы получаете\" в деталях вашего заказа.\r\n\""
		],
		"receiveDynamicFields"       => $memoReceive ? [$memoReceive] : [],
		"sendDynamicFields"          => $memoSend ? [$memoSend] : [],
		"nebulox_gateway"            => null
	]
];
echo json_encode($data);
