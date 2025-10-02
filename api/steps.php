<?php
require 'tools.php';

header('Content-Type: application/json');


$data_post = json_decode(file_get_contents('php://input'), true);
$receive_amount = $data_post['receive_amount'];
$receive_currency = $data_post['receive_currency'];
$send_amount = $data_post['send_amount'];
$send_currency = $data_post['send_currency'];
$wallet = $data_post['wallet'] ?? null;
$phone = $data_post['phone'] ?? null;
$email = $data_post['email'] ?? null;
$memo = $data_post['memo'] ?? null;
$rates = get_rates_all()['data'];
$coin = find_currency_by_id($receive_currency, $rates);
$coin_to = find_currency_by_id($send_currency, $rates);
$step = $_GET['step'];

$info_min_amount_from = get_min_amount($coin_to['code'].$coin_to['network']);
$info_min_amount_to = get_min_amount($coin['code'].$coin['network']);
$data = [];


if ($step == 1) {
    // Валидация только минимальных сумм
    $errors = [];

    if ($send_amount < $info_min_amount_from) {
        $errors[] = [
            "field" => "send_amount",
            "message" => "Сумма отправки должна быть не менее " . $info_min_amount_from . "."
        ];
    }



    if (!empty($errors)) {
        echo json_encode([
            "errors" => [
                "message" => "Произошла ошибка",
                "validations" => $errors
            ]
        ]);
        exit;
    }

    $data = [
        "data" => [
            "currency_id"   => $coin['id'],
            "title"         => $coin['code'] . ' ' . $coin['network'],
            "slug"          => $coin['code'],
            "currency_code" => $coin['code'],
            "icon"          => '/images/coins/' . $coin['code'] . '.png',
            "direction"     => [
                [
                    "range_limit"          => [
                        "send"    => [
                            "min"     => $info_min_amount_from,
                            "max"     => 12312312312313123,
                            "reserve" => 12312312312313123
                        ],
                        "receive" => [
                            "min"     => $info_min_amount_to,
                            "max"     => 12312312312313123,
                            "reserve" => "2707465.1823"
                        ]
                    ],
                    "descriptions"         => [
                        "final_description"     => "\"Уважаемый пользовательСпасибо за доверие к Alervo. Мы работаем 24/7, чтобы выполнить ваш заказ в кратчайшие сроки.Пожалуйста, не стесняйтесь обращаться к нам, если у вас возникнут вопросы по вашему заказу. Вы можете проверить статус заказа, используя информацию, предоставленную на странице заказа.С уважением,Команда Alervo\"",
                        "auto_send_description" => "- Из-за особенностей криптовалютных протоколов транзакции не могут быть отменены или возвращены после отправки. Если вы отправите средства на неправильный адрес кошелька, мы, к сожалению, не сможем вернуть ваши средства, так как не контролируем транзакции.\"- Скриншот вашего кошелька должен содержать как минимум два из следующих элементов:1. Хэш транзакции2. Сумма транзакции3. Наш адрес кошелька4. Ваш адрес кошелька................ПРИМЕЧАНИЕ: Пожалуйста, не делайте скриншоты из Blockchain.\"- В зависимости от сети и кошельков криптоплатформы взимают разные комиссии. Мы учитываем точную сумму, полученную на наш кошелек, за вычетом комиссии сети. Она должна быть равна сумме \"Мы получаем\" в деталях вашего заказа- Мы начинаем обработку вашего заказа как можно скорее. Обычно это занимает от 3 до 20 минут после оформления заказа.- Пожалуйста, внимательно проверьте \"Адрес кошелька\". Если транзакция будет отправлена на неправильный адрес, Alervo не сможет вернуть ваши средства, так как мы не контролируем транзакции в блокчейне.\"- Обратите внимание, что сумма криптовалюты, которую вы получите на свой кошелек, указана как \"Вы получаете\" в деталях вашего заказа.\""
                    ],
                    "sendDynamicFields"    => [
                        [
                            "label"       => "Отправьте средства на этот адрес",
                            "name"        => "XCH_Tether_Trc20_address",
                            "value"       => "TSi6mJzY7K6XyGm8NvU7rGdDxNQ7y6cLht",
                            "description" => ""
                        ]
                    ],
                    "receiveDynamicFields" => [
                        [
                            "name"           => "wallet",
                            "label"          => "Ваш ". $coin['code'] ." кошелек",
                            "description"    => "",
                            "validation"     => "required",
                            "is_transaction" => 0,
                            "type"           => "TEXT"
                        ],
                        [
                            "name"           => "phone",
                            "label"          => "Ваш номер телефона",
                            "description"    => "Введите номер телефона для получения средств",
                            "validation"     => "min|phone",
                            "is_transaction" => 0,
                            "type"           => "NUMBER"
                        ]
                    ]
                ]
            ]
        ]
    ];

    if(isMemo($coin['code'])){
        $data['data']['direction'][0]['receiveDynamicFields'][] = [
            "name"           => "memo",
            "label"          => "МЕМО",
            "description"    => "Если у вас есть мемо, введите его здесь",
            "validation"     => "",
            "is_transaction" => 0,
            "type"           => "TEXT"
        ];
    }
}
elseif($step == 2){
    $validate_address = validate_currency($coin['code'].$coin['network'], $wallet);
    if(!$validate_address){
        echo json_encode([
            "data" => [],
            "meta" => [
                "status" => [
                    "message" => "An unexpected error occurred. Please try again later.",
                ]
            ]
        ]);
        exit;
    }

    $data = [
        "data" => [
            "invoice" => [
                "orderDetails"  => [
                    "youSend"      => $receive_amount,
                    "totalSend"    => $receive_amount,
                    "weReceive"    => $send_amount,
                    "totalReceive" => $send_amount,
                    "weSend"       => $send_amount,
                    "youReceive"   => $receive_amount,
                    "feeSend"      => [
                        "fee"   => "0.0000",
                        "label" => "Network fee"
                    ],
                    "feeReceive"   => [
                        "fee"   => "1.000098",
                        "label" => "Network fee"
                    ]
                ],
                "dynamicFields" => [
                    "email"                 => $email,
                    "phone"                 => $phone,
                    "register_me"           => null,
                    "password"              => null,
                    "password_confirmation" => null
                ],
                "direction"     => [
                    "auto_send"               => 1,
                    "auto_send_description"   => [
                        "en" => 'Из-за криптовалютных протоколов, транзакции не могут быть отменены после отправки. Если вы отправляете сумму на неправильный адрес кошелька, мы, к сожалению, не сможем вернуть ваши средства, так как у нас нет контроля над Blockchain транзакциями. Перед тем как делать перевод, внимательно проверьте правильно ли введен кошелек на который вы планируете осуществить транзакцию. Как правило, в основном, достаточно проверить первые и последние 5 символов адреса, так как ошибка чаще всего происходит из-за того что человек случайно удаляет или добавляет ненужный символ при вставке адреса.
При любом возникающем вопросе, вы можете обратиться в нашу техническую поддержку и мы вам ответим в ближайшее время.',
                        "ru" => 'Из-за криптовалютных протоколов, транзакции не могут быть отменены после отправки. Если вы отправляете сумму на неправильный адрес кошелька, мы, к сожалению, не сможем вернуть ваши средства, так как у нас нет контроля над Blockchain транзакциями. Перед тем как делать перевод, внимательно проверьте правильно ли введен кошелек на который вы планируете осуществить транзакцию. Как правило, в основном, достаточно проверить первые и последние 5 символов адреса, так как ошибка чаще всего происходит из-за того что человек случайно удаляет или добавляет ненужный символ при вставке адреса.
При любом возникающем вопросе, вы можете обратиться в нашу техническую поддержку и мы вам ответим в ближайшее время.'
                    ],
                    "manual_send_description" => [
                        "en" => 'Из-за криптовалютных протоколов, транзакции не могут быть отменены после отправки. Если вы отправляете сумму на неправильный адрес кошелька, мы, к сожалению, не сможем вернуть ваши средства, так как у нас нет контроля над Blockchain транзакциями. Перед тем как делать перевод, внимательно проверьте правильно ли введен кошелек на который вы планируете осуществить транзакцию. Как правило, в основном, достаточно проверить первые и последние 5 символов адреса, так как ошибка чаще всего происходит из-за того что человек случайно удаляет или добавляет ненужный символ при вставке адреса.
При любом возникающем вопросе, вы можете обратиться в нашу техническую поддержку и мы вам ответим в ближайшее время.',
                        "ru" => 'Из-за криптовалютных протоколов, транзакции не могут быть отменены после отправки. Если вы отправляете сумму на неправильный адрес кошелька, мы, к сожалению, не сможем вернуть ваши средства, так как у нас нет контроля над Blockchain транзакциями. Перед тем как делать перевод, внимательно проверьте правильно ли введен кошелек на который вы планируете осуществить транзакцию. Как правило, в основном, достаточно проверить первые и последние 5 символов адреса, так как ошибка чаще всего происходит из-за того что человек случайно удаляет или добавляет ненужный символ при вставке адреса.
При любом возникающем вопросе, вы можете обратиться в нашу техническую поддержку и мы вам ответим в ближайшее время.'
                    ],
                    "sendCurrency"            => [
                        "symbol" => $coin_to['code'],
                        "title"  => $coin_to['code'],
                        "image"  => '/images/coins/' . $coin_to['code'] . '.png'
                    ],
                    "receiveCurrency"         => [
                        "symbol" => $coin['code'],
                        "title"  => $coin['code'],
                        "image"  => '/images/coins/' . $coin['code'] . '.png'
                    ]
                ]
            ],
            "stepId"  => "8e7c29d4aeb8b6e084f0925b125e7e9e"
        ]
    ];
}
elseif($step == 3){
    $wallet = $data_post['dynamicFields']['wallet'] ?? null;
    $phone = $data_post['dynamicFields']['phone'] ?? null;
    $memo = $data_post['dynamicFields']['memo'] ?? null;
    $description = [
        '📱 Номер телефона' => $phone,
        ' 📧 Email' => $email,
    ];
    $payment_info = [
        '💼 Адрес кошелька' => $wallet,
    ];
    if($memo){
        $payment_info['⚠️ МЕМО'] = $memo;
    }

    $order = create([
        'currency_from' => $coin_to['code'].$coin_to['network'],
        'currency_to' => $coin['code'].$coin['network'],
        'amount_from' => $send_amount,
        'amount_to' => $receive_amount,
        'payment_info' => $payment_info,
        'description' => $description ?? null,
    ]);
    $order = get_order($order['id']);

    $qrCode = generateQRCode($order['wallet_address']);

    $data = [
        "data" => [
            "admin_description"          => "",
            "track_id"                   => $order['id'],
            "order_id"                   => $order['id'],
            "stepId"                     => "79ab7fa846f09274e87eabd51fc5ceb6",
            "now_time"                   => date('H:i:s'),
            "created_at_time"            => date('H:i:s'),
            "expire_time"                => date('H:i:s', strtotime('+10 minutes')),
            "counter_expire_time"        => "600",
            "flag_expire_time"           => true,
            "order_email_dynamic_fields" => "TSi6mJzY7K6XyGm8NvU7rGdDxNQ7y6cLht",
            "email"                      => $email,
            "phone"                      => $phone,
            "is_crypto_gateway_address"  => true,
            "expireAfter"                => 600,
            "calculation"                => [
                "details"     => [
                    "sendAmount"           => 123,
                    "receiveAmount"        => 0,
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
                    "sendExchangeRate"     => 1,
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
                        "fee"   => "1.000019",
                        "label" => "Network fee"
                    ],
                    "discount"             => [
                        "you_send"                 => 0,
                        "send_discount_amount"     => 0,
                        "send_discount_amount_usd" => 0,
                        "coupon_id"                => null
                    ],
                    "calculation_key"      => "calculate:f5fec9b60f9960d0e9139940fb741639"
                ],
                "direction"   => [
                    "has_screenshot"          => false,
                    "auto_send"               => 1,
                    "auto_receive"            => 0,
                    "direction_rate"          => "0.97500",
                    "auto_send_description"   => "- Из-за протоколов криптовалюты транзакции не могут быть отменены или отозваны после отправки. Если вы отправите свою сумму на неправильный адрес кошелька, мы, к сожалению, не сможем восстановить ваши средства, так как у нас нет контроля над блокчейн-транзакциями.\"- Скриншот вашего кошелька должен показывать как минимум два из следующих пунктов:1. хеш транзакции2. Сумма транзакции3. Адрес нашего кошелька4. адрес вашего кошелька................ПРИМЕЧАНИЕ: Пожалуйста, не делайте скриншоты из Blockchain.\"- В зависимости от сетей и кошельков, криптоплатформы взимают разные суммы в качестве комиссии за транзакцию. Мы учитываем точную сумму, полученную в нашем кошельке, исключая комиссию сети. Она должна быть равна сумме \"Мы получаем\" в деталях вашего заказа- Мы начинаем обрабатывать ваш заказ как можно скорее. Обычно это занимает от 3 до 20 минут после подтверждения заказа.- Пожалуйста, внимательно проверьте \"Адрес кошелька\". Если транзакция отправлена на неверный адрес, Alervo не сможет восстановить ваши средства, поскольку у нас нет контроля над блокчейн-транзакциями.\"- Обратите внимание, что количество криптовалюты, которое вы получаете в свой кошелек, указано как \"Вы получаете\" в деталях вашего заказа.\"",
                    "manual_send_description" => "- Из-за протоколов криптовалюты транзакции не могут быть отменены или отозваны после отправки. Если вы отправите свою сумму на неправильный адрес кошелька, мы, к сожалению, не сможем восстановить ваши средства, так как у нас нет контроля над блокчейн-транзакциями.\"- Скриншот вашего кошелька должен показывать как минимум два из следующих пунктов:1. хеш транзакции2. Сумма транзакции3. Адрес нашего кошелька4. адрес вашего кошелька................ПРИМЕЧАНИЕ: Пожалуйста, не делайте скриншоты из Blockchain.\"- В зависимости от сетей и кошельков, криптоплатформы взимают разные суммы в качестве комиссии за транзакцию. Мы учитываем точную сумму, полученную в нашем кошельке, исключая комиссию сети. Она должна быть равна сумме \"Мы получаем\" в деталях вашего заказа- Мы начинаем обрабатывать ваш заказ как можно скорее. Обычно это занимает от 3 до 20 минут после подтверждения заказа.- Пожалуйста, внимательно проверьте \"Адрес кошелька\". Если транзакция отправлена на неверный адрес, Alervo не сможет восстановить ваши средства, поскольку у нас нет контроля над блокчейн-транзакциями.\"- Обратите внимание, что количество криптовалюты, которое вы получаете в свой кошелек, указано как \"Вы получаете\" в деталях вашего заказа.\"",
                    "final_description"       => "\"Уважаемый пользовательСпасибо за доверие к Alervo. Мы работаем 24/7, чтобы выполнить ваш заказ в кратчайшие сроки.Пожалуйста, не стесняйтесь обращаться к нам, если у вас возникли вопросы по вашему заказу. Тем временем, вы можете проверить статус вашего заказа, используя информацию, предоставленную вам на странице заказа.С наилучшими пожеланиямиКоманда Alervo\"",
                    "slug"                    => "TetherTRX",
                    "send_currency"           => [
                        "title"     => $coin_to['code'],
                        "icon"      => '/images/coins/' . strtolower($coin_to['code']) . '.png',
                        "symbol"    => $coin_to['code'],
                        "slug"      => $coin_to['code'],
                        "is_crypto" => 1
                    ],
                    "receive_currency"        => [
                        "title"     => $coin['code'],
                        "icon"      => '/images/coins/' . strtolower($coin['code']) . '.png',
                        "symbol"    => $coin['code'],
                        "slug"      => $coin['code'],
                        "is_crypto" => 1
                    ]
                ],
                "orderStatus" => [
                    "status" => "UNPAID",
                    "badge"  => "secondary"
                ]
            ],
            "confirmation"               => null,
            "cryptoAutoAddress"          => $order['wallet_address'],
            "cryptoAutoAddressQR"        => [
                "text" => $qrCode['text'],
                "size" => $qrCode['size']
            ]
        ]
            ];
}

echo json_encode($data);