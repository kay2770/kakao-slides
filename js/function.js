const $indicator = $('.slides-container a');
const $container = $('.slides-pagination');

let nowIdx = 0;

const moveFn = function () {
	$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
};

$indicator.on('click', function (evt) {
	evt.preventDefault();

	nowIdx = $indicator.index(this);

	moveFn();
});

$('.prev').on('click', function (evt) {
	evt.preventDefault();
	$container.animate({ left: -120 * nowIdx + '%' });
});

$(document).ready(function () {
	$('ul>li>a').on('click', function (evt) {
		evt.preventDefault();

		const imgSrc = $(this).attr('url');
		$('.slides-pagination>li>a').attr({
			src: imgSrc,
		});
	});
});
