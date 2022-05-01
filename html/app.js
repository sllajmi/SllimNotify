$(function () {
    var sound = new Audio('sound.mp3');
    sound.volume = 0.1;  //Volume of Notification
    window.addEventListener('message', function (event) {
        if (event.data.action == 'open') {
            var number = Math.floor((Math.random() * 1000) + 1);
            $('.toast').append(`
            <div class="wrapper-${number}">
                <div class="main_notification-${number}">
                    <div class="title-${number}"></div>
                    <div class="text-${number}">
                        ${event.data.message}
                    </div>
                </div>
            </div>`)
            $(`.wrapper-${number}`).css({
                "margin-bottom": "10px",             //
                "width": "285px",                    //Size of Notification
                "margin": "0 0 8px -170px",          //             
                "border-radius": "30px"              //
            })
            $('.main_notification-'+number).addClass('main')
            $('.text-'+number).css({
                "font-size": "14px"      //Font size of text
            })



             //SUCCESS NOTIFICATION

             if (event.data.type == 'success') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",      //Font size of title
                    "font-weight": "600"
                })
                $(`.main_notification-${number}`).addClass('success_icon')
                $(`.wrapper-${number}`).addClass('success success_border')
                sound.play();



             //NORMAL NOTIFICATION

            } else if (event.data.type == 'normal') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",      //Font size of title
                    "font-weight": "600"
                })
                $(`.main_notification-${number}`).addClass('normal_icon')
                $(`.wrapper-${number}`).addClass('normal normal_border')
                sound.play();



             //WARNING NOTIFICATION

            } else if (event.data.type == 'warning') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",      //Font size of title
                    "font-weight": "600"
                })
                $(`.main_notification-${number}`).addClass('warning_icon')
                $(`.wrapper-${number}`).addClass('warning warning_border')
                sound.play();



             //INFO NOTIFICATION

            } else if (event.data.type == 'info') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",      //Font size of title
                    "font-weight": "600"
                })
                $(`.main_notification-${number}`).addClass('info_icon')
                $(`.wrapper-${number}`).addClass('info info_border')
                sound.play();



             //POLICE NOTIFICATION
            
            } else if (event.data.type == 'police') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",      //Font size of title
                    "font-weight": "600"
                })
                $(`.main_notification-${number}`).addClass('police_icon')
                $(`.wrapper-${number}`).addClass('police police_border')
                sound.play();



             //AMBULANCE NOTIFICATION
 
            } else if (event.data.type == 'ambulance') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",      //Font size of title
                    "font-weight": "600"
                })
                $(`.main_notification-${number}`).addClass('ambulance_icon')
                $(`.wrapper-${number}`).addClass('ambulance ambulance_border')
                sound.play();



             //ERROR NOTIFICATION

            } else if (event.data.type == 'error') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",      //Font size of title
                    "font-weight": "600"
                })
                $(`.main_notification-${number}`).addClass('error_icon')
                $(`.wrapper-${number}`).addClass('error error_border')
                sound.play();



             //ANIMATION

            }
            anime({
                targets: `.wrapper-${number}`, 
                translateX: -20,
                direction: 'alterante',
            })


            setTimeout(function () {
                anime({
                    targets: `.wrapper-${number}`,
                    translateX: 350,
                    duration: 900
            
                      
                })
                setTimeout(function () {
                    $(`.wrapper-${number}`).remove()
                }, 900)
            }, event.data.time)
        }
    })
})



