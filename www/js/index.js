/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var com = new Object();

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        atualiza();
        
        var dia = new Date().getDay();
        var hora = new Date().getHours();
        console.log(dia);
        console.log(hora);

        switch(dia){
            case 1:
                if (hora < 14) {
                    segd();
                }else{
                    segn();
                }
                break;
            case 2:
                if (hora < 14) {
                    terd();
                }else{
                    tern();
                }
                break;
            case 3:
                if (hora < 14) {
                    quad();
                }else{
                    quan();
                }
                break;
            case 4:
                if (hora < 14) {
                    quid();
                }else{
                    quin();
                }
                break;
            case 5:
                if (hora < 14) {
                    sexd();
                }else{
                    sexn();
                }
                break;
            case 6:
                sab();
                break;
            default:
                if (hora < 14) {
                    segd();
                }else{
                    segn();
                }
                break;
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};

function atualiza(){
    
    $.ajax({
            url : "https://fast-plateau-72082.herokuapp.com/api/", // the endpoint
            type : "GET", // http method
            async : false,
            success : function(json) {
                console.log(json); // log the returned json to the console
                com = json;
                
                $('#dia').html("<h5><small>Atualizado às "+com[11]+"</small></h5>")
            },
            beforeSend: function(){
              $('.progress').removeClass("quit");
            },
            complete: function(){
              $('.progress').addClass("quit");
            },

            // handle a non-successful response
            error : function(xhr,errmsg,err) {
                $('#dia').html("<h5><small>Falha ao buscar API</small></h5>")
                console.log('offline');

            }
        });
}
//lml
function segd(){
    $('.til').html("Segunda (Almoço)");

    $('#cont').html(
        "<p style='font-size: 13pt;'>Prato principal: <b>"+com[0][0]+"</b></p>"
        );
    if(com[0][1] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Mistura: <b>"+com[0][1]+"</b></p>");
    }
    if(com[0][2] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Fruta: <b>"+com[0][2]+"</b></p>");
    }
    if(com[0][3] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Salada: <b>"+com[0][3]+"</b></p>");
    }
    if(com[0][4] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Suco: <b>"+com[0][4]+"</b></p>");
    }
    if(com[0][5] != false){
        $('#cont').append("<p style='font-size: 13pt;'><b>Farofa</b></p>");
    }
     $('.button-collapse').sideNav('hide');
};

function segn(){
    $('.til').html("Segunda (Janta)");

    $('#cont').html(
        "<p style='font-size: 13pt;'>Prato principal: <b>"+com[1][0]+"</b></p>"
        );
    if(com[1][1] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Mistura: <b>"+com[1][1]+"</b></p>");
    }
    if(com[1][2] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Fruta: <b>"+com[1][2]+"</b></p>");
    }
    if(com[1][3] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Salada: <b>"+com[1][3]+"</b></p>");
    }
    if(com[1][4] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Suco: <b>"+com[1][4]+"</b></p>");
    }
    if(com[1][5] != false){
        $('#cont').append("<p style='font-size: 13pt;'><b>Farofa</b></p>");
    }
    $('.button-collapse').sideNav('hide');

};

function terd(){
    $('.til').html("Terça (Almoço)");

    $('#cont').html(
        "<p style='font-size: 13pt;'>Prato principal: <b>"+com[2][0]+"</b></p>"
        );
    if(com[2][1] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Mistura: <b>"+com[2][1]+"</b></p>");
    }
    if(com[2][2] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Fruta: <b>"+com[2][2]+"</b></p>");
    }
    if(com[2][3] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Salada: <b>"+com[2][3]+"</b></p>");
    }
    if(com[2][4] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Suco: <b>"+com[2][4]+"</b></p>");
    }
    if(com[2][5] != false){
        $('#cont').append("<p style='font-size: 13pt;'><b>Farofa</b></p>");
    }
    $('.button-collapse').sideNav('hide');
};

function tern(){
    $('.til').html("Terça (Janta)");

    $('#cont').html(
        "<p style='font-size: 13pt;'>Prato principal: <b>"+com[3][0]+"</b></p>"
        );
    if(com[3][1] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Mistura: <b>"+com[3][1]+"</b></p>");
    }
    if(com[3][2] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Fruta: <b>"+com[3][2]+"</b></p>");
    }
    if(com[3][3] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Salada: <b>"+com[3][3]+"</b></p>");
    }
    if(com[3][4] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Suco: <b>"+com[3][4]+"</b></p>");
    }
    if(com[3][5] != false){
        $('#cont').append("<p style='font-size: 13pt;'><b>Farofa</b></p>");
    }
    $('.button-collapse').sideNav('hide');
};

function quad(){
    $('.til').html("Quarta (Almoço)");

    $('#cont').html(
        "<p style='font-size: 13pt;'>Prato principal: <b>"+com[3][0]+"</b></p>"
        );
    if(com[3][1] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Mistura: <b>"+com[3][1]+"</b></p>");
    }
    if(com[3][2] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Fruta: <b>"+com[3][2]+"</b></p>");
    }
    if(com[3][3] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Salada: <b>"+com[3][3]+"</b></p>");
    }
    if(com[3][4] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Suco: <b>"+com[3][4]+"</b></p>");
    }
    if(com[3][5] != false){
        $('#cont').append("<p style='font-size: 13pt;'><b>Farofa</b></p>");
    }
    $('.button-collapse').sideNav('hide');
};

function quan(){
    $('.til').html("Quarta (Janta)");

    $('#cont').html(
        "<p style='font-size: 13pt;'>Prato principal: <b>"+com[4][0]+"</b></p>"
        );
    if(com[4][1] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Mistura: <b>"+com[4][1]+"</b></p>");
    }
    if(com[4][2] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Fruta: <b>"+com[4][2]+"</b></p>");
    }
    if(com[4][3] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Salada: <b>"+com[4][3]+"</b></p>");
    }
    if(com[4][4] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Suco: <b>"+com[4][4]+"</b></p>");
    }
    if(com[4][5] != false){
        $('#cont').append("<p style='font-size: 13pt;'><b>Farofa</b></p>");
    }
    $('.button-collapse').sideNav('hide');
};

function quid(){
    $('.til').html("Quinta (Almoço)");

    $('#cont').html(
        "<p style='font-size: 13pt;'>Prato principal: <b>"+com[5][0]+"</b></p>"
        );
    if(com[5][1] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Mistura: <b>"+com[5][1]+"</b></p>");
    }
    if(com[5][2] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Fruta: <b>"+com[5][2]+"</b></p>");
    }
    if(com[5][3] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Salada: <b>"+com[5][3]+"</b></p>");
    }
    if(com[5][4] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Suco: <b>"+com[5][4]+"</b></p>");
    }
    if(com[5][5] != false){
        $('#cont').append("<p style='font-size: 13pt;'><b>Farofa</b></p>");
    }
    $('.button-collapse').sideNav('hide');
};

function quin(){
    $('.til').html("Quinta (Janta)");

    $('#cont').html(
        "<p style='font-size: 13pt;'>Prato principal: <b>"+com[6][0]+"</b></p>"
        );
    if(com[6][1] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Mistura: <b>"+com[6][1]+"</b></p>");
    }
    if(com[6][2] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Fruta: <b>"+com[6][2]+"</b></p>");
    }
    if(com[6][3] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Salada: <b>"+com[6][3]+"</b></p>");
    }
    if(com[6][4] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Suco: <b>"+com[6][4]+"</b></p>");
    }
    if(com[6][5] != false){
        $('#cont').append("<p style='font-size: 13pt;'><b>Farofa</b></p>");
    }
    $('.button-collapse').sideNav('hide');
};

function sexd(){
    $('.til').html("Sexta (Almoço)");

    $('#cont').html(
        "<p style='font-size: 13pt;'>Prato principal: <b>"+com[7][0]+"</b></p>"

        );
    if(com[7][1] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Mistura: <b>"+com[7][1]+"</b></p>");
    }
    if(com[7][2] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Fruta: <b>"+com[7][2]+"</b></p>");
    }
    if(com[7][3] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Salada: <b>"+com[7][3]+"</b></p>");
    }
    if(com[7][4] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Suco: <b>"+com[7][4]+"</b></p>");
    }
    if(com[7][5] != false){
        $('#cont').append("<p style='font-size: 13pt;'><b>Farofa</b></p>");
    }
    $('.button-collapse').sideNav('hide');
};

function sexn(){
    $('.til').html("Sexta (Janta)");

    $('#cont').html(
        "<p style='font-size: 13pt;'>Prato principal: <b>"+com[8][0]+"</b></p>"
        );
    if(com[8][1] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Mistura: <b>"+com[8][1]+"</b></p>");
    }
    if(com[8][2] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Fruta: <b>"+com[8][2]+"</b></p>");
    }
    if(com[8][3] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Salada: <b>"+com[8][3]+"</b></p>");
    }
    if(com[8][4] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Suco: <b>"+com[8][4]+"</b></p>");
    }
    if(com[8][5] != false){
        $('#cont').append("<p style='font-size: 13pt;'><b>Farofa</b></p>");
    }
    
    $('.button-collapse').sideNav('hide');
};

function sab(){
    $('.til').html("Sábado (Almoço)");

    $('#cont').html(
        "<p style='font-size: 13pt;'>Prato principal: <b>"+com[9][0]+"</b></p>"
        );
    if(com[9][1] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Mistura: <b>"+com[9][1]+"</b></p>");
    }
    if(com[9][2] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Fruta: <b>"+com[9][2]+"</b></p>");
    }
    if(com[9][3] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Salada: <b>"+com[9][3]+"</b></p>");
    }
    if(com[9][4] != ''){
        $('#cont').append("<p style='font-size: 13pt;'>Suco: <b>"+com[9][4]+"</b></p>");
    }
    if(com[9][5] != false){
        $('#cont').append("<p style='font-size: 13pt;'><b>Farofa</b></p>");
    }
    $('.button-collapse').sideNav('hide');
};

function sair(){
    navigator.app.exitApp();
}