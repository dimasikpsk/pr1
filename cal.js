<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<title>Кальк</title>
</head>
<body>  
	<!-- поле ввода первого числа -->
	<input id="num1" />

	
	<!-- блок с   кнопками -->
	<div id="operator_btns">
	  <button id="plus" >+</button>
	  <button id="minus" >-</button>
	  <button id="times" >x</button>
	  <button id="divide" >:</button>
	</div>

	<!-- поле ввода второго числа -->
	<input id="num2" />
	<br>

	<!-- кнопка для рассчётов -->
	<button >Почитать</button>

</body>
</html>
dffvbrff




<?php
$source_array = ['foo' => 1, 'bar' => 2, 'baz' => 3];

// Присваивание элементу с индексом 'baz' переменной $three
['baz' => $three] = $source_array;

echo $three;   

$source_array = ['foo', 'bar', 'baz'];

// Присваивание элементу с индексом 2 переменной $baz
[2 => $baz] = $source_array;

echo $baz;    // выведет "baz"
?>
