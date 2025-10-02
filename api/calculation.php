<?php
require 'tools.php';
header('Content-Type: application/json');
$fiat_currencies = ['USD', 'RUB', 'EUR', 'KZT', 'UAH', 'GBP', 'CNY', 'JPY', 'TRY'];
$coins = get_rates_all()['data'];
$send_currency_id = $_GET['send_currency'];
$send_currency = find_currency_by_id($send_currency_id, $coins);
$filtered_coins = [];
$receive_currency = isset($_GET['receive_currency']) ? $_GET['receive_currency'] : null;
$send_amount = isset($_GET['send_amount']) ? $_GET['send_amount'] : null;
$get_min_amount_all = get_min_amount_all();

if ($_GET['includes'] == 'direction.calculate') {
	$receive_currency = find_currency_by_id($receive_currency, $coins);
	$receive_amount = isset($_GET['receive_amount']) ? $_GET['receive_amount'] : null;
	$this_rate = calculate($send_currency['code'].$send_currency['network'], $receive_currency['code'].$receive_currency['network'], $send_amount, $receive_amount)['data'];


	$amount_from = $this_rate['amount_from'];
	$amount_to = $this_rate['amount_to'];
	$exchange_rate = $this_rate['exchange_rate'];
	$spread = $this_rate['spread_percentage'];
	$data = [
		"data" => [
			"currency_id"          => $send_currency['id'],
			"title"                => $send_currency['code'] . ' ' . $send_currency['network'],
			"slug"                 => $send_currency['code'],
			"currency_code"        => $send_currency['code'],
			"is_crypto"            => 1,
			"icon"                 => '/images/coins/' . strtolower($send_currency['code']) . '.png',
			"is_visible_in_wallet" => 1,
			"network"              => $send_currency['network'],
			"direction"            => [
				[
					"range_limit"      => [
						"send"    => [
							"min" => 0,
							"max" => 1000000000000000000
						],
						"receive" => [
							"min"     => 0,
							"max"     => 1000000000000000000,
							"reserve" => "264830.6947"
						]
					],
					"descriptions"     => [
						"final_description"     => "\"Уважаемый пользователь\r\nСпасибо за доверие к Bridge. Мы работаем 24/7, чтобы выполнить ваш заказ в кратчайшие сроки.\r\n\r\nПожалуйста, не стесняйтесь обращаться к нам, если у вас возникли вопросы по вашему заказу. Тем временем, вы можете проверить статус вашего заказа, используя информацию, предоставленную вам на странице заказа.\r\nС наилучшими пожеланиями\r\nКоманда Bridge\"",
						"auto_send_description" => "- Из-за протоколов криптовалюты транзакции не могут быть отменены или отозваны после отправки. Если вы отправите свою сумму на неправильный адрес кошелька, мы, к сожалению, не сможем восстановить ваши средства, так как у нас нет контроля над блокчейн-транзакциями.\t\t\r\n\"- Скриншот вашего кошелька должен показывать как минимум два из следующих пунктов:\r\n1. хеш транзакции\r\n2. Сумма транзакции\r\n3. Адрес нашего кошелька\r\n4. адрес вашего кошелька\r\n................\r\nПРИМЕЧАНИЕ: Пожалуйста, не делайте скриншоты из Blockchain.\"\t\t\r\n- В зависимости от сетей и кошельков, криптоплатформы взимают разные суммы в качестве комиссии за транзакцию. Мы учитываем точную сумму, полученную в нашем кошельке, исключая комиссию сети. Она должна быть равна сумме \"Мы получаем\" в деталях вашего заказа\t\t\r\n\t\t\r\n- Согласно правилам PayPal, платежи не могут быть отправлены на адрес граждан России, Беларуси и некоторых других стран. Пожалуйста, убедитесь, что ваш аккаунт способен получать средства через метод оплаты \"Товары и услуги\". Bridge не несет ответственности, если аккаунт PayPal клиента не способен получать средства через вышеупомянутый метод. \t\t\r\n- Мы делаем все возможное, чтобы завершить ваш заказ и отправить сумму на ваш аккаунт PayPal как можно скорее. Однако, в некоторых случаях может потребоваться до 48 часов, чтобы вы получили сумму на свой аккаунт PayPal.\t\t\r\n- Мы точно отправляем сумму, указанную в \"Мы отправляем\" в качестве оплаты за товары или услуги. PayPal взимает дополнительную комиссию с суммы, полученной на целевой аккаунт, ставка комиссии зависит от вашего региона и обычно составляет от 4% до 6%. Bridge не получает выгоды от этой комиссии и не несет за нее ответственности.\t\t\r\n- Bridge отправляет деньги через PayPal, используя более одного аккаунта. Иногда мы можем отправить вам сумму одной или несколькими частями. Общая сумма, которую вы получите, будет равна сумме заказа\t\t\r\n- Пожалуйста, учтите, что мы не принимаем возврат средств от PayPal."
					],
					"receive_currency" => [
						"currency_id"          => $receive_currency['id'],
						"title"                => $receive_currency['code'] . ' ' . $receive_currency['network'],
						"slug"                 => $receive_currency['code'],
						"currency_code"        => $receive_currency['code'],
						"is_crypto"            => 0,
						"icon"                 => '/images/coins/' . strtolower($receive_currency['code']) . '.png',
						"is_visible_in_wallet" => 1,
						"network"              => null
					],
					"calculate"        => [
						"sendAmount"           => $send_amount,
						"receiveAmount"        => $amount_to,
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
								"static"  => 0,
								"percent" => 1
							]
						],
						"sendExchangeRate"     => 1,
						"receiveExchangeRate"  => 1,
						"totalSend"            => (float)format_amount($this_rate['amount_from'], $send_currency['code']),
						"youSend"              => (float)format_amount($this_rate['amount_from'], $send_currency['code']),
						"weReceive"            => (float)format_amount($this_rate['amount_from'], $receive_currency['code']),
						"totalReceive"         => (float)format_amount($this_rate['amount_to'], $receive_currency['code']),
						"weSend"               => (float)format_amount($this_rate['amount_to'], $send_currency['code']),
						"youReceive"           => (float)format_amount($this_rate['amount_to'], $receive_currency['code']),
						"feeSend"              => [
							"fee"   => "0.0000",
							"label" => "Network fee"
						],
						"feeReceive"           => [
							"fee"   => "0.0000",
							"label" => "Gateway fee"
						],
						"discount"             => [
							"you_send"                 => 0,
							"send_discount_amount"     => 0,
							"send_discount_amount_usd" => 0,
							"coupon_id"                => null
						],
						"calculation_key"      => "calculate:3d2c8cab91c7297b3debaa1459ccd0fe"
					]
				]
			]
		]
	];
	echo json_encode($data);
	exit;
}
foreach ($coins as $key => $coin) {

	if (in_array($coin['code'], $fiat_currencies) || $coin['id'] == $send_currency_id) {
		continue;
	}
	if(isset($coin['network'])){
		$min_amount = format_amount($get_min_amount_all[$coin['code'].$coin['network']] ?? 0, $coin['code']);
	}else{
		$min_amount = format_amount($get_min_amount_all[$coin['code']] ?? 0, $coin['code']);

	}
	$filtered_coins[] = [
		"range_limit"      => [
			"send"    => [
				"min" => 0,
				"max" => 1000000000000000000
			],
			"receive" => [
				"min"     => $min_amount ?? 0,
				"max"     => 1000000000000000000,
				"reserve" => "264830.6947"
			]
		],
		"descriptions"     => [
			"final_description"     => "\"Уважаемый пользователь\r\nСпасибо за доверие к Bridge. Мы работаем 24/7, чтобы выполнить ваш заказ в кратчайшие сроки.\r\n\r\nПожалуйста, не стесняйтесь обращаться к нам, если у вас возникнут вопросы по вашему заказу. Вы можете проверить статус заказа, используя информацию, предоставленную на странице заказа.\r\nС уважением,\r\nКоманда Bridge\"",
			"auto_send_description" => "- Из-за особенностей криптовалютных протоколов транзакции не могут быть отменены или возвращены после отправки. Если вы отправите средства на неправильный адрес кошелька, мы, к сожалению, не сможем вернуть ваши средства, так как не контролируем транзакции в блокчейне.\t\t\r\n\"- Скриншот вашего кошелька должен содержать как минимум два из следующих элементов:\r\n1. Хэш транзакции\r\n2. Сумма транзакции\r\n3. Наш адрес кошелька\r\n4. Ваш адрес кошелька\r\n................\r\nПРИМЕЧАНИЕ: Пожалуйста, не делайте скриншоты из Blockchain.\"\t\t\r\n- В зависимости от сети и кошельков криптоплатформы взимают разные комиссии за транзакции. Мы учитываем точную сумму, полученную на наш кошелек, за вычетом комиссии сети. Она должна быть равна сумме \"Мы получаем\" в деталях вашего заказа\t\t\r\n\t\t\r\n- Согласно правилам PayPal, платежи не могут быть отправлены на адреса граждан России, Беларуси и некоторых других стран. Пожалуйста, убедитесь, что ваш аккаунт способен получать средства через метод оплаты \"Товары и услуги\". Bridge не несет ответственности, если аккаунт PayPal клиента не может получать средства через указанный метод. \t\t\r\n- Мы делаем все возможное, чтобы завершить ваш заказ и отправить сумму на ваш аккаунт PayPal как можно скорее. Однако в некоторых случаях это может занять до 48 часов.\t\t\r\n- Мы отправляем точную сумму, указанную в поле \"Мы отправляем\", как оплату за товары или услуги. PayPal взимает дополнительную комиссию с суммы, полученной на целевой аккаунт, размер комиссии зависит от вашего региона и обычно составляет от 4% до 6%. Bridge не получает выгоду от этой комиссии и не несет за нее ответственности.\t\t\r\n- Bridge отправляет деньги через PayPal, используя более одного аккаунта. Иногда мы можем отправить вам сумму в одной или нескольких частях. Общая сумма получения будет равна сумме заказа\t\t\r\n- Пожалуйста, учитывайте, что мы не принимаем возвраты через PayPal."
		],
		"receive_currency" => [
			"currency_id"          => $coin['id'],
			"title"                => $coin['code'] . ' ' . $coin['network'],
			"slug"                 => $coin['code'],
			"currency_code"        => $coin['code'],
			"is_crypto"            => 1,
			"icon"                 => '/images/coins/' . strtolower($coin['code']) . '.png',
			"is_visible_in_wallet" => 0,
			"network"              => $coin['network']
		],
		"calculate"        => null
	];
}
$data = [
	"data" => [
		"currency_id"          => $send_currency['id'],
		"title"                => $send_currency['code'] . ' ' . $send_currency['network'],
		"slug"                 => $send_currency['code'],
		"currency_code"        => $send_currency['code'],
		"is_crypto"            => 1,
		"icon"                 => '/images/coins/' . strtolower($send_currency['code']) . '.png',
		"is_visible_in_wallet" => 1,
		"network"              => $send_currency['network'],
		"direction"            => $filtered_coins
	]
];


echo json_encode($data);
