// returns the length in pixels from the hours in a time
function hourToPixels(time) {
	var string = time.slice(0,2);
	var number = parseInt(string, 10);
	var result = number * 4 * 25;
	return result;
}
// returns the length in pixels from the minutes in a time
function minuteToPixels(time) {
	var string = time.slice(3,5);
	var number = parseInt(string, 10);
	var result;
	if (number >= 0 && number <= 7) {
		result = 0;
	} else if (number > 7 && number <= 22) {
		result = 25;
	} else if (number > 22 && number <= 37) {
		result = 50;
	} else if (number > 37 && number <= 52) {
		result = 75;
	} else {
		result = 100;
	}
	return result;
}
// determines the time interval based on y axis offset (0 - 2400)
function findBegInterval(y) {
	if (y >= 0 && y <= 25) {
			return "00:00";
	} else if (y > 25 && y <= 50) {
			return "00:15";
	} else if (y > 50 && y <= 75) {
			return "00:30";
	} else if (y > 75 && y <= 100) {
			return "00:45";
	} else if (y > 100 && y <= 125) {
			return "01:00";
	} else if (y > 125 && y <= 150) {
			return "01:15";
	} else if (y > 150 && y <= 175) {
			return "01:30";
	} else if (y > 175 && y <= 200) {
			return "01:45";
	} else if (y > 200 && y <= 225) {
			return "02:00";
	} else if (y > 225 && y <= 250) {
			return "02:15";
	} else if (y > 250 && y <= 275) {
			return "02:30";
	} else if (y > 275 && y <= 300) {
			return "02:45";
	} else if (y > 300 && y <= 325) {
			return "03:00";
	} else if (y > 325 && y <= 350) {
			return "03:15";
	} else if (y > 350 && y <= 375) {
			return "03:30";
	} else if (y > 375 && y <= 400) {
			return "03:45";
	} else if (y > 400 && y <= 425) {
			return "04:00";
	} else if (y > 425 && y <= 450) {
			return "04:15";
	} else if (y > 450 && y <= 475) {
			return "04:30";
	} else if (y > 475 && y <= 500) {
			return "04:45";
	} else if (y > 500 && y <= 525) {
			return "05:00";
	} else if (y > 525 && y <= 550) {
			return "05:15";
	} else if (y > 550 && y <= 575) {
			return "05:30";
	} else if (y > 575 && y <= 600) {
			return "05:45";
	} else if (y > 600 && y <= 625) {
			return "06:00";
	} else if (y > 625 && y <= 650) {
			return "06:15";
	} else if (y > 650 && y <= 675) {
			return "06:30";
	} else if (y > 675 && y <= 700) {
			return "06:45";
	} else if (y > 700 && y <= 725) {
			return "07:00";
	} else if (y > 725 && y <= 750) {
			return "07:15";
	} else if (y > 750 && y <= 775) {
			return "07:30";
	} else if (y > 775 && y <= 800) {
			return "07:45";
	} else if (y > 800 && y <= 825) {
			return "08:00";
	} else if (y > 825 && y <= 850) {
			return "08:15";
	} else if (y > 850 && y <= 875) {
			return "08:30";
	} else if (y > 875 && y <= 900) {
			return "08:45";
	} else if (y > 900 && y <= 925) {
			return "09:00";
	} else if (y > 925 && y <= 950) {
			return "09:15";
	} else if (y > 950 && y <= 975) {
			return "09:30";
	} else if (y > 975 && y <= 1000) {
			return "09:45";
	} else if (y > 1000 && y <= 1025) {
			return "10:00";
	} else if (y > 1025 && y <= 1050) {
			return "10:15";
	} else if (y > 1050 && y <= 1075) {
			return "10:30";
	} else if (y > 1075 && y <= 1100) {
			return "10:45";
	} else if (y > 1100 && y <= 1125) {
			return "11:00";
	} else if (y > 1125 && y <= 1150) {
			return "11:15";
	} else if (y > 1150 && y <= 1175) {
			return "11:30";
	} else if (y > 1175 && y <= 1200) {
			return "11:45";
	} else if (y > 1200 && y <= 1225) {
			return "12:00";
	} else if (y > 1225 && y <= 1250) {
			return "12:15";
	} else if (y > 1250 && y <= 1275) {
			return "12:30";
	} else if (y > 1275 && y <= 1300) {
			return "12:45";
	} else if (y > 1300 && y <= 1325) {
			return "13:00";
	} else if (y > 1325 && y <= 1350) {
			return "13:15";
	} else if (y > 1350 && y <= 1375) {
			return "13:30";
	} else if (y > 1375 && y <= 1400) {
			return "13:45";
	} else if (y > 1400 && y <= 1425) {
			return "14:00";
	} else if (y > 1425 && y <= 1450) {
			return "14:15";
	} else if (y > 1450 && y <= 1475) {
			return "14:30";
	} else if (y > 1475 && y <= 1500) {
			return "14:45";
	} else if (y > 1500 && y <= 1525) {
			return "15:00";
	} else if (y > 1525 && y <= 1550) {
			return "15:15";
	} else if (y > 1550 && y <= 1575) {
			return "15:30";
	} else if (y > 1575 && y <= 1600) {
			return "15:45";
	} else if (y > 1600 && y <= 1625) {
			return "16:00";
	} else if (y > 1625 && y <= 1650) {
			return "16:15";
	} else if (y > 1650 && y <= 1675) {
			return "16:30";
	} else if (y > 1675 && y <= 1700) {
			return "16:45";
	} else if (y > 1700 && y <= 1725) {
			return "17:00";
	} else if (y > 1725 && y <= 1750) {
			return "17:15";
	} else if (y > 1750 && y <= 1775) {
			return "17:30";
	} else if (y > 1775 && y <= 1800) {
			return "17:45";
	} else if (y > 1800 && y <= 1825) {
			return "18:00";
	} else if (y > 1825 && y <= 1850) {
			return "18:15";
	} else if (y > 1850 && y <= 1875) {
			return "18:30";
	} else if (y > 1875 && y <= 1900) {
			return "18:45";
	} else if (y > 1900 && y <= 1925) {
			return "19:00";
	} else if (y > 1925 && y <= 1950) {
			return "19:15";
	} else if (y > 1950 && y <= 1975) {
			return "19:30";
	} else if (y > 1975 && y <= 2000) {
			return "19:45";
	} else if (y > 2000 && y <= 2025) {
			return "20:00";
	} else if (y > 2025 && y <= 2050) {
			return "20:15";
	} else if (y > 2050 && y <= 2075) {
			return "20:30";
	} else if (y > 2075 && y <= 2100) {
			return "20:45";
	} else if (y > 2100 && y <= 2125) {
			return "21:00";
	} else if (y > 2125 && y <= 2150) {
			return "21:15";
	} else if (y > 2150 && y <= 2175) {
			return "21:30";
	} else if (y > 2175 && y <= 2200) {
			return "21:45";
	} else if (y > 2200 && y <= 2225) {
			return "22:00";
	} else if (y > 2225 && y <= 2250) {
			return "22:15";
	} else if (y > 2250 && y <= 2275) {
			return "22:30";
	} else if (y > 2275 && y <= 2300) {
			return "22:45";
	} else if (y > 2300 && y <= 2325) {
			return "23:00";
	} else if (y > 2325 && y <= 2350) {
			return "23:15";
	} else if (y > 2350 && y <= 2375) {
			return "23:30";
	} else if (y > 2375 && y <= 2400) {
			return "23:45";
	}
}

function findEndInterval(y) {
	if (y >= 0 && y <= 25) {
			return "00:15";
	} else if (y > 25 && y <= 50) {
			return "00:30";
	} else if (y > 50 && y <= 75) {
			return "00:45";
	} else if (y > 75 && y <= 100) {
			return "01:00";
	} else if (y > 100 && y <= 125) {
			return "01:15";
	} else if (y > 125 && y <= 150) {
			return "01:30";
	} else if (y > 150 && y <= 175) {
			return "01:45";
	} else if (y > 175 && y <= 200) {
			return "02:00";
	} else if (y > 200 && y <= 225) {
			return "02:15";
	} else if (y > 225 && y <= 250) {
			return "02:30";
	} else if (y > 250 && y <= 275) {
			return "02:45";
	} else if (y > 275 && y <= 300) {
			return "03:00";
	} else if (y > 300 && y <= 325) {
			return "03:15";
	} else if (y > 325 && y <= 350) {
			return "03:30";
	} else if (y > 350 && y <= 375) {
			return "03:45";
	} else if (y > 375 && y <= 400) {
			return "04:00";
	} else if (y > 400 && y <= 425) {
			return "04:15";
	} else if (y > 425 && y <= 450) {
			return "04:30";
	} else if (y > 450 && y <= 475) {
			return "04:45";
	} else if (y > 475 && y <= 500) {
			return "05:00";
	} else if (y > 500 && y <= 525) {
			return "05:15";
	} else if (y > 525 && y <= 550) {
			return "05:30";
	} else if (y > 550 && y <= 575) {
			return "05:45";
	} else if (y > 575 && y <= 600) {
			return "06:00";
	} else if (y > 600 && y <= 625) {
			return "06:15";
	} else if (y > 625 && y <= 650) {
			return "06:30";
	} else if (y > 650 && y <= 675) {
			return "06:45";
	} else if (y > 675 && y <= 700) {
			return "07:00";
	} else if (y > 700 && y <= 725) {
			return "07:15";
	} else if (y > 725 && y <= 750) {
			return "07:30";
	} else if (y > 750 && y <= 775) {
			return "07:45";
	} else if (y > 775 && y <= 800) {
			return "08:00";
	} else if (y > 800 && y <= 825) {
			return "08:15";
	} else if (y > 825 && y <= 850) {
			return "08:30";
	} else if (y > 850 && y <= 875) {
			return "08:45";
	} else if (y > 875 && y <= 900) {
			return "09:00";
	} else if (y > 900 && y <= 925) {
			return "09:15";
	} else if (y > 925 && y <= 950) {
			return "09:30";
	} else if (y > 950 && y <= 975) {
			return "09:45";
	} else if (y > 975 && y <= 1000) {
			return "10:00";
	} else if (y > 1000 && y <= 1025) {
			return "10:15";
	} else if (y > 1025 && y <= 1050) {
			return "10:30";
	} else if (y > 1050 && y <= 1075) {
			return "10:45";
	} else if (y > 1075 && y <= 1100) {
			return "11:00";
	} else if (y > 1100 && y <= 1125) {
			return "11:15";
	} else if (y > 1125 && y <= 1150) {
			return "11:30";
	} else if (y > 1150 && y <= 1175) {
			return "11:45";
	} else if (y > 1175 && y <= 1200) {
			return "12:00";
	} else if (y > 1200 && y <= 1225) {
			return "12:15";
	} else if (y > 1225 && y <= 1250) {
			return "12:30";
	} else if (y > 1250 && y <= 1275) {
			return "12:45";
	} else if (y > 1275 && y <= 1300) {
			return "13:00";
	} else if (y > 1300 && y <= 1325) {
			return "13:15";
	} else if (y > 1325 && y <= 1350) {
			return "13:30";
	} else if (y > 1350 && y <= 1375) {
			return "13:45";
	} else if (y > 1375 && y <= 1400) {
			return "14:00";
	} else if (y > 1400 && y <= 1425) {
			return "14:15";
	} else if (y > 1425 && y <= 1450) {
			return "14:30";
	} else if (y > 1450 && y <= 1475) {
			return "14:45";
	} else if (y > 1475 && y <= 1500) {
			return "15:00";
	} else if (y > 1500 && y <= 1525) {
			return "15:15";
	} else if (y > 1525 && y <= 1550) {
			return "15:30";
	} else if (y > 1550 && y <= 1575) {
			return "15:45";
	} else if (y > 1575 && y <= 1600) {
			return "16:00";
	} else if (y > 1600 && y <= 1625) {
			return "16:15";
	} else if (y > 1625 && y <= 1650) {
			return "16:30";
	} else if (y > 1650 && y <= 1675) {
			return "16:45";
	} else if (y > 1675 && y <= 1700) {
			return "17:00";
	} else if (y > 1700 && y <= 1725) {
			return "17:15";
	} else if (y > 1725 && y <= 1750) {
			return "17:30";
	} else if (y > 1750 && y <= 1775) {
			return "17:45";
	} else if (y > 1775 && y <= 1800) {
			return "18:00";
	} else if (y > 1800 && y <= 1825) {
			return "18:15";
	} else if (y > 1825 && y <= 1850) {
			return "18:30";
	} else if (y > 1850 && y <= 1875) {
			return "18:45";
	} else if (y > 1875 && y <= 1900) {
			return "19:00";
	} else if (y > 1900 && y <= 1925) {
			return "19:15";
	} else if (y > 1925 && y <= 1950) {
			return "19:30";
	} else if (y > 1950 && y <= 1975) {
			return "19:45";
	} else if (y > 1975 && y <= 2000) {
			return "20:00";
	} else if (y > 2000 && y <= 2025) {
			return "20:15";
	} else if (y > 2025 && y <= 2050) {
			return "20:30";
	} else if (y > 2050 && y <= 2075) {
			return "20:45";
	} else if (y > 2075 && y <= 2100) {
			return "21:00";
	} else if (y > 2100 && y <= 2125) {
			return "21:15";
	} else if (y > 2125 && y <= 2150) {
			return "21:30";
	} else if (y > 2150 && y <= 2175) {
			return "21:45";
	} else if (y > 2175 && y <= 2200) {
			return "22:00";
	} else if (y > 2200 && y <= 2225) {
			return "22:15";
	} else if (y > 2225 && y <= 2250) {
			return "22:30";
	} else if (y > 2250 && y <= 2275) {
			return "22:45";
	} else if (y > 2275 && y <= 2300) {
			return "23:00";
	} else if (y > 2300 && y <= 2325) {
			return "23:15";
	} else if (y > 2325 && y <= 2350) {
			return "23:30";
	} else if (y > 2350 && y <= 2375) {
			return "23:45";
	} else if (y > 2375 && y <= 2400) {
			return "23:59";
	}
}

function createPlan() {
	$('.plan-form').hide();
	$('.category').on('click', function() {
		var selection = $(this).data("form");
		var start_at = $('.plan-new').attr("start-at");
		var end_at = $('.plan-new').attr("end-at");
		console.log(start_at);
		console.log(end_at);
		$('.category').hide();
		$('.form-start-at').attr("value", start_at);
		$('.form-end-at').attr("value", end_at);
		$(selection).show();
	});

	$('.plan-back-button').on('click', function() {
		$(this).closest(".plan-form").hide();
		$('.category').each(function() {
			$(this).show();
		});
	});

	$('.close-category-container').on('click', function() {
		$('.category-container').hide();
		$('.plan-new-wrap').remove();
	});

}

function showCategory(x,y) {
	$('.category-container').show().css({"top": y + "px", "left": x + "px"});
}


function newPlan() {

	var clicking = false;
	var begin, end; // the initial and current position of mouses
	var start_at, end_at;
	var topp, height;
	var planWrap = $('<div class="plan-wrap plan-new-wrap"></div>');
	var planDisplay = $('<div class="plan-display plan-new"></div>');

	$('.plan-create').on('mousedown', function(e) {
		clicking = true;
		$('.category-container').hide();
		begin = e.offsetY;
		start_at = findBegInterval(e.offsetY);
		end_at = findEndInterval(e.offsetY);
		topp = hourToPixels(start_at) + minuteToPixels(start_at);
		height = hourToPixels(end_at) + minuteToPixels(end_at) - topp;
		planWrap.css({"top": topp + "px", "height": height + 3 + "px"});
		planDisplay.css({"height": height - 2 + "px"});
		planWrap.append(planDisplay);
		planDisplay.attr({"start-at":start_at,"end-at":end_at});
		$('.plan-display-container').append(planWrap);
	});

	$(document).on('mousemove', function(e) {
		if (clicking === false) return;
		end = e.pageY - $('.plan-create').offset().top
		if (end > begin) {
			end_at = findEndInterval(end);
			height = hourToPixels(end_at) + minuteToPixels(end_at) - topp;
			planWrap.css({"height": height + 3 + "px"});
			planDisplay.css({"height": height - 2 + "px"});
			planDisplay.html("("+start_at+"-"+end_at+")");
			planDisplay.attr({"start-at":start_at,"end-at":end_at});
		} else if (end < begin) {
			end_at = findEndInterval(begin);
			start_at = findBegInterval(end);
			topp = hourToPixels(start_at) + minuteToPixels(start_at);
			height = hourToPixels(end_at) + minuteToPixels(end_at) - topp;
			planWrap.css({"top": topp + "px", "height": height + 3 + "px"});
			planDisplay.css({"height": height - 2 + "px"});
			planDisplay.html("("+start_at+"-"+end_at+")");
			planDisplay.attr({"start-at":start_at,"end-at":end_at});
		}
	});

	$('.plan-display-container').on('mouseleave', function(e) {
		if (clicking === false) return;
		clicking = false;
		showCategory(e.pageX, e.pageY - 100);
	});

	$(document).on('mouseup', function(e) {
		if (clicking === false) return;
		clicking = false;
		showCategory(e.pageX - 100, e.pageY - 100);
	});
}



function jsonIntoPlanner() {
	var planner = $('.day-planner');

	if (planner && window.gon.plans.length > 0) {
		for (var i = 0; i <= window.gon.plans.length; i++) {
			var plan = window.gon.plans[i];
			var planWrap = $('<div class="plan-wrap"></div>');
			var planDisplay = $('<div class="plan-display"></div>');
			var destroyLink = $('<a rel="nofollow" data-method="delete" class="plan-delete" href="/plans/' + plan.id + '"></a>');
			var topp = hourToPixels(plan.start_at) + minuteToPixels(plan.start_at);
			var height = hourToPixels(plan.end_at) + minuteToPixels(plan.end_at) - topp;
			var time = " (" + plan.start_at + " - " + plan.end_at + ")"
			
			planWrap.css({"top": topp + "px", "height": height + 3 + "px"});
			planDisplay.css({"height": height - 2 + "px"});
			planWrap.append(planDisplay);
			planDisplay.append(plan.event.name + time);
			planDisplay.append(destroyLink);
			$(".plan-display-container").append(planWrap);
		}
  }
}


$(document).ready(function() {
	$('.category-container').hide();
	createPlan();
 	newPlan();
	jsonIntoPlanner();
});