// NotificationController.java
package com.example.notification.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class NotificationController {
    @MessageMapping("/sendNotification")
    @SendTo("/topic/notifications")
    public String sendNotification(String notification) {
        return notification;
    }
}
