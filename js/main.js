var detailsLeft = $('.details__left');
var detailsRight = $('.details__right');
var salesLeft = $('.sales__left');
var salesRight = $('.sales__right');

var buttonClickHandler = function(){
   var isActive = detailsLeft.attr('data-state');
    
    if (isActive == 'active'){
        detailsLeft.attr('data-state', 'inactive');
    } else{
        detailsLeft.attr('data-state','active');
    }
    
};

salesLeft.on('click', buttonClickHandler);

var buttonClickHandler = function(){
   var isActive = detailsRight.attr('data-state');
    
    if (isActive == 'active'){
        detailsRight.attr('data-state', 'inactive');
    } else{
        detailsRight.attr('data-state','active');
    }
    
};

salesRight.on('click', buttonClickHandler);