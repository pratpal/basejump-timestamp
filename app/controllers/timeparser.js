`use strict`
var moment = require('moment');

function timeParser(){
    
    this.convertToNaturalFromUnix = function(datestring){
       return new moment.unix(datestring).format("MMMM DD, Y");
    }
    
    this.convertFromUnixToNatural  = function(datestring){
        return new Date(datestring).getTime() / 1000
     } 
    
    this.IsValidUnixTime= function(datestring){
     
      return  moment(datestring, "X").isValid() && (Number(datestring) > 0) ;
    }
    
    this.IsValidNaturalTime  = function(datestring){
        console.log(datestring)
        console.log(moment(datestring, "MMMM DD, Y"))
        return moment(datestring, "MMMM DD, Y").isValid();
    }
    
    this.getNaturalTimeForUnixTime = function(datestring){
        return {unix:datestring, natural:this.convertToNaturalFromUnix(datestring) }
    }
    
    this.getUnixTimeForNaturalTime = function(datestring){
     
         return {unix:this.convertFromUnixToNatural(datestring), natural:datestring }
    }
    
    this.getNullTime=function(){
        return {unix:null, natural:null}
    }
    
    this.getTimes = function(datestring){
       
        if (this.IsValidUnixTime(datestring)) {
             return this.getNaturalTimeForUnixTime(datestring)
        }
        else if (this.IsValidNaturalTime(datestring)){
            return this.getUnixTimeForNaturalTime(datestring)
        }
        else {
            return this.getNullTime()
        }
    }
}

module.exports = timeParser;