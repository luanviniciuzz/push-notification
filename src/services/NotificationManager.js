import PushNotification from "react-native-push-notification"

let navegador;
class NotificationManager {
    
    setNavegador(novoConteudo)
    {
        navegador = novoConteudo
    }    
    configure = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token);
              },
              
            onAction: function (notification) {
                console.log("ACTION:", notification.action) 
            },
            onNotification: function (notification) {
                navegador.navigate('Cupom') 
            }
        })
    }
    
    buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id: id,
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data            
        }
    }

    
    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            
            ...this.buildAndroidNotification(id, title, message, data, options),

            
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false
        })
    }

    
    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications();
        
    }

    
    agendarNotificacao() {
        
        PushNotification.localNotificationSchedule({
            id: 1,
            date: new Date(Date.now() + 5*1000),
            channelId: 'default-channel-id',
            title: "Oferta surpresa!!",
            message: "O MC Donald's tem uma promoção para você!",
            allowWhileIdle: false,
            repeatType: 'time',
            repeatTime: 15*1000,
            color: "#FF4141"
        })
        
        PushNotification.localNotificationSchedule({
            id: 1,
            date: new Date(Date.now() + 5*1000),
            channelId: 'default-channel-id',
            title: "Oferta surpresa!!",
            message: "O MC Donald's tem uma promoção para você!",
            allowWhileIdle: false,
            repeatType: 'time',
            repeatTime: 15*1000,
            color: "#FF4141"
        })
        
    }


}

export const notificationManager = new NotificationManager();