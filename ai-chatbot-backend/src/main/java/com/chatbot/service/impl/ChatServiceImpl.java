package com.chatbot.service.impl;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;
import com.chatbot.service.ChatService;

@Service
public class ChatServiceImpl implements ChatService {

    private final ChatClient chatClient;

    public ChatServiceImpl(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    @Override
    public String chat(String message) {
        return chatClient.prompt()
                .user(message)
                .call()
                .content();
    }
}
