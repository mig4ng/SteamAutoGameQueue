// ==UserScript==
// @name         Steam QueueBot Christmas 2015
// @namespace    http://steamcommunity.com/id/mig4ng/
// @version      0.3
// @description  Reminds you to check if you have cards to obtain by checking the queue steam arranged for you and auto completes it for you.
// @author       mig4ng
// @require      http://code.jquery.com/jquery-latest.js
// @match        http://store.steampowered.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var alerts = true; // change to false if you don't want the alerts
var donateAlerts = true; // change to false if you don't want the annoying tab to open everytime, btw consider donating a card or a cheap skin if you found this script somewhat useful

// Set both to 0 if you want it to be instant
var maxTime = 6000; // max time in miliseconds between the load of the page and the button pressing
var minTime = 500; // min time in miliseconds between the load of the page and the button pressing

if ($('span.queue_sub_text').length) {
    setTimeout(function(){ $J('#next_in_queue_form').submit(); }, (maxTime-minTime)*Math.random() + minTime);
}
if ($('span.finish_queue_text').length) {
    setTimeout(function(){ $J('#next_in_queue_form').submit(); }, (maxTime-minTime)*Math.random() + minTime);
}
if ($('div.discover_queue_empty_refresh_btn').length) {
    if(donateAlerts){
        $( "<h3 class='donateAuthor'>Consider donating a duplicate card that you got or a cheap skin if you found this script somewhat useful!</h3>" ).insertAfter( ".keepGoing" );
        $( "<h3 class='donateTradeOffer'><a href='https://steamcommunity.com/tradeoffer/new/?partner=107239973&token=OacSUh60' target='_blank'>Send me a trade offer, consider it a Christmas Gift :)</a></h3>" ).insertAfter( ".donateAuthor" );
        $( "<h3 class='donateMerryChristmas'>I wish you, your familly, and your friends a Merry Christmas and a Happy New Year, thanks for using my script.</h3>" ).insertAfter( ".donateTradeOffer" );
    }
    if(alerts){
        alert("If you still have cards for today to obtain by completing the queue click start and the script will complete the queue for you!");
    }
}
