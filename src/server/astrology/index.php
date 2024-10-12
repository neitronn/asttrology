<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    sleep(2);
    $ret = [
        'info' => [
			'address' => 'Город улица дом',
			'phone' => '+9(999) 999-99-99'
		],
		'menu' => [
			[
				'id' => 1,
				'name' => 'home',
				'href' => '#',
				'popup' => [
					[
						'id' => 2,
						'name' => 'home1', 
						'href' => '#'
					],
					[
						 'id' => 3,
						 'name' => 'home2', 
						 'href' => '#'
					 ]
				]
			],
			[
				'id' => 4,
				'name' => 'About Us', 
				'href' => '#'
			],
			[
				'id' => 5,
				'name' => 'Horoscope', 
				'href' => '#'
			],
			[
				'id' => 6,
				'name' => 'Services',
				'href' => '#',
				'popup' => [
					[
						'id' => 7,
						'name' => 'Aries', 
						'href' => '#'
					],
					[
						 'id' => 8,
						 'name' => 'Chinese', 
						 'href' => '#'
					],
					[
						'id' => 9,
						'name' => 'Chinese-Single', 
						'href' => '#'
					],
					[
						 'id' => 10,
						 'name' => 'Crystal', 
						 'href' => '#'
					],
					[
						'id' => 11,
						'name' => 'Kundli-Dosh', 
						'href' => '#'
					],
					[
						 'id' => 12,
						 'name' => 'Numerology', 
						 'href' => '#',
						 'popup' => [
							[
								'id' => 13,
								'name' => 'Numerology1',
								'href' => '#'
							],
							[
								'id' => 14,
								'name' => 'Numerology2',
								'href' => '#'
							]
						 ]
					],
					[
						'id' => 15,
						'name' => 'Palm', 
						'href' => '#'
					],
					[
						 'id' => 16,
						 'name' => 'Tarot', 
						 'href' => '#'
					 ],
					 [
						  'id' => 17,
						  'name' => 'Tarot-Single', 
						  'href' => '#'
					  ],
					  [
						   'id' => 18,
						   'name' => 'Vastu-Shastra', 
						   'href' => '#'
					   ]
				]
			],
			[
				'id' => 19,
				'name' => 'Shop', 
				'href' => '#',
				'popup' => [
					[
						'id' => 20,
						'name' => 'Shop1', 
						'href' => '#'
					],
					[
						'id' => 21,
						'name' => 'Shop-Single', 
						'popup' => [
							[
								'id' => 22,
								'name' => 'Shop2',
								'popup' => [
									[
										'id' => 23,
										'name' => 'Shop3',
										'popup' => [
											[
												'id' => 24,
												'name' => 'Shop4', 
												'href' => '#'
											]
										]
									]
								]
							]
						]
					]
				]
			],
			[
				'id' => 25,
				'name' => 'News',
				'href' => '#',
				'popup' => [
					[
						'id' => 26,
						'name' => 'Blog-Categories', 
						'href' => '#'
					],
					[
						'id' => 27,
						'name' => 'Blog-Single', 
						'href' => '#'
					]
				]
			],
			[
				'id' => 28,
				'name' => 'News', 
				'href' => '#'
			]
		],
		'pages' => [
			'contact' => [
				'name' => 'контакты',
				'link' => '/contact'
			]
		]
    ];

    $filename = 'test.txt';
    $somecontent = date("H:i:s") . "\n";
    $fp = fopen($filename, 'a');
    fwrite($fp, $somecontent);
    fclose($fp);

    echo json_encode($ret);