$(document).ready(function() {

   $('#submitDay').click(function () {
       
       var checkDay =
       $('.selectDay option:selected').val();
       
        switch(checkDay) {
            
            case "1":
                
                $('#tourMenu1').addClass('hideTourDivs');
                $('#oneDayTour').removeClass('hideTourDivs');
                $('#twoDayTour').addClass('hideTourDivs');
                $('#threeDayTour').addClass('hideTourDivs');
                
        break;
                        
            case "2":
                
                $('#tourMenu1').addClass('hideTourDivs');
                $('#twoDayTour').removeClass('hideTourDivs');
                $('#oneDayTour').addClass('hideTourDivs');
                $('#threeDayTour').addClass('hideTourDivs');
                
        break;
                       
            case "3":
                        
                $('#tourMenu1').addClass('hideTourDivs');
                $('#threeDayTour').removeClass('hideTourDivs');
                $('#oneDayTour').addClass('hideTourDivs');
                $('#twoDayTour').addClass('hideTourDivs');
                
        break;
                        
            
            default:
            
           $('.tourMenu').text('Please select 1, 2 or 3.');
            //$('.tourMenu').text("pony"+checkDay);
            
        }
   });
});
        